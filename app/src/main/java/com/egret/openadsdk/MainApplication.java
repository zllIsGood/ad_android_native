package com.egret.openadsdk;

import android.app.Activity;
import android.app.Application;
import android.os.Bundle;
import android.util.Log;


import com.egret.openadsdk.sdk.AdCode;
import com.egret.openadsdk.sdk.AppManager;
import com.egret.openadsdk.sdk.TTAdManagerHolder;
import com.meituan.android.walle.WalleChannelReader;
import com.qq.e.union.demo.GDTApplication;
import com.umeng.analytics.MobclickAgent;
import com.umeng.commonsdk.UMConfigure;


public class MainApplication extends GDTApplication {
    private static final String TAG = "MainApplication";

    @Override
    public void onCreate() {
        super.onCreate();

        // 在此处调用基础组件包提供的初始化函数 相应信息可在应用管理 -> 应用信息 中找到 http://message.umeng.com/list/apps
        // 参数一：当前上下文context；
        // 参数二：应用申请的Appkey（需替换）；
        // 参数三：渠道名称；
        // 参数四：设备类型，必须参数，传参数为UMConfigure.DEVICE_TYPE_PHONE则表示手机；传参数为UMConfigure.DEVICE_TYPE_BOX则表示盒子；默认为手机；
        // 参数五：Push推送业务的secret 填充Umeng Message Secret对应信息（需替换）
//        UMConfigure.init(this, "5e82b6d6978eea06fd7fc5f4", "Umeng", UMConfigure.DEVICE_TYPE_PHONE, "5ebe8da3d645902f2e64d378e9b06211");


        //穿山甲SDK初始化
        //强烈建议在应用对应的Application#onCreate()方法中调用，避免出现content为null的异常
        TTAdManagerHolder.init(this);
        //如果明确某个进程不会使用到广告SDK，可以只针对特定进程初始化广告SDK的content
        //if (PROCESS_NAME_XXXX.equals(processName)) {
        //   TTAdManagerHolder.init(this)
        //}


        initActivity();
        String channel = WalleChannelReader.getChannel(this.getApplicationContext());
/**
 * 注意: 即使您已经在AndroidManifest.xml中配置过appkey和channel值，也需要在App代码中调
 * 用初始化接口（如需要使用AndroidManifest.xml中配置好的appkey和channel值，
 * UMConfigure.init调用中appkey和channel参数请置为null）。
 */
        UMConfigure.init(this, AdCode.UMConfigure_id, channel, 0, "");
//        UMConfigure.init(this, "5f17bcbbd62dd10bc71abed8", channel, 0, "");
    }

    private void initActivity() {
        registerActivityLifecycleCallbacks(new ActivityLifecycleCallbacks() {
            @Override
            public void onActivityCreated(Activity activity, Bundle savedInstanceState) {
                Log.e("MainApp", activity.getLocalClassName());
                AppManager.getAppManager().addActivity(activity);
            }

            @Override
            public void onActivityStarted(Activity activity) {

            }

            @Override
            public void onActivityResumed(Activity activity) {
                MobclickAgent.onResume(activity);
            }

            @Override
            public void onActivityPaused(Activity activity) {
                MobclickAgent.onPause(activity);
            }

            @Override
            public void onActivityStopped(Activity activity) {

            }

            @Override
            public void onActivitySaveInstanceState(Activity activity, Bundle outState) {

            }

            @Override
            public void onActivityDestroyed(Activity activity) {
                AppManager.getAppManager().removeActivity(activity);
            }
        });
    }
}
