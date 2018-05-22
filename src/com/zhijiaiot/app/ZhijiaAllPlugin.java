package com.zhijiaiot.app;

import android.Manifest;
import android.content.Context;
import android.content.Intent;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.media.AudioManager;
import android.os.PowerManager;
import android.text.TextUtils;
import android.util.Log;
import android.widget.Toast;

import com.baidu.dcs.okhttp3.Call;
import com.baidu.dcs.okhttp3.Callback;
import com.baidu.dcs.okhttp3.OkHttpClient;
import com.baidu.dcs.okhttp3.Request;
import com.baidu.dcs.okhttp3.Response;
import com.baidu.duer.dcs.androidapp.BlankVideoPlayActivity;
import com.baidu.duer.dcs.androidsystemimpl.PlatformFactoryImpl;
import com.baidu.duer.dcs.devicemodule.screen.ScreenDeviceModule;
import com.baidu.duer.dcs.devicemodule.screen.extend.card.ScreenExtendDeviceModule;
import com.baidu.duer.dcs.devicemodule.screen.message.RenderCardPayload;
import com.baidu.duer.dcs.devicemodule.screen.message.RenderVoiceInputTextPayload;
import com.baidu.duer.dcs.devicemodule.voiceinput.VoiceInputDeviceModule;
import com.baidu.duer.dcs.framework.DcsFramework;
import com.baidu.duer.dcs.framework.DeviceModuleFactory;
import com.baidu.duer.dcs.framework.IResponseListener;
import com.baidu.duer.dcs.framework.message.Directive;
import com.baidu.duer.dcs.http.HttpConfig;
import com.baidu.duer.dcs.oauth.api.IOauth;
import com.baidu.duer.dcs.oauth.api.OauthImpl;
import com.baidu.duer.dcs.systeminterface.IPlatformFactory;
import com.baidu.duer.dcs.systeminterface.IWakeUp;
import com.baidu.duer.dcs.util.CommonUtil;
import com.baidu.duer.dcs.util.LogUtil;
import com.baidu.duer.dcs.util.NetWorkUtil;
import com.baidu.duer.dcs.wakeup.WakeUp;
import com.baidu.tts.client.SpeechError;
import com.baidu.tts.client.SpeechSynthesizer;
import com.baidu.tts.client.SpeechSynthesizerListener;
import com.baidu.tts.client.TtsMode;
import com.pili.pldroid.player.AVOptions;
import com.pili.pldroid.player.PLMediaPlayer;
import com.pili.pldroid.player.PLOnCompletionListener;
import com.pili.pldroid.player.PLOnErrorListener;
import com.pili.pldroid.player.PLOnPreparedListener;
import com.pili.pldroid.player.PlayerState;
import com.zhijiaiot.unit.SystemServiceManager;
import com.zhijiaiot.unit.ZhijiaPreferenceUtil;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.PermissionHelper;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by rxnh8 on 2018/4/3.
 */

public class ZhijiaAllPlugin extends CordovaPlugin {
  public static final String TAG = "ZhijiaAllPlugin";
  private static CallbackContext mainContext;
  private String permission = Manifest.permission.RECORD_AUDIO;
  private PLMediaPlayer mMediaPlayer;
  private DeviceModuleFactory deviceModuleFactory;
  private IPlatformFactory platformFactory;
  private DcsFramework dcsFramework;
  private List<byte[]> duerData = new ArrayList<>();
  private String lastAsr;
  private boolean isStopListenReceiving;
  // 唤醒
  private WakeUp wakeUp;
  //百度TTS
  SpeechSynthesizer mSpeechSynthesizer;

