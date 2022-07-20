<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Volume;
use App\Models\Product;

class Price extends Model
{
    use HasFactory;
    protected $table = 'prices';
    protected $guarded = [];
    
    public function volumes(){
        return $this->belongsToMany(Volume::class, 'price_volumes', 'price_id', 'volume_id');
    }
    public function products(){
        return $this->belongsToMany(Product::class, 'product_prices', 'price_id', 'product_id');
    }
    
}
