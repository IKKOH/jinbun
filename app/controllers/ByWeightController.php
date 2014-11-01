<?php


class ByWeightController extends BaseController {
    // 各丸太の重さ
    private $aryLogsWeight = array("log1" => 3,
                                   "log2" => 5,
                                   "log3" => 2,
                                   "log4" => 1,
                                   "log5" => 4);

    /**
     * @access public
     * @return view
     */
    public function execute()
    {
        // 使用するテンプレート指定
        $view = View::make('By_Weight');

        // テンプレートで使用する変数セット
        $view->with("_template", "By_Weight");

        return $view;
    }

    /**
     * compare
     * 天秤に載せた時の重さ比較
     * @access public
     * @return string 判定結果(左が重い場合：left, 右が重い場合：right, なにも置かれていない時: eq)
     */
    public function compare()
    {
        // 天秤に載せた丸太の重さ取得
        $aryLogId = Input::get();

        // 重さ比較
        if( !empty($aryLogId['left']) && !empty($aryLogId['right'])) {
            $strLeftLog = $this->aryLogsWeight[$aryLogId['left']];
            $strRightLog = $this->aryLogsWeight[$aryLogId['right']];
            if( $strLeftLog > $strRightLog) {
                return 'left';
            } else {
                return 'right';
            }
        } else if( !empty($aryLogId['left']) && empty($aryLogId['right'])) {
            return 'left';
        } else if( empty($aryLogId['left']) && !empty($aryLogId['right'])) {
            return 'right';
        }
        return 'eq';
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
        $aryAnswerData = ANSWER::getAnswerData('by_weight');
        // 答え合わせ
        if( $UserAnswer['answer'] == $aryAnswerData->ANSWER) {
            return 'true';
        } else {
            return 'false';
        }
    }
}