  protected void getMicPermission(int requestCode) {
    PermissionHelper.requestPermission(this, requestCode, permission);
  }
  public void onRequestPermissionResult(int requestCode, String[] permissions,
                                        int[] grantResults) throws JSONException {
    for (int r : grantResults) {
      if (r == PackageManager.PERMISSION_DENIED) {
        sendError("用户未授权录音机");
        return;
      }
    }
    promptForRecord();
  }
  private void promptForRecord() {
    if (PermissionHelper.hasPermission(this, permission)) {
      Log.i(TAG,"开启唤醒");

      // init唤醒
      wakeUp = new WakeUp(platformFactory.getWakeUp(),
        platformFactory.getAudioRecord());
      wakeUp.addWakeUpListener(wakeUpListener);
      // 开始录音，监听是否说了唤醒词
      wakeUp.startWakeUp();

      //platformFactory.getVoiceInput().stopRecord();
    } else {
      getMicPermission(0);
    }
  }

  public static CallbackContext getCurrentCallbackContext() {
    return mainContext;
  }
  private Context getApplicationContext() {
    return this.cordova.getActivity().getApplicationContext();
  }

  private void initFreamwork(){

//    asr = EventManagerFactory.create(getApplicationContext(), "asr"); // this是Activity或其它Context类
//    asr.registerListener( new EventListener() {
//      @Override
//      public void onEvent(String name, final String params, byte[] data, int offset, int length) {
//        if(name.equals(SpeechConstant.CALLBACK_EVENT_ASR_READY)){
//          Log.i(TAG, "语义解析开始开始: "+params);
//          duerData.clear();
//          // 引擎就绪，可以说话，一般在收到此事件后通过UI通知用户可以说话了
//        }
//        if(name.equals(SpeechConstant.CALLBACK_EVENT_ASR_AUDIO)){
//          if(length > 0) {
//            duerData.add(data);
//          }
//        }
//        if(name.equals(SpeechConstant.CALLBACK_EVENT_ASR_PARTIAL)){
//          Log.i(TAG, "语义解析结果: "+params);
//
//          try {
//            final JSONObject jo = new JSONObject(params);
//            String mess = jo.getJSONArray("results_recognition").getString(0);
//            lastAsr = mess;
//
//          } catch (JSONException e) {
//            e.printStackTrace();
//          }
//        }
//        if(name.equals(SpeechConstant.CALLBACK_EVENT_ASR_FINISH)){
//          // 识别结束
//          Log.i(TAG, "识别结束: "+params);
//
////          if((params.contains("No recognition result match")||params.contains("VAD detect no speech")) && firstWK){ //输出小智在
////            firstWK = false;
////            mSpeechSynthesizer.speak("我在,请说","xz");
////          }else
//            if(!params.contains("No recognition result match") && !params.contains("VAD detect no speech")){
//
//              for (int i=0;i<duerData.size();i++){
//                byte[] singedata = duerData.get(i);
//                platformFactory.getBlockQuque().add(singedata);
//              }
//              sendEvent("nlp",lastAsr);
//              //把最后的结果发给UNIT解析:
//
////              if(duerData.size() > 0){
////                beginDuerLisning();
////              }
//
//          }else{
//              sendEvent("nlp","no");
//            }
//        }
//      }
//    });

    //初始化TTS
    mSpeechSynthesizer = SpeechSynthesizer.getInstance();
    mSpeechSynthesizer.setContext(getApplicationContext());
    mSpeechSynthesizer.setSpeechSynthesizerListener(new SpeechSynthesizerListener(){

      @Override
      public void onSynthesizeStart(String s) {           }
      @Override
      public void onSynthesizeDataArrived(String s, byte[] bytes, int i) {            }

      @Override
      public void onSynthesizeFinish(String s) {
        Log.i(TAG, "onSynthesizeFinish: ");
      }
      @Override
      public void onSpeechStart(String s) {            }
      @Override
      public void onSpeechProgressChanged(String s, int i) {            }

      @Override
      public void onSpeechFinish(String s) {
        Log.i(TAG, "onSpeechFinish: "+s);

        sendEvent("ttsStoped",s);

      }
      @Override
      public void onError(String s, SpeechError speechError) {

      }
    });
    mSpeechSynthesizer.setAppId("10099877"/*这里只是为了让Demo运行使用的APPID,请替换成自己的id。*/);
    mSpeechSynthesizer.setApiKey("BEaA7Pk5LPkdvZnpNvM81xra","fda5a5cfbce396f20b21c3510412989d"/*这里只是为了让Demo正常运行使用APIKey,请替换成自己的APIKey*/);
    // 5. 以下setParam 参数选填。不填写则默认值生效
    // 设置在线发声音人： 0 普通女声（默认） 1 普通男声 2 特别男声 3 情感男声<度逍遥> 4 情感儿童声<度丫丫>
    mSpeechSynthesizer.setParam(SpeechSynthesizer.PARAM_SPEAKER, "0");
    // 设置合成的音量，0-9 ，默认 5
    mSpeechSynthesizer.setParam(SpeechSynthesizer.PARAM_VOLUME, "9");
    // 设置合成的语速，0-9 ，默认 5
    mSpeechSynthesizer.setParam(SpeechSynthesizer.PARAM_SPEED, "5");
    // 设置合成的语调，0-9 ，默认 5
    mSpeechSynthesizer.setParam(SpeechSynthesizer.PARAM_PITCH, "5");
    mSpeechSynthesizer.setParam(SpeechSynthesizer.PARAM_MIX_MODE, SpeechSynthesizer.MIX_MODE_HIGH_SPEED_NETWORK);
    mSpeechSynthesizer.initTts(TtsMode.ONLINE);

    IOauth baiduOauth = new OauthImpl();
    HttpConfig.setAccessToken(baiduOauth.getAccessToken());

    platformFactory = new PlatformFactoryImpl(this.getApplicationContext());
    dcsFramework = new DcsFramework(platformFactory);
    deviceModuleFactory = dcsFramework.getDeviceModuleFactory();
    deviceModuleFactory.createVoiceOutputDeviceModule();
    deviceModuleFactory.createVoiceInputDeviceModule(); //分析录音1
    deviceModuleFactory.createAlertsDeviceModule();

    deviceModuleFactory.createAudioPlayerDeviceModule();
    deviceModuleFactory.createSystemDeviceModule();
    deviceModuleFactory.createSpeakControllerDeviceModule();
    deviceModuleFactory.createPlaybackControllerDeviceModule();

    deviceModuleFactory.createScreenDeviceModule();

    deviceModuleFactory.getVoiceInputDeviceModule().addVoiceInputListener(
      new VoiceInputDeviceModule.IVoiceInputListener() {
        @Override
        public void onStartRecord() {
          LogUtil.d(TAG, "onStartRecord");
          startRecording();
        }

        @Override
        public void onFinishRecord() {
          LogUtil.d(TAG, "onFinishRecord");
          stopRecording();
        }

        @Override
        public void onSucceed(int statusCode) {
          LogUtil.d(TAG, "onSucceed-statusCode:" + statusCode);
          if (statusCode != 200) {
            stopRecording();
            Toast.makeText(getApplicationContext(),
              "语音成功",
              Toast.LENGTH_SHORT)
              .show();
          }
        }

        @Override
        public void onFailed(String errorMessage) {
          LogUtil.d(TAG, "onFailed-errorMessage:" + errorMessage);
          stopRecording();
          Toast.makeText(getApplicationContext(),
            "语音失败",
            Toast.LENGTH_SHORT)
            .show();
        }
      });


    deviceModuleFactory.createScreenExtendDeviceModule();
    deviceModuleFactory.getScreenExtendDeviceModule().addListener(new ScreenExtendDeviceModule.IRenderExtendListener(){

      @Override
      public void onRenderDirective(Directive directive) {
        Log.i(TAG, "getScreenExtendDeviceModule: "+directive.rawMessage);
      }
    });
    deviceModuleFactory.getScreenDeviceModule()
      .addRenderVoiceInputTextListener(new ScreenDeviceModule.IRenderVoiceInputTextListener() {
        @Override
        public void onRenderVoiceInputText(RenderVoiceInputTextPayload payload) {
          Log.i(TAG, "onRenderVoiceInputText: "+payload.text);
          if(payload.type == RenderVoiceInputTextPayload.Type.FINAL){ //最终结果
            sendEvent("nlp",payload.text);
          }
        }

      });

    deviceModuleFactory.getScreenDeviceModule().addRenderListener(new ScreenDeviceModule.IRenderListener() {
      @Override
      public void onRenderDirective(Directive directive) {

        Log.i(TAG, "传回的screen数据: "+directive.rawMessage);

        if(directive.getPayload() instanceof RenderCardPayload){
          RenderCardPayload rcp =  (RenderCardPayload)directive.getPayload();

          Log.i(TAG, "rcpType: "+rcp.type);
          if(rcp.type == RenderCardPayload.Type.StandardCard){
            //rcp.link.url
            String url = "https://zhijiaiot.com/api/baidu/GetVideoUrl?originalUrl="+rcp.link.url;
            Log.i(TAG, "播放的url: "+url);

//            OkHttpClient client = new OkHttpClient();
//            Request request = new Request.Builder().url(url).build();
//            client.newCall(request).enqueue(new Callback() {
//              @Override
//              public void onFailure(Call call, IOException e) {
//                Log.i("kwwl", "onFailure: "+e.getMessage());
//              }
//              @Override
//              public void onResponse(Call call, Response response) throws IOException {
//                if(response.isSuccessful()){//回调的方法执行在子线程。
//                  Log.d("kwwl","获取数据成功了");
//                  Log.d("kwwl","response.code()=="+response.code());
//
//                  String data = response.body().string();
//                  data = data.replace("\\\"","'");
//                  if(data.length() > 1) {
//                    data = data.substring(1, data.length() - 1);
//                  }
//                  Log.d("kwwl","response.body().string()=="+data);
//                  //voiceButton.setText(getResources().getString(R.string.dianshi));
//                  try {
//                    Log.i("kwwl", "onResponse: "+data);
//                    JSONObject object = new JSONObject(data);
//                    JSONObject listeam =  object.getJSONObject("streams");
//
//                    JSONObject streams;
//                    if(listeam.has("HD")){
//                      streams = listeam.getJSONObject("HD");
//                    }else if(listeam.has("TD")){
//                      streams = listeam.getJSONObject("TD");
//                    }
//                    else{
//                      streams = listeam.getJSONObject("SD");
//                    }
//
//                    final String newUrl = streams.getString("m3u8_url");
//
//                    runOnUiThread(new Runnable() {
//                      @Override
//                      public void run() {
//                        Intent intent = new Intent(this.this,BlankVideoPlayActivity.class);
//                        //采用Intent普通传值的方式
//                        intent.putExtra("m3u8Url", newUrl);
//                        //跳转Activity
//                        startActivityForResult(intent, 1500);
//
//
//                        Toast.makeText(ZhijiaAllPlugin.this,
//                          "准备播放视频",
//                          Toast.LENGTH_SHORT)
//                          .show();
//                        //已在主线程中，可以更新UI
//                      }
//                    });
//
//                  }catch (Exception ex){
//                    Log.i("kwwl",ex.getMessage());
//                  }
//
//                }
//              }
//            });
          }
        }

      }
    });

    promptForRecord();
  }

