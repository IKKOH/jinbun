<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8" />
    @include("css")
    <title>bebras_sample2</title>
</head>
<body>
    <header>
        <h1>Bebras Contest Sample</h1>
    </header>
    <section>
        <h2>Question : Beehive</h2>
        <p>蜂を幼虫の場所に移動したい。</p>
        <p>蜂は１マスずつ進むことができる。</p>
        <p>マスには壁がついていて、壁の方向には進むことができない。</p>
        <p>矢印を使って、蜂を幼虫の場所に移動させよう。</p>
        <div class="drag-range">
            <div class="map">
                {{HTML::image('img/beehive/map.png', 'map', array('class' => 'mapimg'))}}
            </div>
            <ul id="arrow-answer">
                <div class="arrow">
                    <div class="line1">
                        <li class="box1">{{HTML::image('img/beehive/e.png', 'ArrowEast', array('id' => 'arrow1'))}}</li>
                        <li class="box2">{{HTML::image('img/beehive/e.png', 'ArrowEast', array('id' => 'arrow2'))}}</li>
                    </div>
                    <div class="line2">
                        <li class="box3">{{HTML::image('img/beehive/se.png', 'ArrowSouthEast', array('id' => 'arrow3'))}}</li>
                        <li class="box4">{{HTML::image('img/beehive/se.png', 'ArrowSouthEast', array('id' => 'arrow4'))}}</li>
                    </div>
                    <div class="line3">
                        <li class="box5">{{HTML::image('img/beehive/sw.png', 'ArrowSouthWest', array('id' => 'arrow5'))}}</li>
                        <li class="box6">{{HTML::image('img/beehive/sw.png', 'ArrowSouthWest', array('id' => 'arrow6'))}}</li>
                    </div>
                    <div class="line4">
                        <li class="box7">{{HTML::image('img/beehive/w.png', 'ArrowWest', array('id' => 'arrow7'))}}</li>
                        <li class="box8">{{HTML::image('img/beehive/nw.png', 'ArrowNouthWest', array('id' => 'arrow8'))}}</li>
                    </div>
                    <div class="line5">
                        <li class="box9">{{HTML::image('img/beehive/ne.png', 'ArrowNouthEast', array('id' => 'arrow9'))}}</li>
                        <li class="box10">{{HTML::image('img/beehive/ne.png', 'ArrowNouthEast', array('id' => 'arrow10'))}}</li>
                    </div>
                </div>
                <div class="clearfix answer">
                    <li id="ans1">答え１</li>
                    <li id="ans2">答え２</li>
                    <li id="ans3">答え３</li>
                    <li class="fix">{{HTML::image('img/beehive/se.png', 'ArrowSouthEast')}}</li>
                    <li id="ans4">答え４</li>
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
    @include("js")
</body>
</html>
