<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::table('products', function (Blueprint $table) {
            $table->dropForeign('products_price_id_foreign');
            $table->dropColumn('price_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::table('products', function (Blueprint $table) {
            $table->unsignedBigInteger('price_id')->index()->nullable()->after('image');
            $table->foreign('price_id')->references('id')->on('prices');
        });
    }
};