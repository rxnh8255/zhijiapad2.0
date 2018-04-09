package com.zhijiaiot.app;

import android.os.Bundle;
import android.app.Activity;
import android.util.Log;
import android.widget.TextView;

import com.baidu.speech.EventListener;
import com.baidu.speech.EventManager;
import com.baidu.speech.EventManagerFactory;
import com.baidu.speech.asr.SpeechConstant;
import com.baidu.tts.client.SpeechError;
import com.baidu.tts.client.SpeechSynthesizer;
import com.baidu.tts.client.SpeechSynthesizerListener;
import com.baidu.tts.client.TtsMode;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;

public class TestActivity extends Activity {
  public static final String TAG = "TestActivity";
  private boolean isBeginBaiduASR = false;
  private boolean firstWK = true; //唤醒第一次
  private String lastAsr;
  //百度唤醒
  private EventManager wp;
  //百度识别
  private EventManager asr;
  //百度TTS
  SpeechSynthesizer mSpeechSynthesizer;

  TextView messageTest;
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_test);
    messageTest = findViewById(R.id.messageTest);
    messageTest.setText("测试界面");

    initFreamwork();

    Map<String, Object> params = new HashMap<String, Object>();
    params.put(SpeechConstant.WP_WORDS_FILE, "assets:///WakeUp.bin");
    params.put(SpeechConstant.ACCEPT_AUDIO_DATA,false);
    params.put(SpeechConstant.APP_ID,10099877);
    String json = new JSONObject(params).toString();
    wp.send(SpeechConstant.WAKEUP_START, json, null, 0, 0);

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


          if((params.contains("No recognition result match")||params.contains("VAD detect no speech")) && firstWK){ //输出小智在
            firstWK = false;
            mSpeechSynthesizer.speak("我在,请说","xz");
          }else if(!params.contains("No recognition result match") && !params.contains("VAD detect no speech")){

            messageTest.setText(lastAsr);
            //sendEvent("npl",lastAsr);
            //把最后的结果发给UNIT解析:
            //UnitInvoke(lastAsr);

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

              //sendEvent("wakeup",wkjson.toString());
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
        //beginDuerLisning();
        if("xz".equals(s)){
          String json = "{\"accept-audio-data\":false,\"disable-punctuation\":false,\"pid\":1536,\"vad.endpoint-timeout\":\"100\"}";
          asr.send(SpeechConstant.ASR_START, json, null, 0, 0);
        }
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


    //promptForRecord();
  }



}
