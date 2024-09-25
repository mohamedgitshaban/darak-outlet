<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AccessoriesController;
use App\Http\Controllers\FaucetsController;
use App\Http\Controllers\MirrorsController;
use App\Http\Controllers\SinkController;
use App\Http\Controllers\VanitiesController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


   Route::prefix('accessories')->group(function () {
    Route::get('/',[AccessoriesController::class,"index"]);
    Route::get('/{id}',[AccessoriesController::class,"show"]);
    Route::get('/installation/{id}',[AccessoriesController::class,"installation"]);
   });
   Route::prefix('faucets')->group(function () {
    Route::get('/',[FaucetsController::class,"index"]);
    Route::get('/{id}',[FaucetsController::class,"show"]);
    Route::get('/installation/{id}',[FaucetsController::class,"installation"]);
   });
   Route::prefix('mirrors')->group(function () {
    Route::get('/',[MirrorsController::class,"index"]);
    Route::get('/{id}',[MirrorsController::class,"show"]);  
    Route::get('/installation/{id}',[MirrorsController::class,"installation"]);
   });
   Route::prefix('sink')->group(function () {
    Route::get('/',[SinkController::class,"index"]);
    Route::get('/{id}',[SinkController::class,"show"]);
    Route::get('/installation/{id}',[SinkController::class,"installation"]);
   });
   Route::prefix('vanities')->group(function () {
    Route::get('/',[VanitiesController::class,"index"]);
    Route::get('/{id}',[VanitiesController::class,"show"]);
    Route::get('/installation/{id}',[VanitiesController::class,"installation"]);
   });