  @Override
  public void initialize(CordovaInterface cordova, CordovaWebView webView) {
    super.initialize(cordova, webView);
    initMediaPlayer();
    initFreamwork();
  }

  private void stopRecording() {
    wakeUp.startWakeUp();
    isStopListenReceiving = false;
    sendEvent("nlp","no");
  }

  private void startRecording() {
    wakeUp.stopWakeUp();
    isStopListenReceiving = true;
    deviceModuleFactory.getSystemProvider().userActivity();
  }

  private IResponseListener playPauseResponseListener = new IResponseListener() {
    @Override
    public void onSucceed(int statusCode) {
      if (statusCode == 204) {
      }
    }

    @Override
    public void onFailed(String errorMessage) {
    }
  };
  private IWakeUp.IWakeUpListener wakeUpListener = new IWakeUp.IWakeUpListener() {
    @Override
    public void onWakeUpSucceed() {
      Log.i(TAG, "onWakeUpSucceed: 唤醒成功");
      sendEvent("wakeup","true");
      //beginDuer();
    }
  };

  private void beginDuer(){

    dcsFramework.blockingDeque.clear();
    if (!NetWorkUtil.isNetworkConnected(this.getApplicationContext())) {
      //重连
      wakeUp.startWakeUp();
      return;
    }
    if (CommonUtil.isFastDoubleClick()) {
      return;
    }

    if (!dcsFramework.getDcsClient().isConnected()) {
      dcsFramework.getDcsClient().startConnect();
      return;
    }
    if (isStopListenReceiving) {
      platformFactory.getVoiceInput().stopRecord();
      isStopListenReceiving = false;
      return;
    }
    isStopListenReceiving = true;
    platformFactory.getVoiceInput().startRecord();
    doUserActivity();
  }
  private void doUserActivity() {
    deviceModuleFactory.getSystemProvider().userActivity();
  }

