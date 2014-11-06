<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="//code.jquery.com/ui/1.11.1/themes/smoothness/jquery-ui.css">
    {{HTML::style('css/base.css')}}
    {{HTML::style('css/anagram.css')}}
    <title>Anagram</title>
</head>
<body>
    <header>
        <h1>Bebras Contest Sample</h1>
    </header>
    <section>
        <h2>Question : Anagram</h2>
        <p>手紙の文字がバラバラにしてしまった。</p>
        <p>文字は一番左の文字のみと交換出来る。</p>
        <p>最も少ない手でBebrasという文字列を作る時、何手で作る事が出来るか。</p>
        <div class="list">
            <ul>
                <li id="change">E</li>
                <li onClick="swapNode()" class="other">B</li>
                <li onClick="swapNode()" class="other">S</li>
                <li onClick="swapNode()" class="other">R</li>
                <li onClick="swapNode()" class="other">B</li>
                <li onClick="swapNode()" class="other">A</li>
            </ul>
        </div>
        <div class="counter">
            <!-- ここに現在の数を出す -->
        </div>
        <div class="ans">
            <button type="button" onClick="answerCheck()">送信</button>
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
    {{HTML::script('js/anagram.js')}}
</body>
</html>
