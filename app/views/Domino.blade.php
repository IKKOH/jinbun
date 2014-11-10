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
        <h2>Question : Domino</h2>
        <p>いくつかのドミノと円がある。</p>
        <p>ドミノはそれぞれ２つの値を持っている。</p>
        <p>ドミノを円にドラッグし、隣合う値が同じようになるように、ドミノを円に並べたい。</p>
        <p>ドミノをできるだけ多く並べよう。</p>
        <p>※ドミノはクリックすると反転します。</p>
        <div class="drag-range" id="drag-range">
            <ul class="dominocase" id="dominocase">
                <li class="domino">{{HTML::image('img/domino/1-3.png', '1-3', array('id' => 'domino1'))}}</li>
                <li class="domino">{{HTML::image('img/domino/1-4.png', '1-4', array('id' => 'domino2'))}}</li>
                <li class="domino">{{HTML::image('img/domino/1-5.png', '1-5', array('id' => 'domino3'))}}</li>
                <li class="domino">{{HTML::image('img/domino/2-3.png', '2-3', array('id' => 'domino4'))}}</li>
                <li class="domino">{{HTML::image('img/domino/2-5.png', '2-5', array('id' => 'domino5'))}}</li>
                <li class="domino">{{HTML::image('img/domino/3-4.png', '3-4', array('id' => 'domino6'))}}</li>
                <li class="domino">{{HTML::image('img/domino/3-5.png', '3-5', array('id' => 'domino7'))}}</li>
                <li class="domino">{{HTML::image('img/domino/4-5.png', '4-5', array('id' => 'domino8'))}}</li>
            </ul>
            <ul class="answercircle" id="answercircle">
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
