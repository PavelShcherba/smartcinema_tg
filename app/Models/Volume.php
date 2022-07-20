<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Price;

class Volume extends Model
{
    use HasFactory;
    protected $table = 'volumes';
    protected $guarded = [];
    
    public function prices($product_id){
        return $this->belongsToMany(Price::class, 'product_volume_prices', 'volume_id','price_id')
                ->wherePivot('product_id','=', $product_id);
    }
}
