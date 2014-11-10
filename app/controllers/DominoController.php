<?php


class DominoController extends BaseController {

    /**
     * @access public
     * @return view
     */
    public function execute()
    {
        // 使用するテンプレート指定
        $view = View::make('Domino');

        // テンプレートで使用する変数をセット
        $view->with("_template", "Domino");

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
        $UserAnswer = Input::get("answer");
        $strDominoCount = Input::get("count");

        // 問題の答えを取得
        $aryAnswerData = ANSWER::getAnswerData('domino');

        // ドミノの隣同士が同値かチェック
        $strPre0 = $UserAnswer[0][0];
        $strPre1 = $UserAnswer[0][1];
        foreach($UserAnswer as $idx => $val) {
            if( $idx == 0) continue;
            if( $idx == $strDominoCount - 1) {
                if( $strPre0 != $val[1]) {
                    return 'false';
                }
            }else if( $strPre1 != $val[0]) {
                return 'false';
            }
            $strPre1 = $val[1];
        }


        // 答え合わせ
        if( $strDominoCount == $aryAnswerData->ANSWER) {
            return 'true';
        } else {
            return 'false';
        }
    }
}
