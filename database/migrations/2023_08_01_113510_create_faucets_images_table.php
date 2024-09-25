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
        Schema::create('faucets_images', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('faucetsid');
            $table->foreign('faucetsid')->references('id')->on('faucets')->onDelete('cascade');
            $table->string('imagepath');
            $table->Integer('type');
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
        Schema::dropIfExists('faucets_images');
    }
};
