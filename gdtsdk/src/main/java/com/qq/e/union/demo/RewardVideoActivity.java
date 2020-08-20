package com.qq.e.union.demo;

import android.app.Activity;
import android.content.pm.ActivityInfo;
import android.os.Bundle;
import android.os.SystemClock;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.Toast;

import com.qq.e.ads.rewardvideo.RewardVideoAD;
import com.qq.e.ads.rewardvideo.RewardVideoADListener;
import com.qq.e.comm.util.AdError;
import com.qq.e.union.demo.adapter.PosIdArrayAdapter;

import java.util.Date;
import java.util.Locale;
import java.util.Map;


import static android.content.res.Configuration.ORIENTATION_LANDSCAPE;
import static android.content.res.Configuration.ORIENTATION_PORTRAIT;

/**
 * 激励视频广告基本接入示例，演示了基本的激励视频广告功能（1.初始化激励视频广告;2.加载激励视频广告;3.展示激励视频广告）。
 * <p>
 * Created by chaotao on 2018/10/8.
 */

public class RewardVideoActivity extends Activity implements RewardVideoADListener,
        AdapterView.OnItemSelectedListener {

  private static final String TAG = RewardVideoActivity.class.getSimpleName();
  private RewardVideoAD rewardVideoAD;
  private boolean adLoaded;//广告加载成功标志
  private boolean videoCached;//视频素材文件下载完成标志

  private Spinner spinner;
  private PosIdArrayAdapter arrayAdapter;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    setContentView(R.layout.activity_reward_video_gdt);
    rewardVideoAD = new RewardVideoAD(this, getPosID(), this, true);
    adLoaded = false;
    videoCached = false;
    // 2. 加载激励视频广告
    rewardVideoAD.loadAD();
  }

  private String getPosID() {
    return "3081711892905663";
  }

  /**
   * 广告加载成功，可在此回调后进行广告展示
   **/
  @Override
  public void onADLoad() {
    adLoaded = true;
    String msg = "load ad success ! expireTime = " + new Date(System.currentTimeMillis() +
        rewardVideoAD.getExpireTimestamp() - SystemClock.elapsedRealtime());
    //Toast.makeText(this, msg, Toast.LENGTH_LONG).show();
    Log.d(TAG, "eCPMLevel = " + rewardVideoAD.getECPMLevel());
  }

  /**
   * 视频素材缓存成功，可在此回调后进行广告展示
   */
  @Override
  public void onVideoCached() {
    videoCached = true;
    Log.i(TAG, "onVideoCached");

    if (adLoaded && rewardVideoAD != null) {//广告展示检查1：广告成功加载，此处也可以使用videoCached来实现视频预加载完成后再展示激励视频广告的逻辑
      if (!rewardVideoAD.hasShown()) {//广告展示检查2：当前广告数据还没有展示过
        long delta = 1000;//建议给广告过期时间加个buffer，单位ms，这里demo采用1000ms的buffer
        //广告展示检查3：展示广告前判断广告数据未过期
        if (SystemClock.elapsedRealtime() < (rewardVideoAD.getExpireTimestamp() - delta)) {
          rewardVideoAD.showAD();
        } else {
          finish();
         // Toast.makeText(this, "激励视频广告已过期，请再次请求广告后进行广告展示！", Toast.LENGTH_LONG).show();
        }
      } else {
        finish();
        //Toast.makeText(this, "此条广告已经展示过，请再次请求广告后进行广告展示！", Toast.LENGTH_LONG).show();
      }
    }

  }

  /**
   * 激励视频广告页面展示
   */
  @Override
  public void onADShow() {
    //TToast.show(RewardVideoActivity.this, "rewardVideoAd show");
//    JsonObject player1 = new JsonObject();
//    player1.addProperty("event","onAdShow" );
//    this.jsEvent(player1.toString());
    Log.i(TAG, "onADShow");
  }

  public  void jsEvent(String json){
    String tag = "";
    tag = "TTRewardVideoAd-js";
    Log.i(TAG, "[json]"+json);
  }

  /**
   * 激励视频广告曝光
   */
  @Override
  public void onADExpose() {
    Log.i(TAG, "onADExpose");
  }

  /**
   * 激励视频触发激励（观看视频大于一定时长或者视频播放完毕）
   */
  @Override
  public void onReward() {
    Log.i(TAG, "onReward");

  }

  /**
   * 激励视频广告被点击
   */
  @Override
  public void onADClick() {
    Map<String, String> map = rewardVideoAD.getExts();
    String clickUrl = map.get("clickUrl");
    Log.i(TAG, "onADClick clickUrl: " + clickUrl);
  }

  /**
   * 激励视频播放完毕
   */
  @Override
  public void onVideoComplete() {
    Log.i(TAG, "onVideoComplete");
    finish();
  }

  /**
   * 激励视频广告被关闭
   */
  @Override
  public void onADClose() {
    Log.i(TAG, "onADClose");
    Log.i(TAG, "onADShow");
    finish();
  }

  /**
   * 广告流程出错
   */
  @Override
  public void onError(AdError adError) {
    String msg = String.format(Locale.getDefault(), "onError, error code: %d, error msg: %s",
        adError.getErrorCode(), adError.getErrorMsg());
    //Toast.makeText(this, msg, Toast.LENGTH_LONG).show();
    Log.i(TAG, "onError, adError=" + msg);
    finish();
  }

  @Override
  public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
    arrayAdapter.setSelectedPos(position);
    //posIdEdt.setText(getResources().getStringArray(R.array.reward_video_value)[position]);
  }

  @Override
  public void onNothingSelected(AdapterView<?> parent) {

  }
}
