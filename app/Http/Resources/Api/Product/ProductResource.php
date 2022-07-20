<?php

namespace App\Http\Resources\Api\Product;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Api\Price\PriceResource;
use App\Http\Resources\Api\Volume\VolumeResource;

class ProductResource extends JsonResource {

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request) {

        return [
            'id' => $this->id,
            'title' => $this->title,
            'image' => 'img/' . $this->image,
            'prices' => PriceResource::collection($this->prices),
            'volumes' => VolumeResource::collection($this->volumes)
        ];
    }

}
