<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Volume;
use App\Models\Product;

class OrderProductVolume extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'order_product_volumes';
    protected $guarded = [];
    public function product(){
        return $this->hasOne(Product::class, 'id', 'product_id');
    }
    public function volume(){
        return $this->hasOne(Volume::class,'id','volume_id');
    }
}
