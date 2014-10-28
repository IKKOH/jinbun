/**
 * swapping に関するjs
 */

// answerid
var ansid = [];


/**
 * 各制御
 */
$( function() {
	// 選択肢の領域のソート制御
	$( '#choice' ).sortable( {
            revert: true,
            connectWith: '#answerlist',
            items: 'li.list',
            containment: '#sort-range'
    });

	// 答えを入れる領域のソート制御
    $( '#answerlist' ).sortable( {
            revert: true,
            connectWith: '#choice',
            items: 'li.list',
            containment: '#sort-range'
    });

    // テキスト選択を無効にする
    $( '#sort-range' ).disableSelection();
} );

/**
 * 答え合わせ
 */
function answercheck() {
	if( check() ) {
		answer();
		ansid = [];
	} else {
		$(".ans-mark").text("未選択があります");
	}
}

/**
 * 答えを配列に格納
 * 空の場合はfalseを返して答え判定をしない
 */
function check() {
	var boolcheck = false;
	$("#answerlist > .list").each(function(){
    	ansid.push($(this).attr("id"));
    	boolcheck = true;
	});
	return boolcheck;
}

/**
 * 答えチェック
 */
function answer() {
    $.ajax({
        type: 'GET',
        url: './Swapping/check',
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



