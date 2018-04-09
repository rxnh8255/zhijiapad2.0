package com.zhijiaiot.app;

import android.app.Activity;
import android.content.Intent;
import android.content.OperationApplicationException;
import android.graphics.Bitmap;
import android.os.Handler;
import android.os.Looper;
import android.os.Bundle;
import android.util.Log;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.baidu.dcs.okhttp3.Call;
import com.baidu.dcs.okhttp3.Callback;
import com.baidu.dcs.okhttp3.Response;
import com.google.zxing.BarcodeFormat;
import com.google.zxing.EncodeHintType;
import com.google.zxing.WriterException;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;
import com.zhijiaiot.unit.CommonUtil;
import com.zhijiaiot.unit.HttpUtil;
import com.zhijiaiot.unit.ZhiJiaUrl;
import com.zhijiaiot.unit.ZhijiaPreferenceUtil;
import com.zsoft.signala.ConnectionState;
import com.zsoft.signala.hubs.HubConnection;
import com.zsoft.signala.hubs.HubInvocationMessage;
import com.zsoft.signala.hubs.HubInvokeCallback;
import com.zsoft.signala.hubs.IHubProxy;
import com.zsoft.signala.transport.StateBase;
import com.zsoft.signala.transport.longpolling.LongPollingTransport;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class QRCodeActivity extends Activity {

  private String deviceID;
  private final static String TAG = "lcm";
  ImageView imageView;
  TextView qrcodemsg;

  private boolean firstConnection = true;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_qrcode);

    imageView = findViewById(R.id.qrcodeimg);
    qrcodemsg = findViewById(R.id.qrcodemsg);

    deviceID = CommonUtil.getDeviceUniqueID();
    qrcodemsg.setText("正在登陆,请稍等");
    startMainActivity();
  }

  private void startMainActivity() {
    //判断本地是否登陆了,没登陆去扫码

    if ("".equals(ZhijiaPreferenceUtil.getAccessToken(QRCodeActivity.this))) {

      beginConnect();

    } else {
      HttpUtil.httpPost(QRCodeActivity.this, ZhiJiaUrl.Account, "{}", new Callback() {
        @Override
        public void onFailure(Call call, IOException e) {
          Log.i("kwwl", "onFailure: " + e.getMessage());
        }

        @Override
        public void onResponse(Call call, Response response) throws IOException {
          if (response.isSuccessful()) {
            try {
              String data = response.body().string();
              final JSONObject object = new JSONObject(data);
              if (object.getInt("error_code") != 0) {
                final Handler mainHandler = new Handler(Looper.getMainLooper());
                mainHandler.post(new Runnable() {
                  @Override
                  public void run() {
                    try {
                      Toast.makeText(QRCodeActivity.this,
                        object.getString("error_message"),
                        Toast.LENGTH_SHORT)
                        .show();
                    } catch (JSONException e) {
                      e.printStackTrace();
                    }

                    beginConnect();
                  }
                });
              } else {
                //FamilyUtil.saveFamily(object);
                final Handler mainHandler = new Handler(Looper.getMainLooper());
                mainHandler.post(new Runnable() {
                  @Override
                  public void run() {
                    Intent intent = new Intent(QRCodeActivity.this, MainActivity.class);
                    startActivity(intent);
                    finish();
                  }
                });
              }
            } catch (IOException e) {
              e.printStackTrace();
            } catch (JSONException e) {
              e.printStackTrace();
            }
          }
        }
      });
    }

  }

  /**
   * hub链接
   */
  private HubConnection conn = new HubConnection(ZhiJiaUrl.HUB_URL, this, new LongPollingTransport()) {
    @Override
    public void OnError(Exception exception) {
      Log.d(TAG, "OnError=" + exception.getMessage());
    }

    @Override
    public void OnMessage(String message) {
      Log.d(TAG, "message=" + message);
      try {
        JSONObject jo = new JSONObject(message);
        HubInvocationMessage him = new HubInvocationMessage(jo);
        String eventName = him.getArgs().getString(0);
        //解析传回的数据
        if ("DeviceLogin".equals(eventName)) {
          JSONObject data = him.getArgs().getJSONObject(1);
          if (data.getInt("error_code") == 0) {
            String token = data.getJSONObject("data").getString("access_token");
            ZhijiaPreferenceUtil.setAccessToken(QRCodeActivity.this, token);
            Intent intent = new Intent(QRCodeActivity.this, MainActivity.class);
            startActivity(intent);
            finish();
          }
        }
      } catch (JSONException e) {
        e.printStackTrace();
      }
    }

    @Override
    public void OnStateChanged(StateBase oldState, StateBase newState) {
      //第一次连接上
      if (firstConnection && newState.getState() == ConnectionState.Connected) {

        Bitmap qrBitmap = generateBitmap(deviceID, 400, 400);
        imageView.setImageBitmap(qrBitmap);
        qrcodemsg.setText("请使用智家APP扫码登陆");

        List<String> args = new ArrayList<String>(1);
        args.add(deviceID);

        hub.Invoke("DiscoverPad", args, new HubInvokeCallback() {

          @Override
          public void OnResult(boolean succeeded, String response) {
            Log.i(TAG, "OnResult: " + response);
          }

          @Override
          public void OnError(Exception ex) {
            Log.e(TAG, "OnError: ", ex);
          }
        });

      }

      Log.d(TAG, "OnStateChanged=" + oldState.getState() + " -> " + newState.getState());
    }
  };

  /*
   * hub代理 panderman 2013-10-25
   */
  private IHubProxy hub = null;

  /**
   * 开启推送服务 panderman 2013-10-25
   */
  private void beginConnect() {
    try {
      //conn.getHeaders().put("Authorization","");
      qrcodemsg.setText("请等待服务器连接");
      hub = conn.CreateHubProxy("devicehub");
    } catch (OperationApplicationException e) {
      e.printStackTrace();
    }

    conn.Start();

  }

  @Override
  protected void onDestroy() {
    super.onDestroy();
    if (conn != null)
      conn.Stop();
  }

  private Bitmap generateBitmap(String content, int width, int height) {
    QRCodeWriter qrCodeWriter = new QRCodeWriter();
    Map<EncodeHintType, String> hints = new HashMap<>();
    hints.put(EncodeHintType.CHARACTER_SET, "utf-8");
    try {
      BitMatrix encode = qrCodeWriter.encode(content, BarcodeFormat.QR_CODE, width, height, hints);
      int[] pixels = new int[width * height];
      for (int i = 0; i < height; i++) {
        for (int j = 0; j < width; j++) {
          if (encode.get(j, i)) {
            pixels[i * width + j] = 0x00000000;
          } else {
            pixels[i * width + j] = 0xffffffff;
          }
        }
      }
      return Bitmap.createBitmap(pixels, 0, width, width, height, Bitmap.Config.RGB_565);
    } catch (WriterException e) {
      e.printStackTrace();
    }
    return null;
  }
}
