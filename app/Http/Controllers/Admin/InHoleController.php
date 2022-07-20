<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;

class InHoleController extends Controller {

    public function __construct() {
        $this->middleware('auth');
    }

    public function __invoke() {
        
        $orders = Order::where(['city'=>auth()->user()->city,
            'status'=>'Оплачено'])->Where('hall','!=','cash')->get();
        dd($orders);
        return view('admin.index',compact('orders'));
    }

}
