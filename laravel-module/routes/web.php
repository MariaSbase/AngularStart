<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/auth', [UserController::class, 'store'])->name('new.user.page');
//Route::get('/auth', function () {
//    //Perform a check whether the user is authenticated or not
//    //Remove the if block during production
//    if(!Auth::check())
//    {
//        //If they are not, we forcefully login the user with id=1
//        $user = App\User::find(1);
//        Auth::login($user);
//    }
//    return Auth::user();
//});
