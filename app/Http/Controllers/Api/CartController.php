<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\CartRequest;
use App\Models\Product;
use App\Http\Resources\Api\Cart\ProductResource;

class CartController extends Controller
{
    public function __invoke(CartRequest $request) {
        
        return ProductResource::collection($request->toArray());
        
    }
}
