package com.example.zmad;

import android.annotation.SuppressLint;
import android.content.Context;
import android.graphics.Bitmap;
import android.net.http.SslError;
import android.os.Build;
import android.support.annotation.DrawableRes;
import android.support.annotation.RequiresApi;
import android.text.TextUtils;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.CookieManager;
import android.webkit.SslErrorHandler;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;
import android.widget.ProgressBar;
import android.widget.RelativeLayout;


import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

/**
 * Description:
 * Data：2019-11-22-21:14
 * Author: chenwendong
 */

@SuppressLint("SetJavaScriptEnabled")
public class WebViewWrapper extends RelativeLayout {

    private LollipopFixedWebView webView;
    private ProgressBar progressBar;
    //private FrameLayout frameLayout;

    private String mUrl;

    public WebViewWrapper(Context context) {
        this(context, null);
    }

    public WebViewWrapper(Context context, AttributeSet attrs) {
        this(context, attrs, 0);
    }

    public WebViewWrapper(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        initView(context);
        initWebViewSettings();
        initListener();
    }

    private void initView(Context context) {
        LayoutInflater inflater = (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        View view = inflater.inflate(R.layout.layout_webview, this);
        webView = view.findViewById(R.id.webview);
        progressBar = (ProgressBar) view.findViewById(R.id.progressBar);
        //frameLayout = (FrameLayout) view.findViewById(R.id.frameLayout);
        //RelativeLayout.LayoutParams layoutParams=new RelativeLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT);
        //addView(view,layoutParams);
        //安卓5.0以后，默认不允许混合模式，https中不能加载http的资源
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            webView.getSettings().setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);
        }
    }

    private void initWebViewSettings() {
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true); // 默认false，设置true后我们才能在WebView里与我们的JS代码进行交互
        settings.setJavaScriptCanOpenWindowsAutomatically(true); // 设置JS是否可以打开WebView新窗口

        //settings.setSupportZoom(false); // 支持缩放
        //settings.setBuiltInZoomControls(false); // 支持手势缩放
        settings.setDisplayZoomControls(false); // 不显示缩放按钮

        settings.setDatabaseEnabled(true);//数据库存储API是否可用，默认值false。
        settings.setSaveFormData(true);//WebView是否保存表单数据，默认值true。
        settings.setDomStorageEnabled(true);//DOM存储API是否可用，默认false。
        //settings.setGeolocationEnabled(false);//定位是否可用，默认为true。
        settings.setAppCacheEnabled(true);//应用缓存API是否可用，默认值false, 结合setAppCachePath(String)使用。

        settings.setUseWideViewPort(true); // 将图片调整到适合WebView的大小
        settings.setLoadWithOverviewMode(true); // 自适应屏幕

        if (Build.VERSION.SDK_INT >= 19) {
            try {
                settings.setLayoutAlgorithm(WebSettings.LayoutAlgorithm.TEXT_AUTOSIZING);
            } catch (Exception e) {
                e.printStackTrace();
            }
        } else {
            settings.setLayoutAlgorithm(WebSettings.LayoutAlgorithm.NORMAL);
        }

        //settings.setAllowUniversalAccessFromFileURLs(true);
        if (Build.VERSION.SDK_INT > Build.VERSION_CODES.LOLLIPOP) {
            settings.setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);//加上这一句可以在webview中加载https图片，否则加载不出来
        }
        try {
            if (Build.VERSION.SDK_INT >= 16) {
                Class<?> clazz = settings.getClass();
                Method method = clazz.getMethod("setAllowUniversalAccessFromFileURLs", boolean.class);
                if (method != null) {
                    method.invoke(settings, true);
                }
            }
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
        } catch (NoSuchMethodException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (InvocationTargetException e) {
            e.printStackTrace();
        }
        if (android.os.Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            CookieManager.getInstance().setAcceptThirdPartyCookies(webView, true);
        }

        webView.setHorizontalScrollBarEnabled(false);//去掉webview的滚动条,水平不显示
        webView.setScrollbarFadingEnabled(true);
        webView.setScrollBarStyle(View.SCROLLBARS_OUTSIDE_OVERLAY);
        webView.setOverScrollMode(View.OVER_SCROLL_NEVER); // 取消WebView中滚动或拖动到顶部、底部时的阴影

    }

    private void initListener() {
        webView.setWebViewClient(new WebViewClient() {
            @RequiresApi(api = Build.VERSION_CODES.LOLLIPOP)
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                view.loadUrl(request.getUrl().getPath());
                return super.shouldOverrideUrlLoading(view, request);
            }

            @Override
            public void onPageStarted(WebView view, String url, Bitmap favicon) {
                super.onPageStarted(view, url, favicon);
                progressBar.setVisibility(View.VISIBLE);
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                progressBar.setVisibility(View.GONE);
                String title = view.getTitle();
            }

            @Override
            public void onReceivedError(WebView view, WebResourceRequest request, WebResourceError error) {
                super.onReceivedError(view, request, error);
                progressBar.setVisibility(View.GONE);
            }

            @Override
            public void onReceivedSslError(WebView view, SslErrorHandler handler, SslError error) {
                //super.onReceivedSslError(view, handler, error);
                //当load通过ssl加密的https页面，但是如果这个网站的安全证书在Android无法得到认证，WebView就会变成一个空白页，而并不会像自带的浏览器一样弹出提示。
                // 接受所有网站的证书，忽略SSL错误，执行访问网页
                handler.proceed();
                /*if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
                    webView.getSettings()
                            .setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);
                }*/
            }
        });

        webView.setWebChromeClient(new WebChromeClient() {
            @Override
            public void onProgressChanged(WebView view, int newProgress) {
                if (newProgress >= 100) {
                    progressBar.setVisibility(View.GONE);
                } else {
                    if (progressBar.getVisibility() == View.GONE) {
                        progressBar.setVisibility(View.VISIBLE);
                    }
                    progressBar.setProgress(newProgress);
                }
                super.onProgressChanged(view, newProgress);

            }
        });
    }

    public void loadUrl(String url) {
        if (TextUtils.isEmpty(url)) {
            url = "";
        }
        mUrl = url;
        webView.loadUrl(url);
    }


    public void setProgressDrawable(@DrawableRes int id) {
        progressBar.setProgressDrawable(progressBar.getContext().getResources().getDrawable(id));
    }

    public WebView getWebView() {
        return webView;
    }

    /*public FrameLayout getFragment() {
        return frameLayout;
    }*/

    public String getUrl() {
        return mUrl;
    }

    public boolean goBack() {
        if (webView.canGoBack()) {
            webView.goBack();
            return true;
        }
        return false;
    }

    public void onResume() {
        webView.getSettings().setJavaScriptEnabled(true);
        webView.onResume();
    }

    public void onPause() {
        webView.getSettings().setJavaScriptEnabled(false);
        webView.onPause();
    }

    public void onDestroy() {
        webView.setVisibility(GONE);
        webView.destroy();
    }

}