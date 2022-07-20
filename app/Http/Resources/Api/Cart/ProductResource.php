<?php

namespace App\Http\Resources\Api\Cart;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Product;
use App\Models\Volume;
use App\Models\ProductVolumePrice;
use App\Models\Price;

class ProductResource extends JsonResource {

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request) {
        $product = Product::find($this['product_id']);
        if ($this['volume_id'] !== null) {
            $volume = Volume::find($this['volume_id']);
        } else {
            $volume = null;
        }
        $price_id= ProductVolumePrice::where(['product_id'=>$this['product_id'],
            'volume_id'=>$this['volume_id']])->get('price_id');
        $price=Price::find($price_id[0]->price_id);
        return [
        'product_id' => $product->id,
        'volume_id'=>$volume?$volume->id: null,
        'title'=>$product->title,
        'image' => 'img/' . $product->image,
        'volume' => $volume?$volume->value: null,
        'price' =>$price->value,
        'qty' => $this['qty']
        ];
    }

}
