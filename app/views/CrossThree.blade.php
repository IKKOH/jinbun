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
        <h2>Question : No 3 in a row</h2>
        <p>下に水平な線に区切られた９つのマスがある。</p>
        <p>縦横斜めに３つ連続しないように、６つ印を付けたい。</p>
        <p>マスをクリックすると印を付けることができ、もう一度クリックすると消すことができる。</p>
        <p>正しく印をつけよう。</p>
        <div class="contents" id="contents">
            <ul class="cells">
                <li class="cell" id="cell1"></li>
                <li class="cell" id="cell2"></li>
                <li class="cell" id="cell3"></li>
                <li class="cell" id="cell4"></li>
                <li class="cell" id="cell5"></li>
                <li class="cell" id="cell6"></li>
                <li class="cell" id="cell7"></li>
                <li class="cell" id="cell8"></li>
                <li class="cell" id="cell9"></li>
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
    @include("js")
</body>
</html>
