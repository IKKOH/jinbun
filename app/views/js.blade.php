{{-- 共通js --}}
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.0/jquery-ui.min.js"></script>
{{-- 各テンプレート毎のjs --}}
@if ($_template == "Beehive")
    {{HTML::script('js/beehive.js')}}
@elseif ($_template == "By_Weight")
    {{HTML::script('js/by_weight.js')}}
@elseif ($_template == "Swapping")
    {{HTML::script('js/swapping.js')}}
@elseif ($_template == "CrossThree")
    {{HTML::script('js/crossthree.js')}}
@elseif ($_template == "ConnectingLetter")
	{{HTML::script('js/connectingletter.js')}}
@endif