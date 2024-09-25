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
        Schema::create('accessories', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('model');
            $table->string('coverimg');
            $table->string('description'); 
            $table->string('Type');
            $table->string('Color');
            $table->string('Style');
            $table->string('Material');
            $table->string('Shape');
            $table->Integer('price');
            $table->Integer('num of stock');
            $table->boolean('active');
            $table->Integer('sub');
            $table->string('install');

            $table->Integer('discount');
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
        Schema::dropIfExists('accessories');
    }
};
