<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Http\Resources\Product\ProductResource;

class IndexController extends Controller
{
    public function __invoke() {
        $products = Product::all();
        return view('index', compact('products'));
    }
}
