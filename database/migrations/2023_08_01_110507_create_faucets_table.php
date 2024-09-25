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
        Schema::create('faucets', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('model');
            $table->string('coverimg');
            $table->string('description');
            $table->string('Type');
            $table->string('Finish');
            $table->Integer('FaucetHoles');
            $table->Integer('Handles');
            $table->string('HandleStyle');
            $table->Integer('SpoutReach');
            $table->Integer('SpoutHeight');
            $table->Integer('OverallHeight');
            $table->string('Style');
            $table->string('Certifications');
            $table->Integer('num of stock');
            $table->boolean('active');
            $table->Integer('discount');
            $table->string('install');

            $table->Integer('price');
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
        Schema::dropIfExists('faucets');
    }
};
