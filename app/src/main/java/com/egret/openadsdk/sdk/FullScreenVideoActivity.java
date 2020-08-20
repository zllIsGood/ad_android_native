package com.egret.openadsdk.sdk;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.util.Log;
import android.widget.Toast;

import com.bytedance.sdk.openadsdk.AdSlot;
import com.bytedance.sdk.openadsdk.TTAdConstant;
import com.bytedance.sdk.openadsdk.TTAdManager;
import com.bytedance.sdk.openadsdk.TTAdNative;
import com.bytedance.sdk.openadsdk.TTAppDownloadListener;
import com.bytedance.sdk.openadsdk.TTFullScreenVideoAd;
import com.egret.openadsdk.MainActivity;
import com.egret.openadsdk.R;
import com.google.gson.JsonObject;


/**
 * Created by bytedance on 2018/2/1.
 */

public class FullScreenVideoActivity extends Activity {
    private static final String TAG = "FullScreenVideoActivity";

    private TTAdNative mTTAdNative;
    private TTFullScreenVideoAd mttFullVideoAd;
    private String mHorizontalCodeId;
    private String mVerticalCodeId;
    private boolean mIsExpress = false; //是否请求模板广告
    private Boolean is_horizontal;
    @SuppressWarnings("RedundantCast")
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_full_screen_video);

        //step1:初始化sdk
        TTAdManager ttAdManager = TTAdManagerHolder.get();
        //step2:(可选，强烈建议在合适的时机调用):申请部分权限，如read_phone_state,防止获取不了imei时候，下载类广告没有填充的问题。
        TTAdManagerHolder.get().requestPermissionIfNecessary(this);
        //step3:创建TTAdNative对象,用于调用广告请求接口
        mTTAdNative = ttAdManager.createAdNative(getApplicationContext());
        getExtraInfo();
        this.getExtraAndload();
    }


    private void getExtraInfo() {
        Intent intent = getIntent();
        if (intent == null) {
            return;
        }
        mHorizontalCodeId = intent.getStringExtra("horizontal_rit");
        mVerticalCodeId = intent.getStringExtra("vertical_rit");
        mIsExpress = intent.getBooleanExtra("is_express", false);

        is_horizontal= intent.getBooleanExtra("is_horizontal",true);
    }
    private void getExtraAndload(){

        if(is_horizontal){
            loadAd(mHorizontalCodeId, TTAdConstant.HORIZONTAL);
        }else{
            loadAd(mVerticalCodeId, TTAdConstant.VERTICAL);
        }
    }
    private  void playAd(){
        if (mttFullVideoAd != null) {
            //step6:在获取到广告后展示
            //该方法直接展示广告
            //mttFullVideoAd.showFullScreenVideoAd(FullScreenVideoActivity.this);

            //展示广告，并传入广告展示的场景
            mttFullVideoAd.showFullScreenVideoAd(FullScreenVideoActivity.this, TTAdConstant.RitScenes.GAME_GIFT_BONUS, null);
            mttFullVideoAd = null;
        } else {
            TToast.show(FullScreenVideoActivity.this, "请先加载广告");
        }
    }

    private boolean mHasShowDownloadActive = false;

    @SuppressWarnings("SameParameterValue")
    private void loadAd(String codeId, int orientation) {
        //step4:创建广告请求参数AdSlot,具体参数含义参考文档
        AdSlot adSlot;
        if (mIsExpress) {
            adSlot = new AdSlot.Builder()
                    .setCodeId(codeId)
                    //模板广告需要设置期望个性化模板广告的大小,单位dp,全屏视频场景，只要设置的值大于0即可
                    .setExpressViewAcceptedSize(500,500)
                    .setSupportDeepLink(true)
                    .setOrientation(orientation)//必填参数，期望视频的播放方向：TTAdConstant.HORIZONTAL 或 TTAdConstant.VERTICAL
                    .build();

        } else {
            adSlot = new AdSlot.Builder()
                    .setCodeId(codeId)
                    .setSupportDeepLink(true)
                    .setOrientation(orientation)//必填参数，期望视频的播放方向：TTAdConstant.HORIZONTAL 或 TTAdConstant.VERTICAL
                    .build();
        }
        //step5:请求广告
        mTTAdNative.loadFullScreenVideoAd(adSlot, new TTAdNative.FullScreenVideoAdListener() {
            @Override
            public void onError(int code, String message) {
                Log.e(TAG, "onError: " + code + ", " + String.valueOf(message));
                TToast.show(FullScreenVideoActivity.this, message);
                JsonObject json = new JsonObject();
                json.addProperty("event","onError" );
                MainActivity.jsEvent(AdCode.FullScreenVideoAd,json.toString());
                FullScreenVideoActivity.this.finish();
            }

            @Override
            public void onFullScreenVideoAdLoad(TTFullScreenVideoAd ad) {
                Log.e(TAG, "onFullScreenVideoAdLoad");


                TToast.show(FullScreenVideoActivity.this, "FullVideoAd loaded  广告类型：" + getAdType(ad.getFullVideoAdType()));
                mttFullVideoAd = ad;
                mttFullVideoAd.setFullScreenVideoAdInteractionListener(new TTFullScreenVideoAd.FullScreenVideoAdInteractionListener() {
                    @Override
                    public void onAdShow() {
                        TToast.show(FullScreenVideoActivity.this, "FullVideoAd show");
                        JsonObject json = new JsonObject();
                        json.addProperty("event","onAdShow" );
                        MainActivity.jsEvent(AdCode.FullScreenVideoAd,json.toString());
                    }

                    @Override
                    public void onAdVideoBarClick() {
                        TToast.show(FullScreenVideoActivity.this, "FullVideoAd bar click");
                        JsonObject json = new JsonObject();
                        json.addProperty("event","onAdVideoBarClick" );
                        MainActivity.jsEvent(AdCode.FullScreenVideoAd,json.toString());
                    }

                    @Override
                    public void onAdClose() {
                        TToast.show(FullScreenVideoActivity.this, "FullVideoAd close");
                        JsonObject json = new JsonObject();
                        json.addProperty("event","onAdClose" );
                        MainActivity.jsEvent(AdCode.FullScreenVideoAd,json.toString());
                        FullScreenVideoActivity.this.finish();
                    }

                    @Override
                    public void onVideoComplete() {
                        TToast.show(FullScreenVideoActivity.this, "FullVideoAd complete");
                        JsonObject json = new JsonObject();
                        json.addProperty("event","onVideoComplete" );
                        MainActivity.jsEvent(AdCode.FullScreenVideoAd,json.toString());
                    }

                    @Override
                    public void onSkippedVideo() {
                        TToast.show(FullScreenVideoActivity.this, "FullVideoAd skipped");
                        JsonObject json = new JsonObject();
                        json.addProperty("event","onSkippedVideo" );
                        MainActivity.jsEvent(AdCode.FullScreenVideoAd,json.toString());
                    }

                });

            }

            @Override
            public void onFullScreenVideoCached() {
                Log.e(TAG, "onFullScreenVideoCached");
                TToast.show(FullScreenVideoActivity.this, "FullVideoAd video cached");
                FullScreenVideoActivity.this.playAd();
            }
        });


    }

    private String getAdType(int type) {
        switch (type) {
            case TTAdConstant.AD_TYPE_COMMON_VIDEO:
                return "普通全屏视频，type=" + type;
            case TTAdConstant.AD_TYPE_PLAYABLE_VIDEO:
                return "Playable全屏视频，type=" + type;
            case TTAdConstant.AD_TYPE_PLAYABLE:
                return "纯Playable，type=" + type;
        }

        return "未知类型+type=" + type;
    }
}
