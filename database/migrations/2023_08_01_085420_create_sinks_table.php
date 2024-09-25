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
        Schema::create('sinks', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('model');
            $table->string('coverimg');
            $table->string('description');
            $table->Integer('OverallLength');
            $table->Integer('OverallWidth');
            $table->Integer('OverallHeight');
            $table->string('Type');
            $table->string('Features');
            $table->Integer('Size');
            $table->Integer('FaucetHoles');
            $table->string('Shape');
            $table->string('Style');
            $table->Integer('BasinDepth');
            $table->Integer('BasinWidth');
            $table->Integer('BasinLength');
            $table->string('Color');
            $table->string('Material');
            $table->string('Certifications');
            $table->string('install');
            $table->Integer('price');
            $table->Integer('numofstock');
            $table->boolean('active');
            $table->Integer('discount');
            $table->Integer('sub');
           
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
        Schema::dropIfExists('sinks');
    }
};
