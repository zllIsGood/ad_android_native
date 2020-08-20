package com.egret.openadsdk.sdk;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.util.Log;

import com.bytedance.sdk.openadsdk.AdSlot;
import com.bytedance.sdk.openadsdk.TTAdConstant;
import com.bytedance.sdk.openadsdk.TTAdManager;
import com.bytedance.sdk.openadsdk.TTAdNative;
import com.bytedance.sdk.openadsdk.TTRewardVideoAd;
import com.egret.openadsdk.MainActivity;
import com.egret.openadsdk.R;
import com.google.gson.JsonObject;


/**
 * Created by bytedance on 2018/2/1.
 */

public class RewardVideoActivity extends Activity {
    private static final String TAG = "RewardVideoActivity";

    private TTAdNative mTTAdNative;
    private TTRewardVideoAd mttRewardVideoAd;
    private String mHorizontalCodeId;
    private String mVerticalCodeId;
    private boolean mIsExpress = false; //是否请求模板广告
    private String userID;
    private String rewardName;
    private int rewardAmount;
    private Boolean is_horizontal;
    private String closeType;
    @SuppressWarnings("RedundantCast")
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_reward_video);

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
        userID= intent.getStringExtra("userID");
        rewardAmount= intent.getIntExtra("rewardAmount",1);
        rewardName= intent.getStringExtra("rewardName");

    }
    private void getExtraAndload(){

        if(is_horizontal){
            loadAd(mHorizontalCodeId, TTAdConstant.HORIZONTAL);
        }else{
            loadAd(mVerticalCodeId, TTAdConstant.VERTICAL);
        }
    }

    private  void playAd(){
        if (mttRewardVideoAd != null) {
            //step6:在获取到广告后展示,强烈建议在onRewardVideoCached回调后，展示广告，提升播放体验
            //该方法直接展示广告
//                    mttRewardVideoAd.showRewardVideoAd(RewardVideoActivity.this);

            //展示广告，并传入广告展示的场景
            mttRewardVideoAd.showRewardVideoAd(RewardVideoActivity.this, TTAdConstant.RitScenes.CUSTOMIZE_SCENES, "scenes_test");
            mttRewardVideoAd = null;
        } else {
            TToast.show(RewardVideoActivity.this, "请先加载广告");
        }
    }

    private boolean mHasShowDownloadActive = false;

    private void loadAd(final String codeId, int orientation) {
        //step4:创建广告请求参数AdSlot,具体参数含义参考文档
        AdSlot adSlot;
        if (mIsExpress) {
            //个性化模板广告需要传入期望广告view的宽、高，单位dp，
            adSlot = new AdSlot.Builder()
                    .setCodeId(codeId)
                    .setSupportDeepLink(true)
                    .setRewardName(this.rewardName) //奖励的名称
                    .setRewardAmount(this.rewardAmount)  //奖励的数量
                    //模板广告需要设置期望个性化模板广告的大小,单位dp,激励视频场景，只要设置的值大于0即可
                    .setExpressViewAcceptedSize(500,500)
                    .setUserID(this.userID)//用户id,必传参数
                    .setMediaExtra("media_extra") //附加参数，可选
                    .setOrientation(orientation) //必填参数，期望视频的播放方向：TTAdConstant.HORIZONTAL 或 TTAdConstant.VERTICAL
                    .build();
        } else {
            //模板广告需要设置期望个性化模板广告的大小,单位dp,代码位是否属于个性化模板广告，请在穿山甲平台查看
            adSlot = new AdSlot.Builder()
                    .setCodeId(codeId)
                    .setSupportDeepLink(true)
                    .setRewardName(this.rewardName) //奖励的名称
                    .setRewardAmount(this.rewardAmount)  //奖励的数量
                    .setUserID(this.userID)//用户id,必传参数
                    .setMediaExtra("media_extra") //附加参数，可选
                    .setOrientation(orientation) //必填参数，期望视频的播放方向：TTAdConstant.HORIZONTAL 或 TTAdConstant.VERTICAL
                    .build();
        }
        //step5:请求广告
        mTTAdNative.loadRewardVideoAd(adSlot, new TTAdNative.RewardVideoAdListener() {
            @Override
            public void onError(int code, String message) {
                Log.e(TAG, "onError: " + code + ", " + String.valueOf(message));
                TToast.show(RewardVideoActivity.this, message);
                JsonObject player1 = new JsonObject();
                player1.addProperty("event","onError" );
                MainActivity.jsEvent(AdCode.RewardVideoAd,player1.toString());
                RewardVideoActivity.this.finish();
            }

            //视频广告加载后，视频资源缓存到本地的回调，在此回调后，播放本地视频，流畅不阻塞。
            @Override
            public void onRewardVideoCached() {
                Log.e(TAG, "onRewardVideoCached");
                TToast.show(RewardVideoActivity.this, "rewardVideoAd video cached");
                //playAd
                RewardVideoActivity.this.playAd();
            }

            //视频广告的素材加载完毕，比如视频url等，在此回调后，可以播放在线视频，网络不好可能出现加载缓冲，影响体验。
            @Override
            public void onRewardVideoAdLoad(TTRewardVideoAd ad) {
                Log.e(TAG, "onRewardVideoAdLoad");

                TToast.show(RewardVideoActivity.this, "rewardVideoAd loaded 广告类型：" + getAdType(ad.getRewardVideoAdType()));
                mttRewardVideoAd = ad;
                mttRewardVideoAd.setRewardAdInteractionListener(new TTRewardVideoAd.RewardAdInteractionListener() {

                    @Override
                    public void onAdShow() {
                        TToast.show(RewardVideoActivity.this, "rewardVideoAd show");
                        JsonObject player1 = new JsonObject();
                        player1.addProperty("event","onAdShow" );
                        MainActivity.jsEvent(AdCode.RewardVideoAd,player1.toString());
                    }

                    @Override
                    public void onAdVideoBarClick() {
                        TToast.show(RewardVideoActivity.this, "rewardVideoAd bar click");
                        JsonObject player1 = new JsonObject();
                        player1.addProperty("event","onAdVideoBarClick" );
                        MainActivity.jsEvent(AdCode.RewardVideoAd,player1.toString());
                    }

                    @Override
                    public void onAdClose() {
                        TToast.show(RewardVideoActivity.this, "rewardVideoAd close");
                        JsonObject player1 = new JsonObject();
                        player1.addProperty("event","onAdClose" );
                        MainActivity.jsEvent(AdCode.RewardVideoAd,player1.toString());
                        RewardVideoActivity.this.finish();
                    }


                    //视频播放完成回调
                    @Override
                    public void onVideoComplete() {
                        TToast.show(RewardVideoActivity.this, "rewardVideoAd complete");
                        JsonObject player1 = new JsonObject();
                        player1.addProperty("event","onVideoComplete" );
                        MainActivity.jsEvent(AdCode.RewardVideoAd,player1.toString());
                    }

                    @Override
                    public void onVideoError() {
                        TToast.show(RewardVideoActivity.this, "rewardVideoAd error");
                        JsonObject player1 = new JsonObject();
                        player1.addProperty("event","onVideoError" );
                        MainActivity.jsEvent(AdCode.RewardVideoAd,player1.toString());
                        RewardVideoActivity.this.finish();
                    }

                    //视频播放完成后，奖励验证回调，rewardVerify：是否有效，rewardAmount：奖励梳理，rewardName：奖励名称
                    @Override
                    public void onRewardVerify(boolean rewardVerify, int rewardAmount, String rewardName) {
                        TToast.show(RewardVideoActivity.this, "verify:" + rewardVerify + " amount:" + rewardAmount +
                                " name:" + rewardName);
                        JsonObject player1 = new JsonObject();
                        player1.addProperty("event","onRewardVerify" );
                        player1.addProperty("verify", rewardVerify);
                        player1.addProperty("amount", rewardAmount);
                        player1.addProperty("name", rewardName);
                        MainActivity.jsEvent(AdCode.RewardVideoAd,player1.toString());
                    }

                    @Override
                    public void onSkippedVideo() {
                        TToast.show(RewardVideoActivity.this, "rewardVideoAd has onSkippedVideo");
                        JsonObject player1 = new JsonObject();
                        player1.addProperty("event","onSkippedVideo" );
                        MainActivity.jsEvent(AdCode.RewardVideoAd,player1.toString());
                    }
                });
            }
        });
    }

    private String getAdType(int type) {
        switch (type) {
            case TTAdConstant.AD_TYPE_COMMON_VIDEO:
                return "普通激励视频，type=" + type;
            case TTAdConstant.AD_TYPE_PLAYABLE_VIDEO:
                return "Playable激励视频，type=" + type;
            case TTAdConstant.AD_TYPE_PLAYABLE:
                return "纯Playable，type=" + type;
        }

        return "未知类型+type=" + type;
    }
}
