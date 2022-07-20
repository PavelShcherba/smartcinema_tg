<?php

namespace App\Http\Resources\Api\Volume;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Api\Price\PriceVolumeResource;

class VolumeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        
        $price = $this->prices($this->pivot->product_id)->get();
        return [
            'id'=> $this->id,
            'value'=>$this->value,
            'product_id'=>$this->pivot->product_id,
            'price' => PriceVolumeResource::collection($price),
        ];
    }
}
