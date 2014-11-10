<?php


class CrossThreeController extends BaseController {

    /**
     * @access public
     * @return view
     */
    public function execute()
    {
        // 使用するテンプレート指定
        $view = View::make('CrossThree');

        // テンプレートで使用する変数をセット
        $view->with("_template", "CrossThree");

        return $view;
    }

    /**
     * check
     * 答え合わせ
     * @access public
     * @return bool 判定結果(正解：true, 不正解：false)
     */
    public function check()
    {
        // ユーザー入力の答えを取得
        $UserAnswer = Input::get();

        // 問題の答えを取得(2通りの答えがあるので２つ取得)
        $aryAnswerData_A = ANSWER::getAnswerData('crossthree_a');
        $aryAnswerData_B = ANSWER::getAnswerData('crossthree_b');

        // 答え合わせ
        if( $UserAnswer['answer'] == $aryAnswerData_A->ANSWER) {
            return 'true';
        } else if ( $UserAnswer['answer'] == $aryAnswerData_B->ANSWER) {
            return 'true';
        } else {
            return 'false';
        }
    }
}
