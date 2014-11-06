//手数
var counter = 0;
//初期状態
var status = "EBSRBA";

//カウントして表示するやつ
function count() {
  counter += 1;
  $( ".counter").text("現在： "+counter+"手");
}

//文字の入れ替え
function swapNode(){
  var target = $(event.target).text();
  var change = $("#change").text();

  $(event.target).text(change);
  $("#change").text(target);
  count();
}

//カウントリセット
function reset() {
  counter = 0;
  $(".counter").text("現在： "+counter+"手");
  $(".teacher").text("");
  $(".list li").each(function(i){
    $(this).text(status[i]);
  });
}

/**
 * 答えチェック
 * 赤ペン先生
 */
 function answerCheck() {
  var student;
  student = $(".list li").text();
  $.ajax({
    type: 'GET',
    url: './Anagram/check',
    data: "answer=" + student + "," + counter,
    success: function(data) {
      if( data == 'true'){
        $('.teacher').text('正解');
      } else {
        $('.teacher').text('不正解');
      }
    }
  });
}
