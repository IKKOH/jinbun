<?php

class Answer extends Eloquent  {

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'ANSWER';

    /**
     * 答えを出力
     * @access public
     * @param string $strQuestionName
     * @return object $aryAnswer
     */
    public static function getAnswerData($strQuestionName) {
        $aryAnswer = DB::table('ANSWER')->select('ANSWER')->where('NAME', '=', $strQuestionName)->first();
        return $aryAnswer;
    }

}
