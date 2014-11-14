<!DOCTYPE html>
<html lang = "ja">
<head>
	<meta charset="utf-8">
	@include("css")
	<title>Connecting Letters</title>
</head>
<body>
	<p>同じ文字のかいてある丸と四角を出来るだけ多くの線で結びましょう。丸をクリックしたまま動かすと線が引けます。</p>
	<p>線を引くには以下のルールを守ってください:</p>
	<ul>
		<li>同じ円から線を複数本引いてはいけません。</li>
		<li>同じ四角に線を複数本引いてはいけません。</li>
		<li>線同士を交差させてはいけません。</li>
	</ul>
	<div id="check">
	</div>
	<button onmousedown="check()">答え</button>
	@include("js")
</body>
</html>