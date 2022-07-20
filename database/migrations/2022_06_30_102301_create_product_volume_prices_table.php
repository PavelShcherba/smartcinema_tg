<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_volume_prices', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('product_id');
            $table->unsignedBigInteger('price_id');
            $table->unsignedBigInteger('volume_id')->nullable();
            
            $table->foreign('product_id')->references('id')->on('products');
            $table->foreign('price_id')->references('id')->on('prices');
            $table->foreign('volume_id')->references('id')->on('volumes');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_volume_prices');
    }
};
