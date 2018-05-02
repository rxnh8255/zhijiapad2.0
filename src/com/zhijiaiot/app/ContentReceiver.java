package com.zhijiaiot.app;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.widget.Toast;

/**
 * Created by rxnh8 on 2018/4/28.
 */

public class ContentReceiver extends BroadcastReceiver {
  @Override
  public void onReceive(Context context, Intent intent) {
    Intent it=new Intent(context,QRCodeActivity.class);
    //it.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
    context.startActivity(it);
    Toast.makeText(context,"我自启动成功了哈",Toast.LENGTH_LONG).show();
  }
}
