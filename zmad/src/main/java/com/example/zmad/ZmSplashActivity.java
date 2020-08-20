package com.example.zmad;

import android.content.Context;
import android.content.Intent;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.os.CountDownTimer;
import android.support.annotation.Nullable;
import android.util.Log;
import android.view.KeyEvent;
import android.view.View;
import android.view.WindowManager;
import android.widget.ImageView;
import android.widget.TextView;

import com.bumptech.glide.Glide;
import com.bumptech.glide.load.DataSource;
import com.bumptech.glide.load.engine.GlideException;
import com.bumptech.glide.request.RequestListener;
import com.bumptech.glide.request.target.Target;

public class ZmSplashActivity extends BaseActivity {
    String url;
    String ImgUrl;
    ImageView imageView;
    TextView textView;
    CountDownTimer timer;

    public static void start(Context context, String url, String ImgUrl) {
        Bundle bundle = new Bundle();
        bundle.putString("url", url);
        bundle.putString("ImgUrl", ImgUrl);
        Intent intent = new Intent(context, ZmSplashActivity.class);
        intent.putExtras(bundle);
        context.startActivity(intent);
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //去掉状态栏
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,
                WindowManager.LayoutParams.FLAG_FULLSCREEN);

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

    @Override
    protected void initHead() {
        setContentView(R.layout.activity_zm_splash);
        imageView = this.findViewById(R.id.iv_action);
        textView = this.findViewById(R.id.tv_close);
        Log.e("zhumeng", "inithead");
        Bundle bundle = getIntent().getExtras();
        if (bundle != null) {
            url = bundle.getString("url");
            ImgUrl = bundle.getString("ImgUrl");
        }
    }

    @Override
    protected void initView() {

        Log.e("zhumeng", "initView");


        imageView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                WebActivity.start(ZmSplashActivity.this, url);
            }
        });

        textView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
            }
        });

        timer = new CountDownTimer(4000, 1000) {
            @Override
            public void onTick(long millisUntilFinished) {
                textView.setText("跳过广告 " + millisUntilFinished / 1000+"s");
            }

            @Override
            public void onFinish() {
                textView.setText("跳过");
                textView.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        finish();
                    }
                });
                finish();
            }
        };
        Glide.with(ZmSplashActivity.this).load(ImgUrl).addListener(new RequestListener<Drawable>() {
            @Override
            public boolean onLoadFailed(@Nullable GlideException e, Object model, Target<Drawable> target, boolean isFirstResource) {
                return false;
            }

            @Override
            public boolean onResourceReady(Drawable resource, Object model, Target<Drawable> target, DataSource dataSource, boolean isFirstResource) {
                timer.start();
                return false;
            }
        }).fitCenter().into(imageView);


    }
}