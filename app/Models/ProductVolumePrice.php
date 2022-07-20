<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Price;

class ProductVolumePrice extends Model
{
    use HasFactory;
    protected $table = 'product_volume_prices';
    protected $guarded = [];
    
    public function prices(){
            return $this->hasMany(Price::class,'id','price_id');

    }
    
}
