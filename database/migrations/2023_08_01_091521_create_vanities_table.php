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
        Schema::create('vanities', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('model');
            $table->string('coverimg');
            $table->string('description');
            $table->string('Type');
            $table->Integer('OverallWidth');
            $table->string('Finish');
            $table->string('Sinks');
            $table->string('SinkType');
            $table->string('Features');
            $table->Integer('OverallDepth');
            $table->string('Shape');
            $table->string('Size');
            $table->Integer('OverallHeight');
            $table->string('MirrorType');
            $table->string('Style');
            $table->string('TopMaterial');
            $table->string('TopFinish');
            $table->Integer('Doors');
            $table->Integer('Drawers');
            $table->string('VanityMaterial');
            $table->string('SinkMaterial');
            $table->string('SinkFinish');
            $table->Integer('price');
            $table->string('install');

            $table->Integer('num of stock');
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
        Schema::dropIfExists('vanities');
    }
};
