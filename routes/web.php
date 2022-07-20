<?php

use Illuminate\Support\Facades\Route;

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
Auth::routes([
    'login'    => true, 
    'logout'   => true, 
    'register' => false, 
    'reset'    => false,   // for resetting passwords
    'confirm'  => false,  // for additional password confirmations
    'verify'   => false,  // for email verification
]);
Route::group(['namespace' => 'App\Http\Controllers\User'], function(){
Route::get('/after_payment', IndexController::class)->name('after_payment');
Route::get('/accept_page', LastController::class)->name('accept_page');
});
Route::group(['namespace' => 'App\Http\Controllers\Admin','prefix'=>'admin','middleware'=>'auth'], function(){
   Route::get('/',  IndexController::class)->name('admin');
   Route::get('/hole',  InHoleController::class)->name('hole');
});
Route::get('/', function () {
return view('welcome');
})->name('index');
Route::get('/cart', function () {
return view('welcome');
});


