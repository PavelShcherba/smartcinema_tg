<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;

class PaymentController extends Controller {

    public function __invoke(Request $request) {
        $data = $request->input('data');
        $signature = $request->input('signature');
        $private_key = 'sandbox_MGA3ZOvJylMVCxoknQt5fdAOlYzHLuSbC1Ala9Ar';
        $sign = base64_encode(sha1(
                        $private_key .
                        $data .
                        $private_key
                        ,1));
        if ($sign === $signature) {
            $data = base64_decode($data);            
            
            $data = json_decode($data);
            if($data->status === 'success'){
                Order::where('order_id',$data->order_id)->update([
                'status'=>'Оплачено'
            ]);
            return redirect()->route('after_payment');
            }
            else{
                return redirect()->route('index');
            }
        } else {
//            return redirect()->route('index');
        }
    }

}
