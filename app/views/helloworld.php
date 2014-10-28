<!doctype html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>Laravel PHP Framework</title>
</head>
<body>
    <div class="welcome">
        <h1>Hello world</h1>
        <?php echo link_to_route('TestController@test', 'Testリンク', array())?>
    </div>
</body>
</html>
