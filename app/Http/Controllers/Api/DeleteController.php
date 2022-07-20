<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\OrderProductVolume;

class DeleteController extends Controller
{
    public function __invoke($order_id) {
        $order = Order::where('order_id',$order_id)->get('id');       
        OrderProductVolume::where('order_id',$order[0]->id)->delete();
        Order::where('order_id',$order_id)->delete();
        
    }
}
