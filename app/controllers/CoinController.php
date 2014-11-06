<?php


class CoinController extends BaseController {

    public function execute()
    {
        return View::make('Coin');
    }

    /**
    * check
    * 答え合わせ
    * @access public
    * @return bool 判定結果(正解：true, 不正解：false)
    */
  public function check()
  {
    //ユーザー入力の答えを取得
    $UserAnswer = Input::get();
       //問題の答を取得
    $aryAnswerData = ANSWER::getAnswerData('coin');

       //答え合わせ
    if( $UserAnswer['answer'] == $aryAnswerData->ANSWER) {
      return 'true';
    } else {
      return 'false';
    }
  }
}
