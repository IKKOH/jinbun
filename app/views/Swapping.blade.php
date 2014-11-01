<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8" />
	@include("css")
	<title>bebras_sample1</title>
</head>
<body>
	<header>
		<h1>Bebras Contest Sample</h1>
	</header>
	<section>
		<h2>Question : Swapping</h2>
		<p>ビーバーくんは高価な羽を持っています。</p>
		<p>物々交換をして家がほしい。</p>
		<p>どのように交換すると家が得られるか、交換する順番に右側に移動してください。</p>
		<p>上から順番に交換するとします。</p>
		<div id="sort-range" class="sort-range">
			<ul id="choice" class="choice">
			    <li class="list0"><div class="row1">もらうもの</div><div class="row2">あげるもの</div></li>
			    <li id="list1" class="list"><div class="row1">羽</div><div class="row2">風船</div></li>
			    <li id="list2" class="list"><div class="row1">羽</div><div class="row2">カゴ</div></li>
			    <li id="list3" class="list"><div class="row1">風船</div><div class="row2">ボート</div></li>
			    <li id="list4" class="list"><div class="row1">ボート</div><div class="row2">バイク</div></li>
			    <li id="list5" class="list"><div class="row1">風船</div><div class="row2">自転車</div></li>
			    <li id="list6" class="list"><div class="row1">カゴ</div><div class="row2">ボート</div></li>
			    <li id="list7" class="list"><div class="row1">カゴ</div><div class="row2">犬</div></li>
			    <li id="list8" class="list"><div class="row1">犬</div><div class="row2">風船</div></li>
			    <li id="list9" class="list"><div class="row1">自転車</div><div class="row2">風船</div></li>
			    <li id="list10" class="list"><div class="row1">犬</div><div class="row2">じゅうたん</div></li>
			    <li id="list11" class="list"><div class="row1">じゅうたん</div><div class="row2">バイク</div></li>
			    <li id="list12" class="list"><div class="row1">絵</div><div class="row2">じゅうたん</div></li>
			    <li id="list13" class="list"><div class="row1">自転車</div><div class="row2">バイク</div></li>
			    <li id="list14" class="list"><div class="row1">じゅうたん</div><div class="row2">家</div></li>
			</ul>
			<ul id="answerlist" class="answerlist">
				<li class="list0"><div class="row1">もらうもの</div><div class="row2">あげるもの</div></li>
			</ul>
		</div>
		<div class="clearfix ans">
			<button type="button" onclick="answercheck();">答え合わせ</button>
			<p class="ans-mark"> </p>
		</div>
	</section>
	<footer>
		<p>Copyright© K.Fujisaki, 2014 All Rights Reserved.</p>
	</footer>
	@include("js")
</body>
</html>
