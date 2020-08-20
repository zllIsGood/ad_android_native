package com.egret.openadsdk;

import android.Manifest;
import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.content.res.Configuration;
import android.content.res.Resources;
import android.graphics.Point;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.net.Uri;
import android.net.wifi.WifiManager;
import android.os.Build;
import android.os.Bundle;
import android.os.SystemClock;
import android.provider.Settings;
import android.support.v4.app.ActivityCompat;
import android.telephony.TelephonyManager;
import android.util.Log;
import android.view.Gravity;
import android.view.KeyEvent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.bumptech.glide.Glide;
import com.bytedance.sdk.openadsdk.AdSlot;
import com.bytedance.sdk.openadsdk.FilterWord;
import com.bytedance.sdk.openadsdk.TTAdConstant;
import com.bytedance.sdk.openadsdk.TTAdDislike;
import com.bytedance.sdk.openadsdk.TTAdNative;
import com.bytedance.sdk.openadsdk.TTAppDownloadListener;
import com.bytedance.sdk.openadsdk.TTBannerAd;
import com.bytedance.sdk.openadsdk.TTInteractionAd;
import com.bytedance.sdk.openadsdk.TTNativeExpressAd;
import com.egret.openadsdk.sdk.AdCode;
import com.egret.openadsdk.sdk.AppManager;
import com.egret.openadsdk.sdk.DislikeDialog;
import com.egret.openadsdk.sdk.FullScreenVideoActivity;
import com.egret.openadsdk.sdk.RewardVideoActivity;
import com.egret.openadsdk.sdk.TTAdManagerHolder;
import com.egret.openadsdk.sdk.TToast;
import com.example.zmad.IncentiveActivity;
import com.example.zmad.OnRewardListen;
import com.example.zmad.WebActivity;
import com.example.zmad.ZmSplashActivity;
import com.google.gson.JsonObject;
import com.meituan.android.walle.WalleChannelReader;
import com.qq.e.ads.RewardvideoPortraitADActivity;
import com.qq.e.ads.banner2.UnifiedBannerADListener;
import com.qq.e.ads.banner2.UnifiedBannerView;
import com.qq.e.ads.rewardvideo.RewardVideoAD;
import com.qq.e.ads.rewardvideo.RewardVideoADListener;
import com.qq.e.comm.util.AdError;
import com.qq.e.union.demo.SplashActivity;
import com.umeng.message.PushAgent;

import org.egret.runtime.launcherInterface.INativePlayer;
import org.egret.egretnativeandroid.EgretNativeAndroid;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;

//Android项目发布设置详见doc目录下的README_ANDROID.md

public class MainActivity extends Activity {
    private final String TAG = "MainActivity";
    private EgretNativeAndroid nativeAndroid;
    private TTAdNative mTTAdNative;
    private FrameLayout mBannerContainer;
    public static MainActivity instance = null;
    private String DeviceID = "";
    private TTNativeExpressAd mTTAd;
    View bannerView;
    private long startTime = 0;
    private boolean mHasShowDownloadActive = false;
    public String channel;
    UnifiedBannerView bv;//广点通bannerview
    View ZMBannerView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        channel = WalleChannelReader.getChannel(this.getApplicationContext());
        channel = channel == null ? "" : channel;
        //startActivity(new Intent(this, DemoListActivity.class));
        instance = this;
        nativeAndroid = new EgretNativeAndroid(this);
        if (!nativeAndroid.checkGlEsVersion()) {
            Toast.makeText(this, "This device does not support OpenGL ES 2.0.",
                    Toast.LENGTH_LONG).show();
            return;
        }

        nativeAndroid.config.showFPS = false;
        nativeAndroid.config.fpsLogTime = 30;
        nativeAndroid.config.disableNativeRender = false;
        nativeAndroid.config.clearCache = false;
        nativeAndroid.config.loadingTimeout = 0;

        setExternalInterfaces();

        if (!nativeAndroid.initialize("http://tool.egret-labs.org/Weiduan/game/index.html")) {
            Toast.makeText(this, "Initialize native failed.",
                    Toast.LENGTH_LONG).show();
            return;
        }

        setContentView(nativeAndroid.getRootFrameLayout());
        rootLayout = nativeAndroid.getRootFrameLayout();
//        showLoadingView();

        //获取设备id
        //TelephonyManager TelephonyMgr = (TelephonyManager) getSystemService(TELEPHONY_SERVICE);
        final TelephonyManager manager = (TelephonyManager) getSystemService(Context.TELEPHONY_SERVICE);

        WifiManager wm = (WifiManager) getApplicationContext().getSystemService(Context.WIFI_SERVICE);

        this.initJSEvent();

