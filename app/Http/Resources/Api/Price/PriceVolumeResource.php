<?php

namespace App\Http\Resources\Api\Price;

use Illuminate\Http\Resources\Json\JsonResource;

class PriceVolumeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {        
        return [
            'value'=> $this->value,
        ];
    }
}
