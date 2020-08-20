package com.example.zmad;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.os.CountDownTimer;
import android.support.annotation.Nullable;
import android.util.Log;
import android.view.KeyEvent;
import android.view.View;
import android.view.WindowManager;
import android.webkit.JavascriptInterface;
import android.widget.ImageView;
import android.widget.TextView;

/**
 * @Description: 激励广告
 * @Author: lee
 * @CreateDate: 2020/7/24 11:02 AM
 */
public class IncentiveActivity extends BaseActivity {
    String url;
    WebViewWrapper wrapper;
    TextView textView;
    int countDown = 15;
    CountDownTimer timer;



    public static void start(Context context, String url, int countDown ) {
        Bundle bundle = new Bundle();
        bundle.putString("url", url);
        bundle.putInt("countDown",countDown);
        Intent intent = new Intent(context, IncentiveActivity.class);
        intent.putExtras(bundle);
        context.startActivity(intent);
    }

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //去掉状态栏
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,
                WindowManager.LayoutParams.FLAG_FULLSCREEN);
    }

    @Override
    protected void initHead() {
        super.initHead();
        setContentView(R.layout.activity_incentive);
        wrapper = findViewById(R.id.wrapper);
        textView = findViewById(R.id.tv_close);
        Bundle bundle = getIntent().getExtras();
        if (bundle != null) {
            url = bundle.getString("url");
            countDown=bundle.getInt("countDown");
        }
        Log.e("IncentiveActivity", url);
        if (url != null) {
            wrapper.loadUrl(url);
        }
        if (countDown!=0){
            textView.setText("" + countDown);
        }

        wrapper.getWebView().addJavascriptInterface(new IncentiveActivity.AndroidJs(), "AndroidJs");


        timer = new CountDownTimer(countDown * 1000, 1000) {
            @Override
            public void onTick(long millisUntilFinished) {
                textView.setText(  millisUntilFinished / 1000+"s");
            }

            @Override
            public void onFinish() {
                textView.setText("关闭");
                textView.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        OnRewardListen.getInstance().callBack.onCallBack();
                        finish();
                    }
                });
            }
        };
        timer.start();
    }



    //禁用返回键
    @Override
    public boolean dispatchKeyEvent(KeyEvent event) {
        if (event.getKeyCode() == KeyEvent.KEYCODE_BACK) {
            return true;
        } else {
            return super.dispatchKeyEvent(event);
        }
    }

    public class AndroidJs {
        @JavascriptInterface
        public void Countdown() {
            countDown--;
            textView.setText(countDown + "");
            if (countDown == 0) {
                textView.setText("关闭");
                textView.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        finish();
                    }
                });
            }
        }
    }

}
