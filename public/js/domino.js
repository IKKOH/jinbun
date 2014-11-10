/**
 *  domino用js
 */

// answerid
var ansid = [];

// 円内のドミノ数
var dominocount = 0;

// 円サイズ ドミノ数(0個〜) : サイズ
var circlesize = [ 50, 100, 130, 130, 160, 190, 220, 220, 250];

// 円のmargin-top ドミノ数(0個〜) : px
var circlemargin = [ 190, 170, 150, 150, 130, 110, 90, 90, 70];

// ドミノの配置 ドミノの個数 : { idx : { left(px) , top(px) , rotate(deg)}}
var dominoposition = {
                1 : { 1 : ["10px", "-20px", "0deg"]},
                2 : { 1 : ["24px", "-20px", "0deg"],
                      2 : ["24px", "110px", "0deg"]},
                3 : { 1 : ["24px", "-20px", "0deg"],
                      2 : ["85px", "75px", "-55deg"],
                      3 : ["-40px", "75px", "50deg"]},
                4 : { 1 : ["100px", "15px", "50deg"],
                      2 : ["95px", "115px", "-40deg"],
                      3 : ["-20px", "120px", "40deg"],
                      4 : ["-20px", "5px", "135deg"]},
                5 : { 1 : ["50px", "-20px", "0deg"],
                      2 : ["145px", "45px", "-115deg"],
                      3 : ["115px", "145px", "-40deg"],
                      4 : ["-20px", "140px", "45deg"],
                      5 : ["-35px", "40px", "110deg"]},
                6 : { 1 : ["130px", "0px", "35deg"],
                      2 : ["185px", "90px", "-90deg"],
                      3 : ["130px", "175px", "-35deg"],
                      4 : ["0px", "180px", "35deg"],
                      5 : ["-40px", "90px", "90deg"],
                      6 : ["5px", "-5px", "145deg"]},
                7 : { 1 : ["75px", "-20px", "0deg"],
                      2 : ["155px", "25px", "-130deg"],
                      3 : ["180px", "110px", "-80deg"],
                      4 : ["120px", "190px", "-30deg"],
                      5 : ["15px", "190px", "30deg"],
                      6 : ["-45px", "115px", "70deg"],
                      7 : ["-20px", "15px", "130deg"]},
                8 : { 1 : ["135px", "-10px", "25deg"],
                      2 : ["200px", "60px", "-110deg"],
                      3 : ["200px", "150px", "-70deg"],
                      4 : ["135px", "215px", "-20deg"],
                      5 : ["30px", "220px", "20deg"],
                      6 : ["-35px", "150px", "65deg"],
                      7 : ["-35px", "55px", "115deg"],
                      8 : ["25px", "-15px", "155deg"]}
};

/**
 * 各要素の制御
 */
