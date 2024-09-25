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
        Schema::create('vanities_images', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('vanitiesid');
            $table->foreign('vanitiesid')->references('id')->on('vanities')->onDelete('cascade');
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
        Schema::dropIfExists('vanities_images');
    }
};
