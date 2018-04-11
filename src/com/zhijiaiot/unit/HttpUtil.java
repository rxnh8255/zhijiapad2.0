package com.zhijiaiot.unit;

import android.content.Context;

import okhttp3.Callback;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;


/**
 * Created by rxnh8 on 2018/3/27.
 */

public class HttpUtil {
    private static final MediaType JSON = MediaType.parse("application/json;charset=utf-8");

    public static void  httpPost(Context context, String url, String json, Callback callback){
        OkHttpClient client = new OkHttpClient();
        RequestBody requestBody = RequestBody.create(JSON, json);
        Request request = new Request.Builder().addHeader("Authorization", ZhijiaPreferenceUtil.getAccessToken(context)).url(url).post(requestBody).build();
        client.newCall(request).enqueue(callback);

    }

}
