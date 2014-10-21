/**
 * draggable option
 * 	 containment : 制御範囲
 */

// 各丸太の重さ
var logsweight = {"log1" : 3,
                  "log2" : 5,
                  "log3" : 2,
                  "log4" : 1,
                  "log5" : 4};

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
			// 右に対象があるかチェック
			if( rightlogid != "") {
				// 重さ比較
				if( logsweight[leftlogid] < logsweight[rightlogid]){
					$(".com-mark").text("<");
				} else {
					$(".com-mark").text(">");
				}
			} else {
				$(".com-mark").text("");
			}
		},
		out: function (e, ui) {
			leftlogid = "";
			$(this).droppable('option', 'accept', '#log1,#log2,#log3,#log4,#log5');
			$(".com-mark").text("");
		}
	});
	
	// 天秤右の制御
	$( "#rightlog" ).droppable({
		tolerance: "intersect",
		drop: function (e, ui) {
			rightlogid = ui.draggable.attr("id");
			$(this).droppable('option', 'accept', ui.draggable);
			// 左に対象があるかチェック
			if(leftlogid != "") {
				// 重さ比較
				if( logsweight[leftlogid] < logsweight[rightlogid]) {
					$(".com-mark").text("<");
				} else {
					$(".com-mark").text(">");
				}
			} else {
				$(".com-mark").text("");
			}
		},
		out: function (e, ui) {
			rightlogid = "";
			$(this).droppable('option', 'accept', '#log1,#log2,#log3,#log4,#log5');
			$(".com-mark").text("");
		}
	});
	
	// 答え１の制御
	$( "#ans1").droppable({
		tolerance: "intersect",
		drop: function (e, ui) {
			var ans1logid = ui.draggable.attr("id");
			ansid[0] = ans1logid;
		}
	});
	
	// 答え２の制御
	$( "#ans2").droppable({
		tolerance: "intersect",
		drop: function (e, ui) {
			var ans2logid = ui.draggable.attr("id");
			ansid[1] = ans2logid;
		}
	});
	
	// 答え３の制御
	$( "#ans3").droppable({
		tolerance: "intersect",
		drop: function (e, ui) {
			var ans3logid = ui.draggable.attr("id");
			ansid[2] = ans3logid;
		}
	});
	
	// 答え４の制御
	$( "#ans4").droppable({
		tolerance: "intersect",
		drop: function (e, ui) {
			var ans4logid = ui.draggable.attr("id");
			ansid[3] = ans4logid;
		}
	});
	
	// 答え５の制御
	$( "#ans5").droppable({
		tolerance: "intersect",
		drop: function (e, ui) {
			var ans5logid = ui.draggable.attr("id");
			ansid[4] = ans5logid;
		}
	});
	
});

/**
 * 答え合わせ
 */
function answercheck() {
	// 重複チェック
	if( check() ) {
		if( answer() ){
			$(".ans-mark").text("正解");
		} else {
			$(".ans-mark").text("不正解");
		}
	} else {
		$(".ans-mark").text("未選択があります");
	}
}

/**
 * 答えの配列に重複や抜けがないかチェック
 */
function check() {
	var boolcheck = false;
	for( var key in logsweight) {
		for(i = 0; i < 5; i++){
			if( key == ansid[i]) {
				boolcheck = true;
				break;
			} else {
				boolcheck = false;
			}
		}
	}
	return boolcheck;
}

/**
 * 答えチェック
 */
function answer() {
	var ans = ["log4", "log3", "log1", "log5", "log2"];
	for( var idx in ans) {
		if( ans[idx] != ansid[idx]) {
			return false;
		}
	}
	return true;
}