//手数
var counter = 0;
//初期状態 1:表 0:裏
var firstStatus = [1,0,0,0,0];
//答え
var ans =[];
//正解ルートへの鍵
var flag =["1","1","1","1","1"];

//カウントして表示するやつ
function count() {
  counter += 1;
  $( ".counter").text("現在： "+counter+"手");
}

//結果を表示
function answerCheck(){
  $(".coin").each(function(i){
    ans.push($(this).attr("alt"));
  });
  //if(ans == flag){
    $.ajax({
      type: 'GET',
      url: './Coin/check',
      data: "answer=" + counter,
      success: function(data) {
        if ( data == 'true') {
          $('.teacher').text('正解');
        } else {
          $('.teacher').text('不正解');
        }
      }
    });
  //}
  ans=[];
}

//選択したのコインを裏返す
function reverse(){
  var targets = document.getElementsByClassName("coin");
  if(document.getElementsByName("checked").length == 3){
    for(i=0; i<targets.length; i++){
      if(targets[i].name=="checked"){
        if(targets[i].alt == 1){
          targets[i].src="img/coin/tail.png";
          targets[i].alt = 0;
        }else{
          targets[i].src="img/coin/head.png";
          targets[i].alt = 1;
        }
        targets[i].style.border="thick solid transparent";
        targets[i].removeAttribute("name");
      }
    }
    count();
    answerCheck();
  }else{
    alert("三つ選択した場合のみ実行可能です");
  }
}

//リセット
function reset() {
  counter = 0;
  $(".counter").text("現在： "+counter+"手");
  $(".teacher").text("");
  $("img").each(function(i){
    if(firstStatus[i] == 1){
      $(this).attr("src", "img/coin/head.png");
      $(this).attr("alt", 1);
    }else{
      $(this).attr("src", "img/coin/tail.png");
      $(this).attr("alt", 0);
    }
    $(this).removeAttr("name");
    $(this).attr("style", "border: thick solid transparent");
  });
  ans = [];
}

//クリックしたコインを裏返すやつのマーク付けをする
function check(){
  if(event.target.style.border=="thick solid red"){
    event.target.style.border="thick solid transparent";
    event.target.removeAttribute("name");
  }else{
    event.target.style.border="thick solid red";
    event.target.name="checked";
  }
}
