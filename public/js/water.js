/**
 * water に関するjs
 */

//初期状態
var water = [20,0,0];
//ハッシュ
var hash = {
  "20_liter": 20,
  "11_liter": 0,
  "9_liter": 0
};
//現在の状態
var statusWater = [20,0,0];
//クリックされたかどうかの状態
var flag = true;
//どの樽がくりっくされているか
var targetSrc;

/**
 * clickイベント
 * 何も押されてない場合フラグはたっていない
 * 押されている状態で、同じ物をクリックした場合に、戻す作業
 * 押されている状態で、他の物をクリック水を映す作業
 */
 function check() {
  if (flag){
    targetSrc = $(event.target).attr('alt');
    $(event.target).attr('src', "img/water/"+targetSrc+"_tilted.png");
    $(".arrow").each(function(){
      if($(this).attr('alt') != targetSrc){
        $(this).attr('src', "img/water/arrow.png");
      }
    });
    flag = false;
  } else {
    if(targetSrc == $(event.target).attr('alt')){
      $(event.target).attr('src', "img/water/"+targetSrc+".png");
      $(".arrow").each(function(){
        $(this).attr('src', "img/water/white.png");
      });
    }else{
      switch ( $(event.target).attr('alt') ) {
        case "20_liter":
        hash[$(event.target).attr('alt')] += hash[targetSrc];
        hash[targetSrc] = 0;
        break;
        case "11_liter":
        hash[$(event.target).attr('alt')] += hash[targetSrc];
        if(hash[$(event.target).attr('alt')] > 11){
          hash[targetSrc] = hash[$(event.target).attr('alt')]%11;
          hash[$(event.target).attr('alt')] = 11;
        }else{
          hash[targetSrc] = 0;
        }
        break;
        case "9_liter":
        hash[$(event.target).attr('alt')] += hash[targetSrc];
        if(hash[$(event.target).attr('alt')] > 9){
          hash[targetSrc] = hash[$(event.target).attr('alt')]%9;
          hash[$(event.target).attr('alt')] = 9;
        }else{
          hash[targetSrc] = 0;
        }
        break;
      }
      // 現在状態に映す
      for (var i in hash) {
        switch(i){
          case "20_liter": statusWater[0] = hash[i];
          break;
          case "11_liter": statusWater[1] = hash[i];
          break;
          case "9_liter": statusWater[2] = hash[i];
          break;
        }
      }
      $(".amount").each(function(i){
        $(this).text(statusWater[i]+" L");
      });
      $(".arrow").each(function(i){
        $(this).attr('src', "img/water/white.png");
      });
      $(".water").each(function(){
        $(this).attr('src', "img/water/"+$(this).attr("alt")+".png");
      });
    }
    flag = true;
  }
}

//リセット
function reset() {
  $(".amount").each(function(i){
    $(this).text(water[i]+" L");
  });
  $(".arrow").each(function(i){
    $(this).attr('src', "img/water/white.png");
  });
  $(".water").each(function(){
    $(this).attr('src', "img/water/"+$(this).attr("alt")+".png");
  });
}

function answerCheck(){
  $.ajax({
    type: 'GET',
    url: './Water/check',
    data: "answer=" + statusWater,
    success: function(data) {
      if ( data == 'true') {
        $('.teacher').text('正解');
      } else {
        $('.teacher').text('不正解');
      }
    }
  });
}
