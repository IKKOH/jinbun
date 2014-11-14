window.onload = function(){
  set();
};

function set(){
	//Snap空間
	var paper = Snap(500,600).remove().attr({style:"-ms-user-select: none; -moz-user-select: -moz-none; -khtml-user-select: none; -webkit-user-select: none; user-select: none;"});
    //枠
    for(var i = 1; i < 10; i++){
        var line = paper.line(i*50,50,i*50,450).attr({stroke:"#265076" ,strokeWidth:4});
    }
    var line = paper.line(48,48,452,48).attr({stroke:"#265076" ,strokeWidth:4});
    var line = paper.line(48,178,452,178).attr({stroke:"#265076" ,strokeWidth:4});
    var line = paper.line(48,450,452,450).attr({stroke:"#265076" ,strokeWidth:4});
    //ボタン
    var buttom = paper.rect(10,10,40,20,5,5).attr({fill:"#000000", stroke:"#000000" ,strokeWidth:1});
    var text  = paper.text(15,20,"Reset").attr({fill:"#ffffff", fontSize:"10px" ,textAnchor:"start", dominantBaseline:"middle"});

    var ResetButtom = paper.g(buttom,text).attr({style:"cursor: pointer;"});

    //状態変数
    var line1 = 0;
    var line2 = 0;
    var line3 = 0;
    var line4 = 0;
    var line5 = 0;
    var line6 = 0;
    var line7 = 0;

    var line10 = 0;
    var line20 = 0;
    var line30 = 0;
    var line40 = 0;
    var line50 = 0;
    var line60 = 0;
    var line70 = 0;

    //珠
    d = 100;
    textline = 70;
    for(var i = 1; i < 8; i++){
        //一番上の段
        eval("var circle" + i + " = paper.circle("+ d + ",65,15,15).attr({fill: '#67a0f5' ,stroke:'#265076' ,strokeWidth:3});");
        //ニ番目の段
        eval("var circle" + i*10 + " = paper.circle("+ d + ",95,15,15).attr({fill: '#67a0f5' ,stroke:'#265076' ,strokeWidth:3});");
        //ニ番目の段のスクリプト
        eval("circle" + i*10 + ".click(function(){if(line" + i + " == 0){circle" + i*10 + ".stop().animate({cy:160},400);line" + i + " = 5;changeNum(" + i + ");}else if(line" + i + " == 5){circle" + i*10 + ".stop().animate({cy:95},400);line" + i + " = 0;changeNum(" + i + ");}else{}});");
        //三番目の段
        eval("var circle" + i*100 + " = paper.circle("+ d + ",340,15,15).attr({fill: '#67a0f5' ,stroke:'#265076' ,strokeWidth:3});");
        eval("circle" + i*100 + ".click(function(){if(line" + i*10 + " == 0){circle" + i*100 + ".stop().animate({cy:195},600);line" + i*10 + " = 1;changeNum(" + i*10 + ");}else if(line" + i*10 + " == 1){circle" + i*100 + ".stop().animate({cy:340},600);line" + i*10 + " = 0;changeNum(" + i*10 + ");}else{}});");
        //四番目の段
        eval("var circle" + i*1000 + " = paper.circle("+ d + ",370,15,15).attr({fill: '#67a0f5' ,stroke:'#265076' ,strokeWidth:3});");
        eval("circle" + i*1000 + ".click(function(){if(line" + i*10 + " == 1){circle" + i*1000 + ".stop().animate({cy:225},600);line" + i*10 + " = 2;changeNum(" + i*10 + ");}else if(line" + i*10 + " == 2){circle" + i*1000 + ".stop().animate({cy:370},600);line" + i*10 + " = 1;changeNum(" + i*10 + ");}else{}});");
        //五番目の段
        eval("var circle" + i*10000 + " = paper.circle("+ d + ",400,15,15).attr({fill: '#67a0f5' ,stroke:'#265076' ,strokeWidth:3});");
        eval("circle" + i*10000 + ".click(function(){if(line" + i*10 + " == 2){circle" + i*10000 + ".stop().animate({cy:255},600);line" + i*10 + " = 3;changeNum(" + i*10 + ");}else if(line" + i*10 + " == 3){circle" + i*10000 + ".stop().animate({cy:400},600);line" + i*10 + " = 2;changeNum(" + i*10 + ");}else{}});");
        //六番目の段
        eval("var circle" + i*100000 + " = paper.circle("+ d + ",430,15,15).attr({fill: '#67a0f5' ,stroke:'#265076' ,strokeWidth:3});");
        eval("circle" + i*100000 + ".click(function(){if(line" + i*10 + " == 3){circle" + i*100000 + ".stop().animate({cy:285},600);line" + i*10 + " = 4;changeNum(" + i*10 + ");}else if(line" + i*10 + " == 4){circle" + i*100000 + ".stop().animate({cy:430},600);line" + i*10 + " = 3;changeNum(" + i*10 + ");}else{}});");
        //テキスト
        eval("var text" + i + " = paper.text("+ textline + ",160,'0');");
        eval("var text" + i*10 + " = paper.text("+ textline + ",200,'0');");
        eval("var text" + i*100 + " = paper.text("+ d + ",500,'0').attr({textAnchor: 'middle' ,fontSize:'50',fontWeight:'bold'});");
        d = 100 + (i * 50);
        textline = 70 + (i * 50);
    }

    function changeNum(num){
        eval("text" + num + ".attr({text: line" + num + "});");

        if(num>9){
            num = num / 10;
        }
        num = num * 100;
        eval("var sum = line" + num/100 + " + line" + num/10 + ";");
        eval("text" + num + ".attr({text: "+sum+"});");
    };

    ResetButtom.click(function(){
        $('#container').empty();
        set();
        location.href = "#container";
    });

    var container = document.querySelector("#container");
    paper.prependTo(container);
}