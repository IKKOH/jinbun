{{-- 共通css --}}
    <link rel="stylesheet" href="//code.jquery.com/ui/1.11.1/themes/smoothness/jquery-ui.css">
    {{HTML::style('css/base.css')}}
{{-- 各テンプレート毎のcss --}}
@if ($_template == "Beehive")
    {{HTML::style('css/beehive.css')}}
@elseif ($_template == "By_Weight")
    {{HTML::style('css/by_weight.css')}}
@elseif ($_template == "Swapping")
    {{HTML::style('css/swapping.css')}}
@elseif ($_template == "CrossThree")
    {{HTML::style('css/crossthree.css')}}
@endif
