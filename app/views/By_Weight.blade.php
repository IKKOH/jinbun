<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8" />
	<link rel="stylesheet" href="//code.jquery.com/ui/1.11.1/themes/smoothness/jquery-ui.css">
	{{HTML::style('css/base.css')}}
	{{HTML::style('css/by_weight.css')}}
	<title>bebras_sample1</title>
</head>
<body>
	<header>
		<h1>Bebras Contest Sample</h1>
	</header>
	<section>
		<h2>Question : By Weight</h2>
		<p>サイズの異なる５つの丸太を重さの小さい順に並べてください。</p>
		<p>１度に２つの丸太を選択して、重さを比較することができます。</p>
		<p>比べたいものを下の2つの四角に入れてください</p>
		<p>答えを下の５つの四角に左から小さい順に並べてください</p>
		<div class="drag-range">
			<ul id="logs">
				<div class="choices">
					<li class="box1">{{HTML::image('img/by_weight/log1.png', 'log1', array('id' => 'log1'))}}</li>
				    <li class="box2">{{HTML::image('img/by_weight/log2.png', 'log2', array('id' => 'log2'))}}</li>
				    <li class="box3">{{HTML::image('img/by_weight/log3.png', 'log3', array('id' => 'log3'))}}</li>
				    <li class="box4">{{HTML::image('img/by_weight/log4.png', 'log4', array('id' => 'log4'))}}</li>
				    <li class="box5">{{HTML::image('img/by_weight/log5.png', 'log5', array('id' => 'log5'))}}</li>
			    </div>
			    <div class="compare">
				    <li id="leftlog" class="com-left">天秤左</li>
				    <li class="com-mark">&nbsp;</li>
				    <li id="rightlog" class="com-right">天秤右</li>
			    </div>
			    <div class="answer">
				    <li id="ans1">答え１</li>
				    <li id="ans2">答え２</li>
				    <li id="ans3">答え３</li>
				    <li id="ans4">答え４</li>
				    <li id="ans5">答え５</li>
				</div>
			</ul>
		</div>
		<div class="ans">
			<button type="button" onclick="answercheck();">答え合わせ</button>
			<p class="ans-mark"> </p>
		</div>
	</section>
	<footer>
		<p>Copyright© K.Fujisaki, 2014 All Rights Reserved.</p>
	</footer>
	<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.0/jquery-ui.min.js"></script>
	{{HTML::script('js/by_weight.js')}}
</body>
</html>
