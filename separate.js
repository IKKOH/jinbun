window.onload = function(){
  set();
};

function set(){
	    //Snap空間
	var ans = Snap(680,480).remove();
    
    //矢印の先端定義

    var marker = ans.polygon(0,5,2.5,2.5,2.5,7.5).attr({fill:"red" ,stroke:"none"}).marker();
    //状態

    var seton = true;

    //ボタン
	var buttom1 = ans.rect(10,10,40,20).attr({fill:"#b1b1b1", stroke:"#000000" ,strokeWidth:1});
	var text1  = ans.text(15,20,"Start!!").attr({fill:"black", fontSize:"10px" ,textAnchor:"start", dominantBaseline:"middle"});
    var buttom2 = ans.rect(60,10,40,20).attr({fill:"red", stroke:"#000000" ,strokeWidth:1});
    var text2  = ans.text(63,20,"Reset!!").attr({fill:"black", fontSize:"10px" ,textAnchor:"start", dominantBaseline:"middle"});

    var StartButtom = ans.g(buttom1,text1).attr({style:"cursor: pointer;"});
    var ResetButtom = ans.g(buttom2,text2).attr({style:"cursor: pointer;"});

    //四角16個
	var rect1 = ans.rect(20,220,40,40).attr({fill:"#b1b1b1", stroke:"#000000" ,strokeWidth:1});
	var rect2 = ans.rect(60,220,40,40).attr({fill:"#b1b1b1", stroke:"#000000" ,strokeWidth:1});
	var rect3 = ans.rect(100,220,40,40).attr({fill:"#b1b1b1", stroke:"#000000" ,strokeWidth:1});
	var rect4 = ans.rect(140,220,40,40).attr({fill:"#b1b1b1", stroke:"#000000" ,strokeWidth:1});
	var rect5 = ans.rect(180,220,40,40).attr({fill:"#b1b1b1", stroke:"#000000" ,strokeWidth:1});
	var rect6 = ans.rect(220,220,40,40).attr({fill:"#b1b1b1", stroke:"#000000" ,strokeWidth:1});
	var rect7 = ans.rect(260,220,40,40).attr({fill:"#b1b1b1", stroke:"#000000" ,strokeWidth:1});
	var rect8 = ans.rect(300,220,40,40).attr({fill:"#b1b1b1", stroke:"#000000" ,strokeWidth:1});
	var rect9 = ans.rect(340,220,40,40).attr({fill:"#b1b1b1", stroke:"#000000" ,strokeWidth:1});
	var rect10 = ans.rect(380,220,40,40).attr({fill:"#b1b1b1", stroke:"#000000" ,strokeWidth:1});
	var rect11 = ans.rect(420,220,40,40).attr({fill:"#b1b1b1", stroke:"#000000" ,strokeWidth:1});
	var rect12 = ans.rect(460,220,40,40).attr({fill:"#b1b1b1", stroke:"#000000" ,strokeWidth:1});
	var rect13 = ans.rect(500,220,40,40).attr({fill:"#b1b1b1", stroke:"#000000" ,strokeWidth:1});
	var rect14 = ans.rect(540,220,40,40).attr({fill:"#b1b1b1", stroke:"#000000" ,strokeWidth:1});
	var rect15 = ans.rect(580,220,40,40).attr({fill:"#b1b1b1", stroke:"#000000" ,strokeWidth:1});
	var rect16 = ans.rect(620,220,40,40).attr({fill:"#b1b1b1", stroke:"#000000" ,strokeWidth:1});

    //分割
    var line1 = ans.line(340,300,340,300).attr({stroke:"red" ,strokeWidth:2});
    var line2 = ans.line(340,260,340,260).attr({stroke:"red" ,strokeWidth:3 ,strokeDasharray:"4 2"});

    var line3 = ans.line(500,260,500,260).attr({stroke:"red" ,strokeWidth:2});
    var line4 = ans.line(500,220,500,220).attr({stroke:"red" ,strokeWidth:3 ,strokeDasharray:"4 2"});
    var line5 = ans.line(180,300,180,300).attr({stroke:"red" ,strokeWidth:2});
    var line6 = ans.line(180,260,180,260).attr({stroke:"red" ,strokeWidth:3 ,strokeDasharray:"4 2"});

    var line7 = ans.line(100,300,100,300).attr({stroke:"red" ,strokeWidth:2});
    var line8 = ans.line(100,260,100,260).attr({stroke:"red" ,strokeWidth:3 ,strokeDasharray:"4 2"});
    var line9 = ans.line(260,260,260,260).attr({stroke:"red" ,strokeWidth:2});
    var line10 = ans.line(260,220,260,220).attr({stroke:"red" ,strokeWidth:3 ,strokeDasharray:"4 2"});
    var line11 = ans.line(420,260,420,260).attr({stroke:"red" ,strokeWidth:2});
    var line12 = ans.line(420,220,420,220).attr({stroke:"red" ,strokeWidth:3 ,strokeDasharray:"4 2"});
    var line13 = ans.line(580,220,580,220).attr({stroke:"red" ,strokeWidth:2});
    var line14 = ans.line(580,180,580,180).attr({stroke:"red" ,strokeWidth:3 ,strokeDasharray:"4 2"});

    var line15 = ans.line(60,300,60,300).attr({stroke:"red" ,strokeWidth:2});
    var line16 = ans.line(60,260,60,260).attr({stroke:"red" ,strokeWidth:3 ,strokeDasharray:"4 2"});
    var line17 = ans.line(140,260,140,260).attr({stroke:"red" ,strokeWidth:2});
    var line18 = ans.line(140,220,140,220).attr({stroke:"red" ,strokeWidth:3 ,strokeDasharray:"4 2"});
    var line19 = ans.line(220,260,220,260).attr({stroke:"red" ,strokeWidth:2});
    var line20 = ans.line(220,220,220,220).attr({stroke:"red" ,strokeWidth:3 ,strokeDasharray:"4 2"});
    var line21 = ans.line(300,220,300,220).attr({stroke:"red" ,strokeWidth:2});
    var line22 = ans.line(300,180,300,180).attr({stroke:"red" ,strokeWidth:3 ,strokeDasharray:"4 2"});
    var line23 = ans.line(380,260,380,260).attr({stroke:"red" ,strokeWidth:2});
    var line24 = ans.line(380,220,380,220).attr({stroke:"red" ,strokeWidth:3 ,strokeDasharray:"4 2"});
    var line25 = ans.line(460,220,460,220).attr({stroke:"red" ,strokeWidth:2});
    var line26 = ans.line(460,180,460,180).attr({stroke:"red" ,strokeWidth:3 ,strokeDasharray:"4 2"});
    var line27 = ans.line(540,220,540,220).attr({stroke:"red" ,strokeWidth:2});
    var line28 = ans.line(540,180,540,180).attr({stroke:"red" ,strokeWidth:3 ,strokeDasharray:"4 2"});
    var line29 = ans.line(620,180,620,180).attr({stroke:"red" ,strokeWidth:2});
    var line30 = ans.line(620,140,620,140).attr({stroke:"red" ,strokeWidth:3 ,strokeDasharray:"4 2"});

    var arrow1 = ans.line(500,260,500,260).attr({stroke:"red" ,strokeWidth:3});

    var arrow2 = ans.line(580,220,580,220).attr({stroke:"red" ,strokeWidth:3});
    var arrow3 = ans.line(260,260,260,260).attr({stroke:"red" ,strokeWidth:3});

    var arrow4 = ans.line(140,260,140,260).attr({stroke:"red" ,strokeWidth:3});
    var arrow5 = ans.line(300,220,300,220).attr({stroke:"red" ,strokeWidth:3});
    var arrow6 = ans.line(460,220,460,220).attr({stroke:"red" ,strokeWidth:3});
    var arrow7 = ans.line(620,180,620,180).attr({stroke:"red" ,strokeWidth:3});

    var arrow8 = ans.line(80,260,80,260).attr({stroke:"red" ,strokeWidth:3});
    var arrow9 = ans.line(160,220,160,220).attr({stroke:"red" ,strokeWidth:3});
    var arrow10 = ans.line(240,220,240,220).attr({stroke:"red" ,strokeWidth:3});
    var arrow11 = ans.line(320,180,320,180).attr({stroke:"red" ,strokeWidth:3});
    var arrow12 = ans.line(400,220,400,220).attr({stroke:"red" ,strokeWidth:3});
    var arrow13 = ans.line(480,180,480,180).attr({stroke:"red" ,strokeWidth:3});
    var arrow14 = ans.line(560,180,560,180).attr({stroke:"red" ,strokeWidth:3});
    var arrow15 = ans.line(640,140,640,140).attr({stroke:"red" ,strokeWidth:3});      


    StartButtom.click(function(){

    	start();
        
        //再生ボタンの定義
    	function start(){
    	 if(seton){
    	   seton = false;
    	   draw1();
    	 }
    	}
		//線引き
    	function draw1(){
    	 line1.stop().animate({y1:180},300);
    	 setTimeout(function(){line2.stop().animate({x2:660},300);},400);
    	 setTimeout(function(){move1()},1500);
        }
        //ブロック移動
        function move1(){
         arrow1.attr({markerStart: marker});
         arrow1.stop().animate({y1:220},900);
         rect9.stop().animate({y:180},900);
         rect10.stop().animate({y:180},900);
         rect11.stop().animate({y:180},900);
         rect12.stop().animate({y:180},900);
         rect13.stop().animate({y:180},900);
         rect14.stop().animate({y:180},900);
         rect15.stop().animate({y:180},900);
         rect16.stop().animate({y:180},900);
         setTimeout(function(){draw2()},1500);
        }

        function draw2(){
         line1.attr({style:"display:none;"});
         line2.attr({style:"display:none;"});
         arrow1.attr({style:"display:none;"});

    	 line3.stop().animate({y1:140},300);
    	 line5.stop().animate({y1:180},300);

    	 setTimeout(function(){line4.stop().animate({x2:660},300);},400);
		 setTimeout(function(){line6.stop().animate({x2:340},300);},400);

    	 setTimeout(function(){move2()},1500);
        }

        function move2(){

         arrow2.attr({markerStart: marker});
         arrow2.stop().animate({y1:180},900);
         arrow3.attr({markerStart: marker});
         arrow3.stop().animate({y1:220},900);

         rect5.stop().animate({y:180},900);
         rect6.stop().animate({y:180},900);
         rect7.stop().animate({y:180},900);
         rect8.stop().animate({y:180},900);
         rect13.stop().animate({y:140},900);
         rect14.stop().animate({y:140},900);
         rect15.stop().animate({y:140},900);
         rect16.stop().animate({y:140},900);

         setTimeout(function(){draw3()},1500);
        }

        function draw3(){
         line3.attr({style:"display:none;"});
         line4.attr({style:"display:none;"});
         line5.attr({style:"display:none;"});
         line6.attr({style:"display:none;"});
         arrow2.attr({style:"display:none;"});
         arrow3.attr({style:"display:none;"});

    	 line7.stop().animate({y1:180},300);
    	 line9.stop().animate({y1:140},300);
    	 line11.stop().animate({y1:140},300);
    	 line13.stop().animate({y1:100},300);

    	 setTimeout(function(){line8.stop().animate({x2:180},300);},400);
		 setTimeout(function(){line10.stop().animate({x2:340},300);},400);
		 setTimeout(function(){line12.stop().animate({x2:500},300);},400);
		 setTimeout(function(){line14.stop().animate({x2:660},300);},400);

    	 setTimeout(function(){move3()},1500);
        }

        function move3(){
         
         arrow4.attr({markerStart: marker});
         arrow4.stop().animate({y1:220},900);
         arrow5.attr({markerStart: marker});
         arrow5.stop().animate({y1:180},900);
         arrow6.attr({markerStart: marker});
         arrow6.stop().animate({y1:180},900);
         arrow7.attr({markerStart: marker});
         arrow7.stop().animate({y1:140},900);


         rect3.stop().animate({y:180},900);
         rect4.stop().animate({y:180},900);
         rect7.stop().animate({y:140},900);
         rect8.stop().animate({y:140},900);
         rect11.stop().animate({y:140},900);
         rect12.stop().animate({y:140},900);
         rect15.stop().animate({y:100},900);
         rect16.stop().animate({y:100},900);

         setTimeout(function(){draw4()},1500);
        }

         function draw4(){
         line7.attr({style:"display:none;"});
         line8.attr({style:"display:none;"});
         line9.attr({style:"display:none;"});
         line10.attr({style:"display:none;"});
         line11.attr({style:"display:none;"});
         line12.attr({style:"display:none;"});
         line13.attr({style:"display:none;"});
         line14.attr({style:"display:none;"});
         arrow4.attr({style:"display:none;"});
         arrow5.attr({style:"display:none;"});
         arrow6.attr({style:"display:none;"});
         arrow7.attr({style:"display:none;"});

    	 line15.stop().animate({y1:180},300);
    	 line17.stop().animate({y1:140},300);
    	 line19.stop().animate({y1:140},300);
    	 line21.stop().animate({y1:100},300);
    	 line23.stop().animate({y1:140},300);
    	 line25.stop().animate({y1:100},300);
    	 line27.stop().animate({y1:100},300);
    	 line29.stop().animate({y1:60},300);

    	 setTimeout(function(){line16.stop().animate({x2:100},300);},400);
		 setTimeout(function(){line18.stop().animate({x2:180},300);},400);
		 setTimeout(function(){line20.stop().animate({x2:260},300);},400);
		 setTimeout(function(){line22.stop().animate({x2:340},300);},400);
		 setTimeout(function(){line24.stop().animate({x2:420},300);},400);
		 setTimeout(function(){line26.stop().animate({x2:500},300);},400);
		 setTimeout(function(){line28.stop().animate({x2:580},300);},400);
		 setTimeout(function(){line30.stop().animate({x2:660},300);},400);

         setTimeout(function(){move4()},1500);
        }


        function move4(){

         arrow8.attr({markerStart: marker});
         arrow8.stop().animate({y1:220},900);
         arrow9.attr({markerStart: marker});
         arrow9.stop().animate({y1:180},900);
         arrow10.attr({markerStart: marker});
         arrow10.stop().animate({y1:180},900);
         arrow11.attr({markerStart: marker});
         arrow11.stop().animate({y1:140},900);
         arrow12.attr({markerStart: marker});
         arrow12.stop().animate({y1:180},900);
         arrow13.attr({markerStart: marker});
         arrow13.stop().animate({y1:140},900);
         arrow14.attr({markerStart: marker});
         arrow14.stop().animate({y1:140},900);
         arrow15.attr({markerStart: marker});
         arrow15.stop().animate({y1:100},900);

         rect2.stop().animate({y:180},900);
         rect4.stop().animate({y:140},900);
         rect6.stop().animate({y:140},900);
         rect8.stop().animate({y:100},900);
         rect10.stop().animate({y:140},900);
         rect12.stop().animate({y:100},900);
         rect14.stop().animate({y:100},900);
         rect16.stop().animate({y:60},900);

         setTimeout(function(){draw5()},1500);
        }

        function draw5(){
         line15.attr({style:"display:none;"});
         line16.attr({style:"display:none;"});
         line17.attr({style:"display:none;"});
         line18.attr({style:"display:none;"});
         line19.attr({style:"display:none;"});
         line20.attr({style:"display:none;"});
         line21.attr({style:"display:none;"});
         line22.attr({style:"display:none;"});
         line23.attr({style:"display:none;"});
         line24.attr({style:"display:none;"});
         line25.attr({style:"display:none;"});
         line26.attr({style:"display:none;"});
         line27.attr({style:"display:none;"});
         line28.attr({style:"display:none;"});
         line29.attr({style:"display:none;"});
         line30.attr({style:"display:none;"});

         arrow8.attr({style:"display:none;"});
         arrow9.attr({style:"display:none;"});
         arrow10.attr({style:"display:none;"});
         arrow11.attr({style:"display:none;"});
         arrow12.attr({style:"display:none;"});
         arrow13.attr({style:"display:none;"});
         arrow14.attr({style:"display:none;"});
         arrow15.attr({style:"display:none;"});
        }


    });

    ResetButtom.click(function(){
　　　　  if(!seton){
	      $('#container').empty();
	      set();
	      location.href = "#container";
    	}
    });

    var container = document.querySelector("#container");
    ans.prependTo(container);
}