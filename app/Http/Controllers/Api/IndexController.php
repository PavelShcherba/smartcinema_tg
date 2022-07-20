<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Http\Resources\Api\Product\ProductResource;

class IndexController extends Controller
{
    public function __invoke() {
        $products = Product::all();
        return ProductResource::collection($products);
    }
}
