package com.zhijiaiot.app;

import android.media.AudioFormat;
import android.media.AudioRecord;
import android.media.MediaRecorder;
import android.support.annotation.NonNull;
import android.util.Log;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by fujiayi on 2017/11/27.
 */

public class MicrophoneInputStream extends InputStream {
    private static AudioRecord audioRecord;

    private static MicrophoneInputStream is;

    private static List<byte[]> duerData = new ArrayList<byte[]>();

    private boolean isStarted = false;

    private static final String TAG = "MicrophoneInputStream";

    public MicrophoneInputStream() {

        if (audioRecord == null) {
            int bufferSize = AudioRecord.getMinBufferSize(16000,
                    AudioFormat.CHANNEL_CONFIGURATION_MONO, AudioFormat.ENCODING_PCM_16BIT) * 16;
            audioRecord = new AudioRecord(MediaRecorder.AudioSource.MIC,
                    16000, AudioFormat.CHANNEL_CONFIGURATION_MONO, AudioFormat.ENCODING_PCM_16BIT, bufferSize);
        }
    }

    public static List<byte[]> getVoice(){
      if(is == null)
        return  null;
      else
      {
        return  duerData;
      }
    }


    public static MicrophoneInputStream getInstance() {

        if (is == null) {
            synchronized (MicrophoneInputStream.class) {
                if (is == null) {
                    is = new MicrophoneInputStream();
                }
            }
        }
        return is;
    }

    public void start() {
        Log.i(TAG, " MicrophoneInputStream start recoding!");
        try {
            if (audioRecord == null
                    || audioRecord.getState() != AudioRecord.STATE_INITIALIZED) {
                throw new IllegalStateException(
                        "startRecording() called on an uninitialized AudioRecord." + (audioRecord == null));
            }
            audioRecord.startRecording();
        }catch(Exception e){
            Log.e(TAG,e.getClass().getSimpleName(),e);
        }
        Log.i(TAG, " MicrophoneInputStream start recoding finished");
    }

    @Override
    public int read() throws IOException {
        throw new UnsupportedOperationException();
    }

    @Override
    public int read(@NonNull byte[] b, int off, int len) throws IOException {
        if (!isStarted) {
            start(); // 建议在CALLBACK_EVENT_ASR_READY事件中调用。
            isStarted = true;
        }
        try{
            int count = audioRecord.read(b, off, len);
            if(count > 0)
              duerData.add(b);
            //Log.i(TAG, " MicrophoneInputStream read count:" + count);
            return count;
        }catch (Exception e){
            Log.e(TAG, e.getClass().getSimpleName(),e);
            throw e;
        }

    }

    @Override
    public void close() throws IOException {
        Log.i(TAG, " MicrophoneInputStream close");
        if (audioRecord != null) {
            audioRecord.stop();
            // audioRecord.release(); 程序结束别忘记自行释放
            isStarted = false;
            //duerData.clear();
        }
    }
}
