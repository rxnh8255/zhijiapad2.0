package com.zhijiaiot.app;

import android.Manifest;
import android.content.Context;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.media.AudioManager;
import android.os.PowerManager;
import android.util.Log;

import com.baidu.speech.EventListener;
import com.baidu.speech.EventManager;
import com.baidu.speech.EventManagerFactory;
import com.baidu.speech.asr.SpeechConstant;
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
  private List<byte[]> duerData;
  private boolean isBeginBaiduASR = false;
  private boolean firstWK = true; //唤醒第一次
  private String lastAsr;
  //百度唤醒
  private EventManager wp;
  //百度识别
  private EventManager asr;
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

//      wakeup = EventManagerFactory.create(getApplicationContext(), "wp");
//      wakeup.registerListener(wakeupListener);
//
//      Map<String, Object> params = new LinkedHashMap<String, Object>();
//      params.put(com.baidu.speech.asr.SpeechConstant.APP_ID, "10099877");
//      params.put(com.baidu.speech.asr.SpeechConstant.ACCEPT_AUDIO_VOLUME, false);
//      params.put(com.baidu.speech.asr.SpeechConstant.WP_WORDS_FILE, "assets:///WakeUp.bin");
//      String json = null; // 这里可以替换成你需要测试的json
//      json = new JSONObject(params).toString();
//      wakeup.send(com.baidu.speech.asr.SpeechConstant.WAKEUP_START, json, null, 0, 0);

//      Map<String, Object> params = new HashMap<String, Object>();
//      params.put(SpeechConstant.WP_WORDS_FILE, "assets:///WakeUp.bin");
//      params.put(SpeechConstant.ACCEPT_AUDIO_DATA,false);
//      params.put(SpeechConstant.APP_ID,10099877);
//      String json = new JSONObject(params).toString();
//      wp.send(SpeechConstant.WAKEUP_START, json, null, 0, 0);
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
    asr = EventManagerFactory.create(getApplicationContext(), "asr"); // this是Activity或其它Context类
    asr.registerListener( new EventListener() {
      @Override
      public void onEvent(String name, final String params, byte[] data, int offset, int length) {
        if(name.equals(SpeechConstant.CALLBACK_EVENT_ASR_READY)){
          Log.i(TAG, "语义解析开始开始: "+params);

          // 引擎就绪，可以说话，一般在收到此事件后通过UI通知用户可以说话了
        }
        if(name.equals(SpeechConstant.CALLBACK_EVENT_ASR_PARTIAL)){
          Log.i(TAG, "语义解析结果: "+params);

          try {
            final JSONObject jo = new JSONObject(params);
            String mess = jo.getJSONArray("results_recognition").getString(0);
            lastAsr = mess;

          } catch (JSONException e) {
            e.printStackTrace();
          }
        }
        if(name.equals(SpeechConstant.CALLBACK_EVENT_ASR_FINISH)){
          // 识别结束
          Log.i(TAG, "识别结束: "+params);

//          if((params.contains("No recognition result match")||params.contains("VAD detect no speech")) && firstWK){ //输出小智在
//            firstWK = false;
//            mSpeechSynthesizer.speak("我在,请说","xz");
//          }else
            if(!params.contains("No recognition result match") && !params.contains("VAD detect no speech")){

            sendEvent("nlp",lastAsr);
            //把最后的结果发给UNIT解析:
            //UnitInvoke(lastAsr);

          }else{
              sendEvent("nlp","no");
            }
        }
      }
    });

    wp = EventManagerFactory.create(getApplicationContext(), "wp");
    wp.registerListener(new EventListener(){

      @Override
      public void onEvent(String name, String params, byte[] data, int offset, int length) {
        if(name.equals(SpeechConstant.CALLBACK_EVENT_WAKEUP_AUDIO)){ //音频数据

          if(isBeginBaiduASR){
            if(length > 0) {
              //duerData.add(data);
            }
          }

//                if(isStopListenReceiving){ //开始记录
//                    if(length > 0) {
//                        //Log.i(TAG, "onEvent: 音频数据:"+length+" 偏移:"+offset);
//                        platformFactory.getBlockQuque().add(data);
//                    }
//                }else if(!isStopListenReceiving){
//                    //根据dueros停止录音
//                    asr.send(SpeechConstant.ASR_STOP, "{}", null, 0, 0);
//                }
        }
        if(name.equals(SpeechConstant.CALLBACK_EVENT_WAKEUP_SUCCESS)){ //唤醒成功
          Log.i(TAG, "唤醒成功: "+params);

          try {
            JSONObject wkjson = new JSONObject(params);
            String word = wkjson.getString("word");
            if("小智小智".equals(word)){


              sendEvent("wakeup",wkjson.toString());
              //deviceModuleFactory.getVoiceInputDeviceModule().stopSpeaker();
              //把正在播放的暂停了

              firstWK = true;
              //开始百度识别
              String json = "{\"accept-audio-data\":false,\"disable-punctuation\":false,\"pid\":1536,\"vad.endpoint-timeout\":\"100\"}";
              asr.send(SpeechConstant.ASR_START, json, null, 0, 0);

              //duerData.clear();//每次喊小智小智的时候,把data清空
              isBeginBaiduASR = true;
              //beginDuerLisning();

            }else if("播放".equals(word)){


              //platformFactory.getPlayback().play(playPauseResponseListener);
              //doUserActivity();
            }else if("暂停".equals(word)){


              //platformFactory.getPlayback().pause(playPauseResponseListener);
              //doUserActivity();
            }else if("下一首".equals(word)) {
              //platformFactory.getPlayback().next(nextPreResponseListener);
              //doUserActivity();
            }
          } catch (JSONException e) {
            e.printStackTrace();
          }

        }
      }
    });

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

        //beginDuerLisning();
//        if("xz".equals(s)){
//          String json = "{\"accept-audio-data\":false,\"disable-punctuation\":false,\"pid\":1536,\"vad.endpoint-timeout\":\"100\"}";
//          asr.send(SpeechConstant.ASR_START, json, null, 0, 0);
//        }
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

    promptForRecord();
  }

  @Override
  public void initialize(CordovaInterface cordova, CordovaWebView webView) {
    super.initialize(cordova, webView);
//    Context context = this.cordova.getActivity().getApplicationContext();

//   ApplicationInfo applicationInfo = null;
//    try {
//      applicationInfo = context.getPackageManager().getApplicationInfo(context.getPackageName(), PackageManager.GET_META_DATA);
//    } catch (PackageManager.NameNotFoundException e) {
//      e.printStackTrace();
//    }

    initMediaPlayer();

    initFreamwork();

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
        String json = "{\"accept-audio-data\":false,\"disable-punctuation\":false,\"pid\":1536,\"vad.endpoint-timeout\":\"800\"}";
        asr.send(SpeechConstant.ASR_START, json, null, 0, 0);
        callbackContext.sendPluginResult( new PluginResult(PluginResult.Status.OK) );
      }else if("stop".equals(action)){
        asr.send(SpeechConstant.ASR_STOP,"",null,0,0);
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