  private void initMediaPlayer(){
    AVOptions options = new AVOptions();
    // 解码方式:
// codec＝AVOptions.MEDIA_CODEC_HW_DECODE，硬解
// codec=AVOptions.MEDIA_CODEC_SW_DECODE, 软解
// codec=AVOptions.MEDIA_CODEC_AUTO, 硬解优先，失败后自动切换到软解
// 默认值是：MEDIA_CODEC_SW_DECODE
    options.setInteger(AVOptions.KEY_MEDIACODEC, AVOptions.MEDIA_CODEC_SW_DECODE);
    // 若设置为 1，则底层会进行一些针对直播流的优化
    //options.setInteger(AVOptions.KEY_LIVE_STREAMING, 1);
    // 快开模式，启用后会加快该播放器实例再次打开相同协议的视频流的速度
    //options.setInteger(AVOptions.KEY_FAST_OPEN, 1);

    options.setInteger(AVOptions.KEY_PREPARE_TIMEOUT, 10 * 1000);
    options.setInteger(AVOptions.KEY_LOG_LEVEL, 5);

    mMediaPlayer = new PLMediaPlayer(getApplicationContext(),options);
    mMediaPlayer.setWakeMode(getApplicationContext(), PowerManager.PARTIAL_WAKE_LOCK);
    mMediaPlayer.setOnPreparedListener(new PLOnPreparedListener(){
      @Override
      public void onPrepared(int i) {
        mMediaPlayer.start();
        sendEvent("media","started");
      }
    });

    mMediaPlayer.setOnCompletionListener(new PLOnCompletionListener(){
      @Override
      public void onCompletion() {
        sendEvent("media","stoped");
      }
    });

    mMediaPlayer.setOnErrorListener(new PLOnErrorListener(){

      @Override
      public boolean onError(int errorCode) {
        Log.i(TAG, "onError: "+errorCode);
        switch (errorCode) {
          case PLOnErrorListener.ERROR_CODE_IO_ERROR:
            /**
             * SDK will do reconnecting automatically
             */
            //Utils.showToastTips(PLAudioPlayerActivity.this, "IO Error !");
            return false;
          case PLOnErrorListener.ERROR_CODE_OPEN_FAILED:
            //Utils.showToastTips(PLAudioPlayerActivity.this, "failed to open player !");
            break;
          case PLOnErrorListener.ERROR_CODE_SEEK_FAILED:
            //Utils.showToastTips(PLAudioPlayerActivity.this, "failed to seek !");
            break;
          default:
            //Utils.showToastTips(PLAudioPlayerActivity.this, "unknown error !");
            break;
        }
        return false;
      }
    });


  }

