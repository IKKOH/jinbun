/**
 *  by_weight用js
 */

// 各天秤の上に乗っている丸太のid
var leftlogid = "";
var rightlogid = "";

// answerid
var ansid = [];

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

	// 丸太１の制御
	$( "#log1" ).draggable({
		containment: ".drag-range",
		revert: "invalid"
	});

	// 丸太２の制御
	$( "#log2" ).draggable({
		containment: ".drag-range",
		revert: "invalid"
	});

	// 丸太３の制御
	$( "#log3" ).draggable({
		containment: ".drag-range",
		revert: "invalid"
	});

	// 丸太４の制御
	$( "#log4" ).draggable({
		containment: ".drag-range",
		revert: "invalid"
	});

	// 丸太５の制御
	$( "#log5" ).draggable({
		containment: ".drag-range",
		revert: "invalid"
	});

	// 天秤左の制御
	$( "#leftlog" ).droppable({
		tolerance: "intersect",
		drop: function (e, ui) {
			leftlogid = ui.draggable.attr("id");
			$(this).droppable('option', 'accept', ui.draggable);
			$.ajax({
				type: 'GET',
				url: './By_Weight/compare',
				data: "left=" + leftlogid + "&right=" + rightlogid,
				success: function (data) {
					if( data == 'left') {
						$(".com-mark").text(">");
					} else if( data == 'right') {
						$(".com-mark").text("<");
					} else if( data == 'eq') {
						$(".com-mark").text("");
					}
				}
			});
		},
		out: function (e, ui) {
			leftlogid = "";
			$(this).droppable('option', 'accept', '#log1,#log2,#log3,#log4,#log5');
			$.ajax({
				type: 'GET',
				url: './By_Weight/compare',
				data: "left=" + leftlogid + "&right=" + rightlogid,
				success: function (data) {
					if( data == 'left') {
						$(".com-mark").text(">");
					} else if( data == 'right') {
						$(".com-mark").text("<");
					} else if( data == 'eq') {
						$(".com-mark").text("");
					}
				}
			});
		}
	});

	// 天秤右の制御
	$( "#rightlog" ).droppable({
		tolerance: "intersect",
		drop: function (e, ui) {
			rightlogid = ui.draggable.attr("id");
			$(this).droppable('option', 'accept', ui.draggable);
			$.ajax({
				type: 'GET',
				url: './By_Weight/compare',
				data: "left=" + leftlogid + "&right=" + rightlogid,
				success: function (data) {
					if( data == 'left') {
						$(".com-mark").text(">");
					} else if( data == 'right') {
						$(".com-mark").text("<");
					} else if( data == 'eq') {
						$(".com-mark").text("");
					}
				}
			});
		},
		out: function (e, ui) {
			rightlogid = "";
			$(this).droppable('option', 'accept', '#log1,#log2,#log3,#log4,#log5');
			$.ajax({
				type: 'GET',
				url: './By_Weight/compare',
				data: "left=" + leftlogid + "&right=" + rightlogid,
				success: function (data) {
					if( data == 'left') {
						$(".com-mark").text(">");
					} else if( data == 'right') {
						$(".com-mark").text("<");
					} else if( data == 'eq') {
						$(".com-mark").text("");
					}
				}
			});
		}
	});

	// 答え１の制御
	$( "#ans1").droppable({
		tolerance: "intersect",
		drop: function (e, ui) {
			var ans1logid = ui.draggable.attr("id");
			ansid[0] = ans1logid;
			$(this).droppable('option', 'accept', ui.draggable);
		},
		out: function (e, ui) {
			ansid[0] = '';
			$(this).droppable('option', 'accept', '#log1,#log2,#log3,#log4,#log5');
		}
	});

	// 答え２の制御
	$( "#ans2").droppable({
		tolerance: "intersect",
		drop: function (e, ui) {
			var ans2logid = ui.draggable.attr("id");
			ansid[1] = ans2logid;
			$(this).droppable('option', 'accept', ui.draggable);
		},
		out: function (e, ui) {
			ansid[1] = '';
			$(this).droppable('option', 'accept', '#log1,#log2,#log3,#log4,#log5');
		}
	});

	// 答え３の制御
	$( "#ans3").droppable({
		tolerance: "intersect",
		drop: function (e, ui) {
			var ans3logid = ui.draggable.attr("id");
			ansid[2] = ans3logid;
			$(this).droppable('option', 'accept', ui.draggable);
		},
		out: function (e, ui) {
			ansid[2] = '';
			$(this).droppable('option', 'accept', '#log1,#log2,#log3,#log4,#log5');
		}
	});

	// 答え４の制御
	$( "#ans4").droppable({
		tolerance: "intersect",
		drop: function (e, ui) {
			var ans4logid = ui.draggable.attr("id");
			ansid[3] = ans4logid;
			$(this).droppable('option', 'accept', ui.draggable);
		},
		out: function (e, ui) {
			ansid[3] = '';
			$(this).droppable('option', 'accept', '#log1,#log2,#log3,#log4,#log5');
		}
	});

	// 答え５の制御
	$( "#ans5").droppable({
		tolerance: "intersect",
		drop: function (e, ui) {
			var ans5logid = ui.draggable.attr("id");
			ansid[4] = ans5logid;
			$(this).droppable('option', 'accept', ui.draggable);
		},
		out: function (e, ui) {
			ansid[4] = '';
			$(this).droppable('option', 'accept', '#log1,#log2,#log3,#log4,#log5');
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
	for( i= 0; i < 5; i++) {
		if( ansid[i] == '') {
			return false;
		}
	}
	return true;
}

/**
 * 答えチェック
 */
function answer() {
	$.ajax({
        type: 'GET',
        url: './By_Weight/check',
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