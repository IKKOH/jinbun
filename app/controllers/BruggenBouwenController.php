<?php
class BruggenBouwenController extends BaseController {
    /**
     * @access public
     * @return view
     */
    public function execute()
    {
        // 使用するテンプレート指定
        $view = View::make('BruggenBouwen');
        // テンプレートで使用する変数セット
        $view->with("_template", "BruggenBouwen");
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
        // 問題の答えを取得
        $aryAnswerData = ANSWER::getAnswerData('bruggen_bouwen');
        // 答え合わせ
        if( $UserAnswer['answer'] == $aryAnswerData->ANSWER) {
            return 'true';
        } else {
            return 'false';
        }
    }
}