  @Override
  public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
    try {
      final JSONObject arg_object = args.getJSONObject(0);
      if ("registerNotify".equals(action)) {
        mainContext = callbackContext;
        PluginResult result = new PluginResult(PluginResult.Status.NO_RESULT);
        result.setKeepCallback(true);
        callbackContext.sendPluginResult(result);

      }else if("getToken".equals(action)){
        callbackContext.success( ZhijiaPreferenceUtil.getAccessToken(SystemServiceManager.getAppContext()));

      }else if("start".equals(action)){
        //开始百度识别
        //String json = "{\"accept-audio-data\":false,\"pid\":1536,\"vad.endpoint-timeout\":\"800\",\"infile\":\"#com.zhijiaiot.app.MicrophoneInputStream.getInstance()\"}";
//        String json = "{\"accept-audio-data\":false,\"pid\":1536,\"vad.endpoint-timeout\":\"800\",\"accept-audio-data\":\"true\"}";
//        asr.send(SpeechConstant.ASR_START, json, null, 0, 0);

        beginDuer();
        callbackContext.sendPluginResult( new PluginResult(PluginResult.Status.OK) );
      }else if("stop".equals(action)){
        platformFactory.getVoiceInput().stopRecord();
        isStopListenReceiving = false;
        callbackContext.sendPluginResult( new PluginResult(PluginResult.Status.OK) );
      }
      else if("ttsPlay".equals(action)){
        String text = arg_object.getString("text");
        String utteranceId = arg_object.getString("utteranceId");
        mSpeechSynthesizer.speak(text,utteranceId);
        callbackContext.sendPluginResult( new PluginResult(PluginResult.Status.OK) );
      }else if("ttsStop".equals(action)){
        mSpeechSynthesizer.stop();
        callbackContext.sendPluginResult( new PluginResult(PluginResult.Status.OK) );
      }else if("playAudio".equals(action)){
        String url = arg_object.getString("url");
        mMediaPlayer.setDataSource(url);
        mMediaPlayer.prepareAsync();
      } else if("stopAudio".equals(action)){
        if(mMediaPlayer.getPlayerState() == PlayerState.PLAYING)
        {
          mMediaPlayer.stop();
        }
        platformFactory.getPlayback().pause(playPauseResponseListener);
      }else if("duerBegin".equals(action)){
        dcsFramework.handleCurrDirective();
//        if(duerData.size() > 0){
//          beginDuerLisning();
//        }
      }
      else{
        callbackContext.error("Invalid action");
        return false;
      }
      return  true;

    } catch(Exception e) {
      System.err.println("Exception: " + e.getMessage());
      callbackContext.error(e.getMessage());
      return false;
    }
  }

  private void sendEvent(String type, String msg) {
    JSONObject response = new JSONObject();
    try {
      response.put("type", type);
      response.put("message", msg);

      PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, response);
      pluginResult.setKeepCallback(true);
      CallbackContext pushCallback = getCurrentCallbackContext();
      if (pushCallback != null) {
        pushCallback.sendPluginResult(pluginResult);
      }

    } catch (JSONException e) {
      sendError(e.getMessage());
    }
  }
  public void sendError(String message) {
    PluginResult pluginResult = new PluginResult(PluginResult.Status.ERROR, message);
    pluginResult.setKeepCallback(true);
    CallbackContext pushCallback = getCurrentCallbackContext();
    if (pushCallback != null) {
      pushCallback.sendPluginResult(pluginResult);
    }
  }

  @Override
  public void onDestroy() {
    super.onDestroy();
    if(mMediaPlayer != null) {
      mMediaPlayer.release();
      mMediaPlayer = null;
    }
  }
}
