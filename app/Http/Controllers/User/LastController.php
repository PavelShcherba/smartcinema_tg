<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LastController extends Controller {


    public function __invoke(Request $request) {
//        
        return view('user.page4');
    }

}
