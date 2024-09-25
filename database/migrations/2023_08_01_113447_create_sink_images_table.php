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
        Schema::create('sink_images', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('sinksid');
            $table->foreign('sinksid')->references('id')->on('sinks')->onDelete('cascade');
            $table->Integer('type');
            $table->string('imagepath');

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
        Schema::dropIfExists('sink_images');
    }
};
