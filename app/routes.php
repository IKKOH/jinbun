<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', 'TestController@execute');
Route::get('/Swapping', 'SwappingController@execute');
Route::get('/Swapping/check', 'SwappingController@check');
Route::get('/Beehive', 'BeehiveController@execute');
Route::get('/Beehive/check', 'BeehiveController@check');
Route::get('/By_Weight', 'ByWeightController@execute');
Route::get('/By_Weight/check', 'ByWeightController@check');
Route::get('/By_Weight/compare', 'ByWeightController@compare');
Route::get('/CrossThree', 'CrossThreeController@execute');
Route::get('/CrossThree/check', 'CrossThreeController@check');
Route::get('/Domino', 'DominoController@execute');
Route::get('/Domino/check', 'DominoController@check');