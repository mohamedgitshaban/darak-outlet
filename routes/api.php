<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CartController;

use App\Http\Controllers\AccessoriesController;
use App\Http\Controllers\FaucetsController;
use App\Http\Controllers\MirrorsController;
use App\Http\Controllers\SinkController;
use App\Http\Controllers\VanitiesController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::prefix('admin')->group(function () {
    Route::prefix('accessories')->group(function () {
        Route::post('/',[AccessoriesController::class,"store"]);
        Route::get('/',[AccessoriesController::class,"adminshow"]);
        Route::get('/{id}',[AccessoriesController::class,"show"]);
        Route::delete('/{id}',[AccessoriesController::class,"destroy"]);

    
       });
       Route::prefix('Faucets')->group(function () {
        Route::get('/',[FaucetsController::class,"adminshow"]);
        Route::post('/',[FaucetsController::class,"store"]);
        Route::get('/{id}',[FaucetsController::class,"show"]);
        Route::delete('/{id}',[FaucetsController::class,"destroy"]);

    
       });
       Route::prefix('Mirrors')->group(function () {
        Route::get('/',[MirrorsController::class,"adminshow"]);
        Route::post('/',[MirrorsController::class,"store"]);
        Route::get('/{id}',[MirrorsController::class,"show"]);
        Route::delete('/{id}',[MirrorsController::class,"destroy"]);

    
       });
       Route::prefix('sink')->group(function () {
        Route::get('/',[SinkController::class,"adminshow"]);
        Route::post('/',[SinkController::class,"store"]);
        Route::get('/{id}',[SinkController::class,"show"]);
        Route::delete('/{id}',[SinkController::class,"destroy"]);

       });
       Route::prefix('Vanities')->group(function () {
        Route::get('/',[VanitiesController::class,"adminshow"]);
        Route::post('/',[VanitiesController::class,"store"]);
        Route::get('/{id}',[VanitiesController::class,"show"]);
        Route::delete('/{id}',[VanitiesController::class,"destroy"]);
    
    
       });
});
Route::prefix('accessories')->group(function () {
    Route::get('/',[AccessoriesController::class,"index"]);
    Route::get('/{id}',[AccessoriesController::class,"show"]);

   });
   Route::prefix('faucets')->group(function () {
    Route::get('/',[FaucetsController::class,"index"]);
    Route::get('/{id}',[FaucetsController::class,"show"]);

   });
   Route::prefix('Mirrors')->group(function () {
    Route::get('/',[MirrorsController::class,"index"]);
    Route::get('/{id}',[MirrorsController::class,"show"]);

   });
   Route::prefix('sink')->group(function () {
    Route::get('/',[SinkController::class,"index"]);
    Route::get('/{id}',[SinkController::class,"show"]);

   });
   Route::prefix('Vanities')->group(function () {
    Route::get('/',[VanitiesController::class,"index"]);
    Route::get('/{id}',[VanitiesController::class,"show"]);


   });
   Route::prefix('users')->group(function () {
    Route::get('/',[CartController::class,"index"]);
    Route::get('/{id}',[CartController::class,"info"]);
    Route::post('/addtocart',[CartController::class,"addcart"]);
    Route::post('/login',[CartController::class,"login"]);
    Route::post('/signup',[CartController::class,"signup"]);
    Route::delete('/deletecart/{id}',[CartController::class,"destroy"]);
    Route::get('/cart/{id}',[CartController::class,"cart"]);
    Route::get('/price/{id}',[CartController::class,"Price"]);


   });
