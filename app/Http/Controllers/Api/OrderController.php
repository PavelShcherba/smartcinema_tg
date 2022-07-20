<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;

class OrderController extends Controller {

    public function __invoke(Request $request) {
        $order = Order::create([
            'order_id'=>$request->input('order_id'),
            'total'=>$request->input('total'),
            'city'=>$request->input('city'),
            'hall'=>$request->input('hall'),
            'status'=>'Не оплачено'
        ]);
        $carts = $request->input('cart');
            $order->products()->attach($carts);

    }
    
}
