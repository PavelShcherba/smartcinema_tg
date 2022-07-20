<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Price;
use App\Models\Volume;

class Product extends Model {

    use HasFactory;

    protected $table = 'products';
    protected $guarded = [];

    public function volumes(){
        return $this->belongsToMany(Volume::class, 'product_volumes', 'product_id', 'volume_id');
    }
    public function prices() {
        return $this->belongsToMany(Price::class, 'product_prices', 'product_id','price_id');
    }

}
