
//道選択
$("g[id*='cost']").click(function() {
//id=ans(答えの日数)の数字と　選択した道のコストをとる
ans = Number($("tspan[id='ans']").text());
varA = Number($(this).attr("id").charAt(6));
//選択したところのpathを選択
varS = $(this).children("#select");
//選択したところのコストを増減算
varS.attr("style") == 'display: none;' ? ans += varA: ans -= varA;
//選択したところの表示切り替え
varS.attr("style") == 'display: none;' ? varS.css("display","block") : varS.css("display","none");
//答え挿入
$("tspan[id='ans']").text(ans);

});

//答え合わせ
$("input").click(function(){
  ansstr = "";
  $("path[id='select']").each(function(){
    //色が変わっている道のidを集める
    if($(this).attr("style") == 'display: block;'){
      thispar = $(this).parent();
      thisid = thispar.attr("id");
      ansstr += thisid;
    }
 });
//答えはワンパターン
  $.ajax({
    type: 'GET',
    url: './BruggenBouwen/check',
    data: "answer=" + ansstr,

    success: function (data) {
      if( data == 'true') {
        $("#check").text("正解です");
      } else {
        $("#check").text("違うよ");
      }
    }
  });
});
