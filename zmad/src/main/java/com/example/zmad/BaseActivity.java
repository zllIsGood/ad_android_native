package com.example.zmad;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;

/**
 * @Description: java类作用描述
 * @Author: lee
 * @CreateDate: 2020/7/23 2:03 PM
 */
public class BaseActivity extends AppCompatActivity {

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        initHead();
        initView();
    }

    protected void initHead() {

    }

    protected void initView() {

    }
}
