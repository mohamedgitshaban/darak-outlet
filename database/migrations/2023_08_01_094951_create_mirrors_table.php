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
        Schema::create('mirrors', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('model');
            $table->string('coverimg');

            $table->string('description');
            $table->string('Type');
            $table->Integer('ExtensionLength');
            $table->Integer('Width');
            $table->Integer('Height');
            $table->string('Color');
            $table->string('Specification');
            $table->Integer('Magnification');
            $table->string('Style');
            $table->string('Features');
            $table->string('MirrorOrientation');
            $table->string('Material');
            $table->string('Shape');
            $table->Integer('MirrorLightType');
            $table->Integer('price');
            $table->Integer('num of stock');
            $table->boolean('active');
            $table->Integer('discount');
            $table->string('install');

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
        Schema::dropIfExists('mirrors');
    }
};
