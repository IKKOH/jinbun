<!doctype html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    {{HTML::style('css/base.css')}}
    <title>Laravel PHP Framework</title>
</head>
<body>
    <header>
        <h1>テストページ</h1>
    </header>
    <section>
        <h2>問題一覧</h2>
        <ul>
            <li>{{HTML::link('Swapping', 'Swapping')}}</li>
            <li>{{HTML::link('Beehive', 'Beehive')}}</li>
            <li>{{HTML::link('By_Weight', 'By_Weight')}}</li>
            <li>{{HTML::link('CrossThree', 'No 3 in a row')}}</li>
            <li>{{HTML::link('Domino', 'Domino')}}</li>
        </ul>
    </section>
    <footer>
        <p>Copyright© K.Fujisaki, 2014 All Rights Reserved.</p>
    </footer>
</body>
</html>
