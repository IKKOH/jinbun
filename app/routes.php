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
Route::get('/Anagram', 'AnagramController@execute');
Route::get('/Anagram/check', 'AnagramController@check');
Route::get('/Coin', 'CoinController@execute');
Route::get('/Coin/check', 'CoinController@check');
Route::get('/Water', 'WaterController@execute');
Route::get('/Water/check', 'WaterController@check');
Route::get('/CrossThree', 'CrossThreeController@execute');
Route::get('/CrossThree/check', 'CrossThreeController@check');