$(function() {

    // ドミノと円の制御（box）
    $( '#dominocase' ).sortable( {
            connectWith: '#answercircle',
            items: 'li.domino',
            containment: '#drag-range',
            cursor: 'move',
            receive: function (e, ui) {
                if( dominocount > 0) {
                    dominocount -= 1;
                }
                $("#answercircle").css("width", circlesize[dominocount]);
                $("#answercircle").css("height", circlesize[dominocount]);
                $("#answercircle").css("margin-top", circlemargin[dominocount]);
                // リセット
                $("#dominocase li").each( function(idx){
                    $(this).css("position", "");
                    $(this).css("left", "");
                    $(this).css("top", "");
                    $(this).css("transform", "rotate(0deg)");
                });
            }
    });

    // ドミノと円の制御（円）
    $( '#answercircle' ).sortable( {
            connectWith: '#dominocase',
            items: 'li.domino',
            containment: '#drag-range',
            cursor: 'move',
            stop: function (e, ui) {
                // ドミノの配置
                $("#answercircle li").each( function(idx){
                    $(this).css("left", dominoposition[dominocount][idx+1][0]);
                    $(this).css("top", dominoposition[dominocount][idx+1][1]);
                    $(this).css("transform", "rotate("+dominoposition[dominocount][idx+1][2]+")");
                });
            },
            receive: function (e, ui) {
                dominocount += 1;
                // 円のサイズ変更
                $("#answercircle").css("width", circlesize[dominocount]);
                $("#answercircle").css("height", circlesize[dominocount]);
                $("#answercircle").css("margin-top", circlemargin[dominocount]);
                // ドミノの配置
                $("#answercircle li").each( function(idx){
                    $(this).css("left", dominoposition[dominocount][idx+1][0]);
                    $(this).css("top", dominoposition[dominocount][idx+1][1]);
                    $(this).css("transform", "rotate("+dominoposition[dominocount][idx+1][2]+")");
                });
            }
    });

    // ドミノ１クリック制御
    $( "#domino1").click(function () {
        var id = $(this).attr("alt");
        // 裏か判定（裏だと先頭にrがつく）
        if( id.match(/^r[0-9]-[0-9]$/) != null) {
            // r削除
            tmp = id.replace(/(.)(.+?)/,"$2");
            id = tmp;
            $(this).attr("src", "./img/domino/"+id+".png");
            $(this).attr("alt", id);
        } else {
            $(this).attr("src", "./img/domino/r"+id+".png");
            $(this).attr("alt", "r"+id);
        }

    });

    // ドミノ２クリック制御
    $( "#domino2").click(function () {
        var id = $(this).attr("alt");
        // 裏か判定（裏だと先頭にrがつく）
        if( id.match(/^r[0-9]-[0-9]$/) != null) {
            // r削除
            tmp = id.replace(/(.)(.+?)/,"$2");
            id = tmp;
            $(this).attr("src", "./img/domino/"+id+".png");
            $(this).attr("alt", id);
        } else {
            $(this).attr("src", "./img/domino/r"+id+".png");
            $(this).attr("alt", "r"+id);
        }

    });

    // ドミノ３クリック制御
    $( "#domino3").click(function () {
        var id = $(this).attr("alt");
        // 裏か判定（裏だと先頭にrがつく）
        if( id.match(/^r[0-9]-[0-9]$/) != null) {
            // r削除
            tmp = id.replace(/(.)(.+?)/,"$2");
            id = tmp;
            $(this).attr("src", "./img/domino/"+id+".png");
            $(this).attr("alt", id);
        } else {
            $(this).attr("src", "./img/domino/r"+id+".png");
            $(this).attr("alt", "r"+id);
        }

    });

    // ドミノ４クリック制御
    $( "#domino4").click(function () {
        var id = $(this).attr("alt");
        // 裏か判定（裏だと先頭にrがつく）
        if( id.match(/^r[0-9]-[0-9]$/) != null) {
            // r削除
            tmp = id.replace(/(.)(.+?)/,"$2");
            id = tmp;
            $(this).attr("src", "./img/domino/"+id+".png");
            $(this).attr("alt", id);
        } else {
            $(this).attr("src", "./img/domino/r"+id+".png");
            $(this).attr("alt", "r"+id);
        }

    });

    // ドミノ５クリック制御
    $( "#domino5").click(function () {
        var id = $(this).attr("alt");
        // 裏か判定（裏だと先頭にrがつく）
        if( id.match(/^r[0-9]-[0-9]$/) != null) {
            // r削除
            tmp = id.replace(/(.)(.+?)/,"$2");
            id = tmp;
            $(this).attr("src", "./img/domino/"+id+".png");
            $(this).attr("alt", id);
        } else {
            $(this).attr("src", "./img/domino/r"+id+".png");
            $(this).attr("alt", "r"+id);
        }

    });

    // ドミノ６クリック制御
    $( "#domino6").click(function () {
        var id = $(this).attr("alt");
        // 裏か判定（裏だと先頭にrがつく）
        if( id.match(/^r[0-9]-[0-9]$/) != null) {
            // r削除
            tmp = id.replace(/(.)(.+?)/,"$2");
            id = tmp;
            $(this).attr("src", "./img/domino/"+id+".png");
            $(this).attr("alt", id);
        } else {
            $(this).attr("src", "./img/domino/r"+id+".png");
            $(this).attr("alt", "r"+id);
        }

    });

    // ドミノ７クリック制御
    $( "#domino7").click(function () {
        var id = $(this).attr("alt");
        // 裏か判定（裏だと先頭にrがつく）
        if( id.match(/^r[0-9]-[0-9]$/) != null) {
            // r削除
            tmp = id.replace(/(.)(.+?)/,"$2");
            id = tmp;
            $(this).attr("src", "./img/domino/"+id+".png");
            $(this).attr("alt", id);
        } else {
            $(this).attr("src", "./img/domino/r"+id+".png");
            $(this).attr("alt", "r"+id);
        }

    });

    // ドミノ８クリック制御
    $( "#domino8").click(function () {
        var id = $(this).attr("alt");
        // 裏か判定（裏だと先頭にrがつく）
        if( id.match(/^r[0-9]-[0-9]$/) != null) {
            // r削除
            tmp = id.replace(/(.)(.+?)/,"$2");
            id = tmp;
            $(this).attr("src", "./img/domino/"+id+".png");
            $(this).attr("alt", id);
        } else {
            $(this).attr("src", "./img/domino/r"+id+".png");
            $(this).attr("alt", "r"+id);
        }

    });

});

/**
 * 答え合わせ
 */
function answercheck() {
    // 回答チェック
    if( check() ) {
        answer();
        ansid = [];
    } else {
        $(".ans-mark").text("未選択があります");
    }
}

/**
 * 答えの配列に抜けがないかチェック
 */
function check() {
    var boolcheck = false;
    $("#answercircle li img").each(function (idx) {
        var id = $(this).attr("alt");
        // 裏か判定（裏だと先頭にrがつく）
        if( id.match(/^r[0-9]-[0-9]$/) != null) {
            // r削除
            tmp = id.replace(/(.)(.+?)/,"$2");
            id = tmp;
            aryTmp = [];
            // 最初だけドミノの左を先に読む
            if( idx == 0) {
                aryTmp.push(id.replace(/(\d)-(\d)/, "$2"));
                aryTmp.push(id.replace(/(\d)-(\d)/, "$1"));
            } else {
                aryTmp.push(id.replace(/(\d)-(\d)/, "$1"));
                aryTmp.push(id.replace(/(\d)-(\d)/, "$2"));
            }
            ansid.push(aryTmp);
        } else {
            aryTmp = [];
            // 最初だけドミノの左を先に読む
            if( idx == 0) {
                aryTmp.push(id.replace(/(\d)-(\d)/, "$1"));
                aryTmp.push(id.replace(/(\d)-(\d)/, "$2"));
            } else {
                aryTmp.push(id.replace(/(\d)-(\d)/, "$2"));
                aryTmp.push(id.replace(/(\d)-(\d)/, "$1"));
            }
            ansid.push(aryTmp);
        }
    });
    if( ansid != '') {
        boolcheck = true;
    }
    return boolcheck;
}

/**
 * 答えチェック
 */
function answer() {
    $.ajax({
        type: 'GET',
        url: './Domino/check',
        data: {
            "answer" : ansid,
            "count" : dominocount
        },
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