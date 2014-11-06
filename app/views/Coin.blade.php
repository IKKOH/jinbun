<!DOCTYPE HTML>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="//code.jquery.com/ui/1.11.1/themes/smoothness/jquery-ui.css">
  {{HTML::style('css/base.css')}}
  {{HTML::style('css/coin.css')}}
  <title>5 Coins</title>
</head>
<body>
  <header>
    <h1>Bebras Contest Sample</h1>
  </header>
  <section>
    <h2>Question : 5 coins</h2>
    <p>ここに５枚のコインがあります。</p>
    <p>このコインをすべて表にしたいのですが、コインは一度に必ず三枚裏返さないといけません。</p>
    <p>最も少ない手ですべて表にする場合、何手必要でしょうか？</p>
    {{HTML::image('img/coin/head.png', '1', array('class' => 'coin', 'onClick' => 'check()', 'style' => 'border: thick solid transparent'))}}
    {{HTML::image('img/coin/tail.png', '0', array('class' => 'coin', 'onClick' => 'check()', 'style' => 'border: thick solid transparent'))}}
    {{HTML::image('img/coin/tail.png', '0', array('class' => 'coin', 'onClick' => 'check()', 'style' => 'border: thick solid transparent'))}}
    {{HTML::image('img/coin/tail.png', '0', array('class' => 'coin', 'onClick' => 'check()', 'style' => 'border: thick solid transparent'))}}
    {{HTML::image('img/coin/tail.png', '0', array('class' => 'coin', 'onClick' => 'check()', 'style' => 'border: thick solid transparent'))}}
    <div class="counter">
      <!-- ここに現在の数を出す -->
    </div>
    <div class="ans">
      <button type="button" onClick="reverse()">裏返す</button>
      <button type="button" onClick="reset()">リセット</button>
      <div class="teacher">
        <!-- ここに答え判定を出す -->
      </div>
    </div>
  </section>
  <footer>
  </footer>
  <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
  <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.0/jquery-ui.min.js"></script>
  {{HTML::script('js/coin.js')}}
</body>
</html>
