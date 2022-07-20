<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;
use App\Models\OrderProductVolume;
use Illuminate\Database\Eloquent\SoftDeletes;

class Order extends Model
{
    use HasFactory;
    use SoftDeletes;
    
    protected $table = 'orders';
    protected $guarded = [];
    
    public function products(){
        return $this->belongsToMany(Product::class, 'order_product_volumes','order_id','product_id');
    }
    public function product_volumes(){
        return $this->hasMany(OrderProductVolume::class);
    }
}
