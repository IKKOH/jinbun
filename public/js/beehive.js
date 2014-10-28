/**
 * 共通変数定義
 */

// 各矢印に値を付与する(同じ向きには同じ値)
var arrowsweight = { "arrow1" : 1,
                    "arrow2" : 1,
                    "arrow3" : 2,
                    "arrow4" : 2,
                    "arrow5" : 3,
               		"arrow6" : 3,
               		"arrow7" : 4,
               		"arrow8" : 5,
               		"arrow9" : 6,
               		"arrow10" : 6};

// answerid(明示的に''を入れておく)
var ansid = ['','','',''];

/**
 * 各要素の制御
 */
$(function() {
	// ボックス１の制御
	$( ".box1").droppable({
		tolerance: "intersect"
	});

	// ボックス２の制御
	$( ".box2").droppable({
		tolerance: "intersect"
	});

	// ボックス３の制御
	$( ".box3").droppable({
		tolerance: "intersect"
	});

	// ボックス４の制御
	$( ".box4").droppable({
		tolerance: "intersect"
	});

	// ボックス５の制御
	$( ".box5").droppable({
		tolerance: "intersect"
	});

	// ボックス６の制御
	$( ".box6").droppable({
		tolerance: "intersect"
	});

	// ボックス７の制御
	$( ".box7").droppable({
		tolerance: "intersect"
	});

	// ボックス８の制御
	$( ".box8").droppable({
		tolerance: "intersect"
	});

	// ボックス９の制御
	$( ".box9").droppable({
		tolerance: "intersect"
	});

	// ボックス１０の制御
	$( ".box10").droppable({
		tolerance: "intersect"
	});

	// 矢印１の制御
	$( "#arrow1" ).draggable({
		containment: ".drag-range",
		revert: "invalid"
	});

	// 矢印２の制御
	$( "#arrow2" ).draggable({
		containment: ".drag-range",
		revert: "invalid"
	});

	// 矢印３の制御
	$( "#arrow3" ).draggable({
		containment: ".drag-range",
		revert: "invalid"
	});

	// 矢印４の制御
	$( "#arrow4" ).draggable({
		containment: ".drag-range",
		revert: "invalid"
	});

	// 矢印５の制御
	$( "#arrow5" ).draggable({
		containment: ".drag-range",
		revert: "invalid"
	});

	// 矢印６の制御
	$( "#arrow6" ).draggable({
		containment: ".drag-range",
		revert: "invalid"
	});

	// 矢印７の制御
	$( "#arrow7" ).draggable({
		containment: ".drag-range",
		revert: "invalid"
	});

	// 矢印８の制御
	$( "#arrow8" ).draggable({
		containment: ".drag-range",
		revert: "invalid"
	});

	// 矢印９の制御
	$( "#arrow9" ).draggable({
		containment: ".drag-range",
		revert: "invalid"
	});

	// 矢印１０の制御
	$( "#arrow10" ).draggable({
		containment: ".drag-range",
		revert: "invalid"
	});

	// 答え１の制御
	$( "#ans1").droppable({
		tolerance: "intersect",
		drop: function (e, ui) {
			var ans1arrowid = ui.draggable.attr("id");
			ansid[0] = arrowsweight[ans1arrowid];
			// ドロップ対象制御（2重ドロップ禁止）
			$(this).droppable('option', 'accept', ui.draggable);
		},
		out: function (e, ui) {
			ansid[0] = '';
			// ドロップ対象の制御を解除
			$(this).droppable('option', 'accept', '#arrow1,#arrow2,#arrow3,#arrow4,#arrow5,#arrow6,#arrow7,#arrow8,#arrow9,#arrow10');
		}
	});

	// 答え２の制御
	$( "#ans2").droppable({
		tolerance: "intersect",
		drop: function (e, ui) {
			var ans2arrowid = ui.draggable.attr("id");
			ansid[1] = arrowsweight[ans2arrowid];
			// ドロップ対象制御（2重ドロップ禁止）
			$(this).droppable('option', 'accept', ui.draggable);
		},
		out: function (e, ui) {
			ansid[1] = '';
			// ドロップ対象の制御を解除
			$(this).droppable('option', 'accept', '#arrow1,#arrow2,#arrow3,#arrow4,#arrow5,#arrow6,#arrow7,#arrow8,#arrow9,#arrow10');
		}
	});

	// 答え３の制御
	$( "#ans3").droppable({
		tolerance: "intersect",
		drop: function (e, ui) {
			var ans3arrowid = ui.draggable.attr("id");
			ansid[2] = arrowsweight[ans3arrowid];
			// ドロップ対象制御（2重ドロップ禁止）
			$(this).droppable('option', 'accept', ui.draggable);
		},
		out: function (e, ui) {
			ansid[2] = '';
			// ドロップ対象の制御を解除
			$(this).droppable('option', 'accept', '#arrow1,#arrow2,#arrow3,#arrow4,#arrow5,#arrow6,#arrow7,#arrow8,#arrow9,#arrow10');
		}
	});

	// 答え４の制御
	$( "#ans4").droppable({
		tolerance: "intersect",
		drop: function (e, ui) {
			var ans4arrowid = ui.draggable.attr("id");
			ansid[3] = arrowsweight[ans4arrowid];
			// ドロップ対象制御（2重ドロップ禁止）
			$(this).droppable('option', 'accept', ui.draggable);
		},
		out: function (e, ui) {
			ansid[3] = '';
			// ドロップ対象の制御を解除
			$(this).droppable('option', 'accept', '#arrow1,#arrow2,#arrow3,#arrow4,#arrow5,#arrow6,#arrow7,#arrow8,#arrow9,#arrow10');
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
		ansod = [];
	} else {
		$(".ans-mark").text("未選択があります");
	}
}

/**
 * 答えの配列に抜けがないかチェック
 * ※重複は許容
 */
function check() {
	if( ansid[0] == '') {
		return false;
	} else if( ansid[1] == '') {
		return false;
	} else if( ansid[2] == '') {
		return false;
	} else if( ansid[3] == '') {
		return false;
	}
	return true;
}

/**
 * 答えチェック
 */
function answer() {
	$.ajax({
		type: 'GET',
		url: './Beehive/check',
		data: "answer=" + ansid,
		success: function (data) {
			if( data == 'true') {
				$('.ans-mark').text('正解');
				var html = "<a href='./By_Weight'>次の問題へ</a>";
				$('.ans').append(html);
			} else {
				$('.ans-mark').text('不正解');
			}
		}
	});
}