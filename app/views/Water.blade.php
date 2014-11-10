<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="//code.jquery.com/ui/1.11.1/themes/smoothness/jquery-ui.css">
    {{HTML::style('css/base.css')}}
    {{HTML::style('css/water.css')}}
    <title>Water</title>
</head>
<body>
    <header>
        <h1>Bebras Contest Sample</h1>
    </header>
    <section>
        <h2>Question : Water</h2>
        <p>ここに２０Lの水があります。</p>
        <p>２０L、１１L、９Lの入れ物があります。</p>
        <p>三つの容器を利用し、１０Lの水を作りなさい。</p>
        <div id="water">
            <table>
                <tr>
                    <td>
                        <p>{{HTML::image('img/water/white.png', '20_liter', array('class' => 'arrow'))}}</p>
                        {{HTML::image('img/water/20_liter.png', '20_liter', array('class' => 'water', 'onClick' => 'check()'))}}
                        <p class="amount">20 L</p>
                    </td>
                    <td>
                        <p>{{HTML::image('img/water/white.png', '11_liter', array('class' => 'arrow'))}}</p>
                        {{HTML::image('img/water/11_liter.png', '11_liter', array('class' => 'water', 'onClick' => 'check()'))}}
                        <p class="amount">0 L</p>
                    </td>
                    <td>
                        <p>{{HTML::image('img/water/white.png', '9_liter', array('class' => 'arrow'))}}</p>
                        {{HTML::image('img/water/9_liter.png', '9_liter', array('class' => 'water', 'onClick' => 'check()'))}}
                        <p class="amount">0 L</p>
                    </td>
                </tr>
            </table>
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
    {{HTML::script('js/water.js')}}
</body>
</html>
