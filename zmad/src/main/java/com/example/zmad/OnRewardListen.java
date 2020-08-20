package com.example.zmad;

/**
 * @Description: java类作用描述
 * @Author: lee
 * @CreateDate: 2020/7/24 3:23 PM
 */
public class OnRewardListen {
    public CallBack callBack;
    public static OnRewardListen instance;

    public static OnRewardListen getInstance() {
        if (instance == null) {
            instance = new OnRewardListen();
        }
        return instance;
    }


    public <T>void setCallBack(CallBack callBack){
        this.callBack=callBack;
    }

    public interface CallBack {
        void onCallBack();
    }
}
