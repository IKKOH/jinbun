/**
 * crossthree に関するjs
 */

// answerid
var ansid = [];

/**
 * 各種制御
 */
$(function () {
    // 各セルを押下した時のマーク付け/削除
    $(".cell").click(function () {
        if( $(this).children().is("img")) {
            $(this).empty();
        } else {
            var html = '<img src="./img/crossthree/cross.png" alt="cross">';
            $(this).append(html);
        }
    });
});

/**
 * 答え合わせ
 */
function answercheck() {
    if( check() ) {
        answer();
        ansid = [];
    } else {
        $(".ans-mark").text("印が６個ではありません");
        ansid = [];
    }
}

/**
 * 答えを配列に格納
 * 空の場合・チェックが６個でない場合はfalseを返して答え判定をしない
 */
function check() {
    var boolcheck = false;
    var count = 0;
    $(".cells > .cell").each(function(){
        // マークが6個か数えながら答え用配列にidを入れる
        if( $(this).children().is("img")) {
            ansid.push($(this).attr("id"));
            count += 1;
        }
    });
    if( count == 6) {
        boolcheck = true;
    } else {
        boolcheck = false;
    }
    return boolcheck;
}

/**
 * 答えチェック
 */
function answer() {
    $.ajax({
        type: 'GET',
        url: './CrossThree/check',
        data: "answer=" + ansid,
        success: function(data) {
            if ( data == 'true') {
                $('.ans-mark').text('正解');
                var html = "<a href='./Beehive'>次の問題へ</a>";
                $('.ans').append(html);
            } else {
                $('.ans-mark').text('不正解');
            }
        }
    });
}
