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
        Schema::create('accessories_images', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('accessoriesid');
            $table->foreign('accessoriesid')->references('id')->on('accessories')->onDelete('cascade');
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
        Schema::dropIfExists('accessories_images');
    }
};