        //step2:创建TTAdNative对象，createAdNative(Context context) banner广告context需要传入Activity对象
        mTTAdNative = TTAdManagerHolder.get().createAdNative(this);
        // 申请部分权限,建议在sdk初始化前申请,如：READ_PHONE_STATE、ACCESS_COARSE_LOCATION及ACCESS_FINE_LOCATION权限，
        // 以获取更好的广告推荐效果，如read_phone_state,防止获取不了imei时候，下载类广告没有填充的问题。
        TTAdManagerHolder.get().requestPermissionIfNecessary(this);

        //该方法是【友盟+】Push后台进行日活统计及多维度推送的必调用方法，请务必调用！
        PushAgent.getInstance(this).onAppStart();


        try {
            if (ActivityCompat.checkSelfPermission(this, Manifest.permission.READ_PHONE_STATE) != PackageManager.PERMISSION_GRANTED) {
                // TODO: Consider calling
                //    ActivityCompat#requestPermissions
                // here to request the missing permissions, and then overriding
                //   public void onRequestPermissionsResult(int requestCode, String[] permissions,
                //                                          int[] grantResults)
                // to handle the case where the user grants the permission. See the documentation
                // for ActivityCompat#requestPermissions for more details.

            }
            DeviceID = Settings.Secure.getString(getContentResolver(), Settings.Secure.ANDROID_ID);
            if (DeviceID != null) return;
            ;
            if (manager.getDeviceId() == null || manager.getDeviceId().equals("")) {
                if (Build.VERSION.SDK_INT >= 23) {
                    DeviceID = manager.getDeviceId(0);
                    if (DeviceID != null) return;
                }
            } else {
                DeviceID = manager.getDeviceId();
            }
            //DeviceID = TelephonyMgr.getDeviceId();
        } catch (Exception e) {
            e.printStackTrace();
        }

    }


    public void initJSEvent() {
        //监听来自js的设备码请求
        nativeAndroid.setExternalInterface("getDeviceCode", new INativePlayer.INativeInterface() {
            @Override
            public void callback(String message) {
                //TelephonyManager TelephonyMgr = (TelephonyManager)getSystemService(TELEPHONY_SERVICE);
                String str = "Native get message: ";
                str += message;
                Log.d(TAG, str);
//                Toast.makeText(MainActivity.instance,str+DeviceID, Toast.LENGTH_LONG).show();
//                AlertDialog alertDialog1 = new AlertDialog.Builder(MainActivity.this)
//                        .setTitle("test")//标题
//                        .setMessage(DeviceID)//内容
//                        .create();
//                alertDialog1.show();

                nativeAndroid.callExternalInterface("setDeviceCode", DeviceID);
            }

        });

        //监听来自JS的url
        nativeAndroid.setExternalInterface("OpenURL", new INativePlayer.INativeInterface() {
            @Override
            public void callback(String url) {
                Log.d(TAG, "open_url:" + url);
                Uri uri = Uri.parse(url);
                Intent intent = new Intent(Intent.ACTION_VIEW, uri);
                startActivity(intent);
            }
        });

        //监听来自js的关闭广告请求
        nativeAndroid.setExternalInterface("closeAd", new INativePlayer.INativeInterface() {
            @Override
            public void callback(String message) {
                //TelephonyManager TelephonyMgr = (TelephonyManager)getSystemService(TELEPHONY_SERVICE);
                String str = "Native get closeAd from Js: ";
                str += message;
                Log.d(TAG, str);

                doCloseBanner();
                //mBannerContainer.removeView(bannerView);
                //nativeAndroid.callExternalInterface("setDeviceCode", DeviceID);
            }

        });


        //监听来自JS的开屏视频消息
        nativeAndroid.setExternalInterface("TTSplashAd", dataFromJs -> {
            JSONObject object = null;
            try {
                object = new JSONObject(dataFromJs);
//                int type = 2;
                JSONObject tObj = object.getJSONObject("type");
                Integer type = tObj.getInt("type");
                String url = tObj.getString("url"); //"https://www.baidu.com/";
                String img = tObj.getString("img"); //"https://cdnzmg.zmfamily.cn/main-scene-bg-header.png";
                String text = tObj.getString("text"); //"这是一个简单的广告文案哦！";
                if (type == 2 && (MainActivity.instance.channel.equals("91com") || MainActivity.instance.channel.equals("wandou"))) {
                    type = 1;
                }
                if (type == 1) {
                    Intent intent = new Intent(MainActivity.this, com.egret.openadsdk.sdk.SplashActivity.class);
                    Log.d(TAG, "splash init");
                    intent.putExtra("splash_code", AdCode.splash_code);
                    intent.putExtra("is_express", false);
                    startActivityForResult(intent, AdCode.OPENADSDK);
                } else if (type == 2) {
                    Intent intent = new Intent(MainActivity.this, SplashActivity.class);
                    intent.putExtra("pos_id", AdCode.splash_code_GDT);
                    startActivity(intent);
                } else if (type == 0) {
                    //自家广告
                    ZmSplashActivity.start(MainActivity.this, url, img);
                }
            } catch (JSONException e) {
                e.printStackTrace();
            }
        });
        //监听来自JS的激励视频消息
        nativeAndroid.setExternalInterface("TTRewardVideoAd", dataFromJs -> {
            JSONObject object = null;
            try {
                object = new JSONObject(dataFromJs);
//                Integer type = 2;
                JSONObject tObj = object.getJSONObject("type");
                Integer type = tObj.getInt("type");
                String url = tObj.getString("url"); //"https://www.baidu.com/";
                String img = tObj.getString("img"); //"https://cdnzmg.zmfamily.cn/main-scene-bg-header.png";
                String text = tObj.getString("text"); //"这是一个简单的广告文案哦！";
                if (type == 2 && (MainActivity.instance.channel.equals("91com") || MainActivity.instance.channel.equals("wandou"))) {
                    type = 1;
                }
                if (type == 1) {
                    Intent intent = new Intent(MainActivity.this, RewardVideoActivity.class);
                    intent.putExtra("horizontal_rit", AdCode.reward_horizontal_code);
                    intent.putExtra("vertical_rit", AdCode.reward_vertical_code);
                    Boolean is_horizontal = object.getBoolean("is_horizontal");
                    intent.putExtra("is_horizontal", is_horizontal);
                    String userID = object.getString("userID");
                    intent.putExtra("userID", userID);
                    int rewardAmount = object.getInt("rewardAmount");
                    intent.putExtra("rewardAmount", rewardAmount);
                    String rewardName = object.getString("rewardName");
                    intent.putExtra("rewardName", rewardName);
                    startActivityForResult(intent, AdCode.OPENADSDK);
                } else if (type == 2) {
                    loadGDTRewardVideoAD();
                    //startActivity(new Intent(MainActivity.this,com.qq.e.union.demo.RewardVideoActivity.class));
                } else if (type == 0) {
                    IncentiveActivity.start(MainActivity.this, url, 15);
                    OnRewardListen.getInstance().setCallBack(new OnRewardListen.CallBack() {
                        @Override
                        public void onCallBack() {
                            Log.e("MAINACTIVITY", "关闭");
                            JsonObject player1 = new JsonObject();
                            player1.addProperty("event", "onAdClose");
                            MainActivity.jsEvent(AdCode.RewardVideoAd, player1.toString());
                        }
                    });
                }

            } catch (JSONException e) {
                e.printStackTrace();
            }


        });
        //监听来自JS的全屏视频消息
        nativeAndroid.setExternalInterface("TTFullScreenVideoAd", new INativePlayer.INativeInterface() {
            @Override
            public void callback(String dataFromJs) {
                Intent intent = new Intent(MainActivity.this, FullScreenVideoActivity.class);
                intent.putExtra("horizontal_rit", AdCode.full_horizontal_code);
                intent.putExtra("vertical_rit", AdCode.full_vertical_code);

                JSONObject object = null;
                try {
                    object = new JSONObject(dataFromJs);
                    Boolean is_horizontal = object.getBoolean("is_horizontal");
                    intent.putExtra("is_horizontal", is_horizontal);
                } catch (JSONException e) {
                    e.printStackTrace();
                }
                startActivityForResult(intent, AdCode.OPENADSDK);

            }
        });
        //监听来自JS的Banner广告消息
        nativeAndroid.setExternalInterface("TTBannerExpressAd", new INativePlayer.INativeInterface() {
            @Override
            public void callback(String dataFromJs) {
                String code = AdCode.banner_code;
                if (mBannerContainer == null) {
                    mBannerContainer = nativeAndroid.getRootFrameLayout();
                }
                Log.d(TAG, "native进入穿山甲banner广告");
                doCloseBanner();
                JSONObject object = null;
                try {
                    object = new JSONObject(dataFromJs);
                    //0自家广告 1穿山甲  2广点通
//                    int type = 2;
                    JSONObject tObj = object.getJSONObject("type");
                    Integer type = tObj.getInt("type");
                    String url = tObj.getString("url"); //"https://www.baidu.com/";
                    String img = tObj.getString("img"); //"https://cdnzmg.zmfamily.cn/main-scene-bg-header.png";
                    String text = tObj.getString("text"); //"这是一个简单的广告文案哦！";
                    if (type == 2 && (MainActivity.instance.channel.equals("91com") || MainActivity.instance.channel.equals("wandou"))) {
                        type = 1;
                    }
                    if (type == 1) {
                        Boolean is_top = object.getBoolean("is_top");
                        int width;
                        int height;
                        width = object.getInt("width");
                        height = object.getInt("height");
                        //MainActivity.instance.loadBannerAd(code,is_top,width,height );
                        MainActivity.instance.loadExpressAd(code, width, height);
                    } else if (type == 2) {
                        Log.d(TAG, "native进入广点通banner广告");
                        getBanner().loadAD();
                    } else if (type == 0) {
                        //自家广告
                        int wid = getWindow().getDecorView().getWidth();
                        int heig = getWindow().getDecorView().getHeight();
                        int w = 600, h = 150;
                        if ((wid * 16) > (heig * 9)) { //(wid / heig) / (9 / 16)
                            w = 600 * heig / 1334;
                            h = 150 * heig / 1334;
                        } else {
                            w = 600 * wid / 750;
                            h = 150 * wid / 750;
                        }
                        Log.e("BANNER", img);
                        addZMBannerAd(h, w, text, url, img);
                    }
                } catch (JSONException e) {
                    Log.d(TAG, "调用banner错误");
                    e.printStackTrace();
                }
            }
        });
        //监听来自JS的插屏广告消息
        nativeAndroid.setExternalInterface("TTInteractionAd", new INativePlayer.INativeInterface() {
            @Override
            public void callback(String dataFromJs) {
                String code = AdCode.interaction_code;
                JSONObject object = null;
                try {
                    int width;
                    int height;
                    object = new JSONObject(dataFromJs);
                    width = object.getInt("width");
                    height = object.getInt("height");
                    MainActivity.instance.loadInteractionAd(code, width, height);

                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }
        });

    }


    @Override
    protected void onPause() {
        super.onPause();
        nativeAndroid.pause();
    }

    @Override
    protected void onResume() {
        super.onResume();
        nativeAndroid.resume();
    }

    @Override
    public boolean onKeyDown(final int keyCode, final KeyEvent keyEvent) {
        if (keyCode == KeyEvent.KEYCODE_BACK) {
            nativeAndroid.exitGame();
        }

        return super.onKeyDown(keyCode, keyEvent);
    }

    private void setExternalInterfaces() {
        nativeAndroid.setExternalInterface("sendToNative", new INativePlayer.INativeInterface() {
            @Override
            public void callback(String message) {
                String str = "Native get message: ";
                str += message;
                Log.d(TAG, str);
                nativeAndroid.callExternalInterface("sendToJS", str);
            }
        });
//        nativeAndroid.setExternalInterface("@onError", new INativePlayer.INativeInterface() {
//            @Override
//            public void callback(String message) {
//                String str = "Native get onError message: ";
//
//                try{
//                    JSONObject jsonObject = new JSONObject(message);
//                    String error = jsonObject.getString(appError);
//                    handleErrorEvent(error);
//                }
//                catch (JSONException e) {
//                    Log.e(TAG, "onError message failed to analyze");
//                    return;
//                }
//
//                str += message;
//                Log.e(TAG, str);
//            }
//        });
        nativeAndroid.setExternalInterface("@onState", new INativePlayer.INativeInterface() {
            @Override
            public void callback(String message) {
                String str = "Native get onState message: ";

                try {
                    JSONObject jsonObject = new JSONObject(message);
                    String state = jsonObject.getString(appState);
                    handleStateEvent(state);
                } catch (JSONException e) {
                    Log.e(TAG, " onState message failed to analyze");
                }

                str += message;
                Log.e(TAG, str);
            }
        });
    }

    public final static String appError = "error";
    // 加载首页失败
    public final static String errorIndexLoadFailed = "load";
    // 启动引擎失败
    public final static String errorJSLoadFailed = "start";
    // 引擎停止运行
    public final static String errorJSCorrupted = "stopRunning";
    public final static String appState = "state";
    // 正在启动引擎
    public final static String stateEngineStarted = "starting";
    // 引擎正在运行
    public final static String stateEngineRunning = "running";

    private void handleStateEvent(String state) {

        switch (state) {
            case MainActivity.stateEngineStarted:
                Log.e(TAG, "stateEngineStarted");
                break;
            case MainActivity.stateEngineRunning:
                Log.e(TAG, "stateEngineRunning");
//                hideLoadingView();
                break;
            default:
                break;
        }
    }

    private void showLoadingView() {
        launchScreenImageView = new ImageView(this);
        Resources res = getResources();
        Drawable drawable = res.getDrawable(R.drawable.start_bg);
        launchScreenImageView.setImageDrawable(drawable);

        FrameLayout.LayoutParams params = new FrameLayout.LayoutParams(FrameLayout.LayoutParams.MATCH_PARENT,
                FrameLayout.LayoutParams.MATCH_PARENT);
        rootLayout.addView(launchScreenImageView, params);
    }

    private void hideLoadingView() {
        this.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                rootLayout.removeView(launchScreenImageView);
                Drawable drawable = launchScreenImageView.getDrawable();
                launchScreenImageView.setImageDrawable(null);
                drawable.setCallback(null);
                launchScreenImageView = null;
            }
        });
    }

    private ImageView launchScreenImageView = null;
    private FrameLayout rootLayout = null;

    private UnifiedBannerView getBanner() {
        if (this.bv != null) {
            if (mBannerContainer != null) {
                mBannerContainer.removeView(bv);
            }

            bv.destroy();
        }
        String posId = AdCode.banner_code_GDT;

        this.bv = new UnifiedBannerView(this, posId, new UnifiedBannerADListener() {
            @Override
            public void onNoAD(AdError adError) {

            }

            @Override
            public void onADReceive() {
                Log.i(TAG, "onADReceive");
            }

            @Override
            public void onADExposure() {

            }

            @Override
            public void onADClosed() {
                TToast.show(MainActivity.this, "关闭banner广告");
            }

            @Override
            public void onADClicked() {

            }

            @Override
            public void onADLeftApplication() {

            }

            @Override
            public void onADOpenOverlay() {

            }

            @Override
            public void onADCloseOverlay() {

            }
        }
        );
        this.bv.setRefresh(2);//刷新时间
        // 不需要传递tags使用下面构造函数
        // this.bv = new UnifiedBannerView(this, Constants.APPID, posId, this);
        mBannerContainer.addView(bv, getUnifiedBannerLayoutParams());
        return this.bv;
    }

    private void doCloseBanner() {
        if (mBannerContainer != null) {
            //mBannerContainer.removeAllViews();
            if (bannerView != null) {
                mBannerContainer.removeView(bannerView);
                bannerView = null;
            } else if (bv != null) {
                mBannerContainer.removeView(bv);
            } else if (ZMBannerView != null) {
                mBannerContainer.removeView(ZMBannerView);
                ZMBannerView = null;
            }

        }
        if (bv != null) {
            bv.destroy();
            bv = null;
        }
    }

    /**
     * banner2.0规定banner宽高比应该为6.4:1 , 开发者可自行设置符合规定宽高比的具体宽度和高度值
     *
     * @return
     */
    private FrameLayout.LayoutParams getUnifiedBannerLayoutParams() {
        Point screenSize = new Point();
        getWindowManager().getDefaultDisplay().getSize(screenSize);
        FrameLayout.LayoutParams layoutParams = new FrameLayout.LayoutParams(screenSize.x, Math.round(screenSize.x / 6.4F));
        layoutParams.gravity = Gravity.BOTTOM;
        return layoutParams;
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        super.onConfigurationChanged(newConfig);
        if (bv != null) {
            bv.setLayoutParams(getUnifiedBannerLayoutParams());
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (bv != null) {
            bv.destroy();
        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
//        if (requestCode == AdCode.OPENADSDK&&resultCode == AdCode.SplashAd) {
//        }else if(requestCode == AdCode.OPENADSDK&&resultCode == AdCode.RewardVideoAd) {
//        }
    }

    public static void jsEvent(int adcode, String json) {
        String tag = "";
        if (adcode == AdCode.RewardVideoAd) {
            tag = "TTRewardVideoAd-js";
        } else if (adcode == AdCode.SplashAd) {
            tag = "TTSplashAd-js";
        } else if (adcode == AdCode.FullScreenVideoAd) {
            tag = "TTFullScreenVideoAd-js";
        } else if (adcode == AdCode.BannerExpressAd) {
            tag = "TTBannerExpressAd-js";
        } else if (adcode == AdCode.InteractionAd) {
            tag = "TTInteractionAd-js";
        }
        MainActivity.instance.send2JS(tag, json);
    }

    public void send2JS(String tag, String json) {
        nativeAndroid.callExternalInterface(tag, json);
    }

    private void loadBannerAd(String codeId, final boolean isTop, final int width, final int height) {
        //step4:创建广告请求参数AdSlot,具体参数含义参考文档

        AdSlot adSlot = new AdSlot.Builder()
                .setCodeId(codeId) //广告位id
                .setSupportDeepLink(true)
//                .setImageAcceptedSize(600, 257)
                .setImageAcceptedSize(width, height)
                .build();
        //step5:请求广告，对请求回调的广告作渲染处理
        mTTAdNative.loadBannerAd(adSlot, new TTAdNative.BannerAdListener() {

            @Override
            public void onError(int code, String message) {
                TToast.show(MainActivity.this, "load error : " + code + ", " + message);
                if (bannerView != null) {
                    mBannerContainer.removeView(bannerView);
                }
                JsonObject json = new JsonObject();
                json.addProperty("event", "onError");
                MainActivity.jsEvent(AdCode.BannerExpressAd, json.toString());
            }


            @Override
            public void onBannerAdLoad(final TTBannerAd ad) {
                if (ad == null) {
                    return;
                }
                if (bannerView != null) {
                    mBannerContainer.removeView(bannerView);
                    bannerView = null;
                }
                bannerView = ad.getBannerView();
                if (bannerView == null) {
                    return;
                }
                Rect rect = new Rect();
                getWindow().getDecorView().getWindowVisibleDisplayFrame(rect);
                FrameLayout.LayoutParams params = new FrameLayout.LayoutParams(rect.width(), (int) ((((double) height) / ((double) width)) * rect.width()));
                if (!isTop) {
                    params.gravity = Gravity.BOTTOM;
                } else {
                    params.gravity = Gravity.TOP;
                }
                bannerView.setLayoutParams(params);

                //设置轮播的时间间隔  间隔在30s到120秒之间的值，不设置默认不轮播
                ad.setSlideIntervalTime(30 * 1000);
                mBannerContainer.addView(bannerView);
                //设置广告互动监听回调
                ad.setBannerInteractionListener(new TTBannerAd.AdInteractionListener() {
                    @Override
                    public void onAdClicked(View view, int type) {
                        TToast.show(MainActivity.this, "广告被点击");
                        JsonObject json = new JsonObject();
                        json.addProperty("event", "onAdClicked");
                        MainActivity.jsEvent(AdCode.BannerExpressAd, json.toString());
                    }

                    @Override
                    public void onAdShow(View view, int type) {
                        TToast.show(MainActivity.this, "广告展示");
                        JsonObject json = new JsonObject();
                        json.addProperty("event", "onAdShow");
                        MainActivity.jsEvent(AdCode.BannerExpressAd, json.toString());
                    }
                });
                //在banner中显示网盟提供的dislike icon，有助于广告投放精准度提升
                ad.setShowDislikeIcon(new TTAdDislike.DislikeInteractionCallback() {
                    @Override
                    public void onSelected(int position, String value) {
                        TToast.show(MainActivity.this, "点击 " + value);
                        JsonObject json = new JsonObject();
                        json.addProperty("event", "onSelected");
                        json.addProperty("value", value);
                        MainActivity.jsEvent(AdCode.BannerExpressAd, json.toString());
                        //用户选择不喜欢原因后，移除广告展示
//                        mBannerContainer.removeAllViews();
                        if (bannerView != null) {
                            mBannerContainer.removeView(bannerView);
                            bannerView = null;
                        }
                    }

                    @Override
                    public void onCancel() {
                        TToast.show(MainActivity.this, "点击取消 ");
                        JsonObject json = new JsonObject();
                        json.addProperty("event", "onCancel");
                        MainActivity.jsEvent(AdCode.BannerExpressAd, json.toString());
                    }

                    @Override
                    public void onRefuse() {

                    }
                });

            }
        });


    }

    private void loadExpressAd(String codeId, int expressViewWidth, int expressViewHeight) {
        int w = getWindow().getDecorView().getWidth();
        //step4:创建广告请求参数AdSlot,具体参数含义参考文档
        AdSlot adSlot = new AdSlot.Builder()
                .setCodeId(codeId) //广告位id
                .setSupportDeepLink(true)
                .setAdCount(2) //请求广告数量为1到3条
                .setExpressViewAcceptedSize(w, 60) //期望模板广告view的size,单位dp
                .build();
        //step5:请求广告，对请求回调的广告作渲染处理
        mTTAdNative.loadBannerExpressAd(adSlot, new TTAdNative.NativeExpressAdListener() {
            @Override
            public void onError(int code, String message) {
                TToast.show(MainActivity.this, "load error : " + code + ", " + message);
                if (bannerView != null) {
                    mBannerContainer.removeView(bannerView);
                }
                JsonObject json = new JsonObject();
                json.addProperty("event", "onError");
                MainActivity.jsEvent(AdCode.BannerExpressAd, json.toString());
                //mExpressContainer.removeAllViews();
            }

            @Override
            public void onNativeExpressAdLoad(List<TTNativeExpressAd> ads) {
                if (ads == null || ads.size() == 0) {
                    return;
                }
                mTTAd = ads.get(0);
                mTTAd.setSlideIntervalTime(1000);
                bindAdListener(mTTAd);
                startTime = System.currentTimeMillis();
                mTTAd.render();
            }
        });
    }

    private void addZMBannerAd(int height, int width, String text, String url, String imgUrl) {
        if (ZMBannerView != null) {
            mBannerContainer.removeView(ZMBannerView);
            ZMBannerView = null;
        }
        LayoutInflater layoutInflater = getLayoutInflater();
        ZMBannerView = layoutInflater.inflate(R.layout.layout_banner_ad, null);
        ImageView imageView = ZMBannerView.findViewById(R.id.iv_incentive);
        ImageView gif = ZMBannerView.findViewById(R.id.iv_gif);
        TextView textView = ZMBannerView.findViewById(R.id.tv_incentive);
        Glide.with(ZMBannerView).asGif().load(R.drawable.finger).into(gif);
        textView.setText(text);

        ZMBannerView.setOnClickListener(v -> WebActivity.start(MainActivity.this, url));
        FrameLayout.LayoutParams params = new FrameLayout.LayoutParams(width, height);
        params.gravity = Gravity.BOTTOM | Gravity.CENTER_HORIZONTAL;
        ZMBannerView.setLayoutParams(params);

        LinearLayout.LayoutParams params1 = new LinearLayout.LayoutParams(width, height - textView.getHeight());
        imageView.setLayoutParams(params1);

        Glide.with(ZMBannerView).load(imgUrl).into(imageView);

        mBannerContainer.addView(ZMBannerView);
    }


    private void bindAdListener(TTNativeExpressAd ad) {
        ad.setExpressInteractionListener(new TTNativeExpressAd.ExpressAdInteractionListener() {
            @Override
            public void onAdClicked(View view, int type) {
                TToast.show(MainActivity.this, "广告被点击");
            }

            @Override
            public void onAdShow(View view, int type) {
                TToast.show(MainActivity.this, "广告展示");
            }

            @Override
            public void onRenderFail(View view, String msg, int code) {
                Log.e("ExpressView", "render fail:" + (System.currentTimeMillis() - startTime));
                TToast.show(MainActivity.this, msg + " code:" + code);
            }

            @Override
            public void onRenderSuccess(View view, float width, float height) {
                Log.e("ExpressView", "render suc:" + (System.currentTimeMillis() - startTime));
                //返回view的宽高 单位 dp
                TToast.show(MainActivity.this, "渲染成功");
                mBannerContainer.removeView(view);
                bannerView = view;
                Rect rect = new Rect();
                getWindow().getDecorView().getWindowVisibleDisplayFrame(rect);
                FrameLayout.LayoutParams params = new FrameLayout.LayoutParams(rect.width(), (int) ((((double) height) / ((double) width)) * rect.width()));
                params.gravity = Gravity.BOTTOM;
                bannerView.setLayoutParams(params);

                mBannerContainer.addView(bannerView);
            }
        });
        //dislike设置
        bindDislike(ad, false);


        if (ad.getInteractionType() != TTAdConstant.INTERACTION_TYPE_DOWNLOAD) {
            return;
        }
        ad.setDownloadListener(new TTAppDownloadListener() {
            @Override
            public void onIdle() {
//                AlertDialog alertDialog1 = new AlertDialog.Builder(MainActivity.this)
//                        .setTitle("下载测试")//标题
//                        .setMessage(DeviceID)//内容
//                        .create();
//                alertDialog1.show();
                TToast.show(MainActivity.this, "点击开始下载", Toast.LENGTH_LONG);
            }

            @Override
            public void onDownloadActive(long totalBytes, long currBytes, String fileName, String appName) {
                if (!mHasShowDownloadActive) {
                    mHasShowDownloadActive = true;
                    TToast.show(MainActivity.this, "下载中，点击暂停", Toast.LENGTH_LONG);
                }
            }

            @Override
            public void onDownloadPaused(long totalBytes, long currBytes, String fileName, String appName) {
                TToast.show(MainActivity.this, "下载暂停，点击继续", Toast.LENGTH_LONG);
            }

            @Override
            public void onDownloadFailed(long totalBytes, long currBytes, String fileName, String appName) {
                TToast.show(MainActivity.this, "下载失败，点击重新下载", Toast.LENGTH_LONG);
            }

            @Override
            public void onInstalled(String fileName, String appName) {
                TToast.show(MainActivity.this, "安装完成，点击图片打开", Toast.LENGTH_LONG);
            }

            @Override
            public void onDownloadFinished(long totalBytes, String fileName, String appName) {
                TToast.show(MainActivity.this, "点击安装", Toast.LENGTH_LONG);
            }
        });
    }


    /**
     * 设置广告的不喜欢, 注意：强烈建议设置该逻辑，如果不设置dislike处理逻辑，则模板广告中的 dislike区域不响应dislike事件。
     *
     * @param ad
     * @param customStyle 是否自定义样式，true:样式自定义
     */
    private void bindDislike(TTNativeExpressAd ad, boolean customStyle) {
        if (customStyle) {
            //使用自定义样式
            List<FilterWord> words = ad.getFilterWords();
            if (words == null || words.isEmpty()) {
                return;
            }

            final DislikeDialog dislikeDialog = new DislikeDialog(this, words);
            dislikeDialog.setOnDislikeItemClick(new DislikeDialog.OnDislikeItemClick() {
                @Override
                public void onItemClick(FilterWord filterWord) {
                    //屏蔽广告
                    TToast.show(MainActivity.this, "点击 " + filterWord.getName());
                    //用户选择不喜欢原因后，移除广告展示
                    mBannerContainer.removeView(bannerView);
                }
            });
            ad.setDislikeDialog(dislikeDialog);
            return;
        }
        //使用默认模板中默认dislike弹出样式
        ad.setDislikeCallback(MainActivity.this, new TTAdDislike.DislikeInteractionCallback() {
            @Override
            public void onSelected(int position, String value) {
                TToast.show(MainActivity.this, "点击 " + value);
                //用户选择不喜欢原因后，移除广告展示
                mBannerContainer.removeView(bannerView);
            }

            @Override
            public void onCancel() {
                TToast.show(MainActivity.this, "点击取消 ");
            }

            @Override
            public void onRefuse() {

            }
        });


    }


    private void loadInteractionAd(String codeId, final int width, final int height) {
        //step4:创建插屏广告请求参数AdSlot,具体参数含义参考文档
        AdSlot adSlot = new AdSlot.Builder()
                .setCodeId(codeId)
                .setSupportDeepLink(true)
                .setImageAcceptedSize(width, height) //根据广告平台选择的尺寸，传入同比例尺寸
                .build();
        //step5:请求广告，调用插屏广告异步请求接口
        mTTAdNative.loadInteractionAd(adSlot, new TTAdNative.InteractionAdListener() {
            @Override
            public void onError(int code, String message) {
                TToast.show(getApplicationContext(), "code: " + code + "  message: " + message);
                JsonObject json = new JsonObject();
                json.addProperty("event", "onError");
                MainActivity.jsEvent(AdCode.InteractionAd, json.toString());
            }

            @Override
            public void onInteractionAdLoad(TTInteractionAd ttInteractionAd) {
                TToast.show(getApplicationContext(), "type:  " + ttInteractionAd.getInteractionType());
                ttInteractionAd.setAdInteractionListener(new TTInteractionAd.AdInteractionListener() {
                    @Override
                    public void onAdClicked() {
                        Log.d(TAG, "被点击");
                        TToast.show(MainActivity.this, "广告被点击");
                        JsonObject json = new JsonObject();
                        json.addProperty("event", "onAdClicked");
                        MainActivity.jsEvent(AdCode.InteractionAd, json.toString());
                    }

                    @Override
                    public void onAdShow() {
                        Log.d(TAG, "被展示");
                        TToast.show(MainActivity.this, "广告被展示");
                        JsonObject json = new JsonObject();
                        json.addProperty("event", "onAdShow");
                        MainActivity.jsEvent(AdCode.InteractionAd, json.toString());
                    }

                    @Override
                    public void onAdDismiss() {
                        Log.d(TAG, "插屏广告消失");
                        TToast.show(MainActivity.this, "广告消失");
                        JsonObject json = new JsonObject();
                        json.addProperty("event", "onAdDismiss");
                        MainActivity.jsEvent(AdCode.InteractionAd, json.toString());
                    }
                });
                //弹出插屏广告
                ttInteractionAd.showInteractionAd(MainActivity.this);
            }
        });
    }

    private RewardVideoAD rewardVideoAD;
    private boolean adLoaded;//广告加载成功标志
    private boolean videoCached;//视频素材文件下载完成标志

    private void loadGDTRewardVideoAD() {
        rewardVideoAD = new RewardVideoAD(this, AdCode.reward_code_GDT, new RewardVideoADListener() {
            @Override
            public void onADLoad() {
                adLoaded = true;
            }

            @Override
            public void onVideoCached() {

                if (adLoaded && rewardVideoAD != null) {//广告展示检查1：广告成功加载，此处也可以使用videoCached来实现视频预加载完成后再展示激励视频广告的逻辑
                    if (!rewardVideoAD.hasShown()) {//广告展示检查2：当前广告数据还没有展示过
                        long delta = 1000;//建议给广告过期时间加个buffer，单位ms，这里demo采用1000ms的buffer
                        //广告展示检查3：展示广告前判断广告数据未过期
                        if (SystemClock.elapsedRealtime() < (rewardVideoAD.getExpireTimestamp() - delta)) {
                            rewardVideoAD.showAD();
                        }
                    }
                }
            }

            @Override
            public void onADShow() {

            }

            @Override
            public void onADExpose() {

            }

            @Override
            public void onReward() {

            }

            @Override
            public void onADClick() {

            }

            @Override
            public void onVideoComplete() {
                //AppManager.getAppManager().finishActivity(RewardvideoPortraitADActivity.class);
            }

            @Override
            public void onADClose() {
                //TToast.show(RewardVideoActivity.this, "rewardVideoAd close");
                JsonObject player1 = new JsonObject();
                player1.addProperty("event", "onAdClose");
                MainActivity.jsEvent(AdCode.RewardVideoAd, player1.toString());

                AppManager.getAppManager().finishActivity(RewardvideoPortraitADActivity.class);
            }

            @Override
            public void onError(AdError adError) {
                JsonObject player1 = new JsonObject();
//                player1.addProperty("event", "onVideoError");
                player1.addProperty("getErrorCode", adError.getErrorCode());
                player1.addProperty("getErrorMsg", adError.getErrorMsg());
                MainActivity.jsEvent(AdCode.RewardVideoAd, player1.toString());
                AppManager.getAppManager().finishActivity(RewardvideoPortraitADActivity.class);
            }
        }, true);

        adLoaded = false;
        videoCached = false;
        // 2. 加载激励视频广告
        rewardVideoAD.loadAD();

    }


}
