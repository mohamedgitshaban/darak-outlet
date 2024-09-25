<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SinkImage extends Model
{
    use HasFactory;
    protected $table = 'sink_images';
    protected $fillable = ['id','sinksid','imagepath','created_at','updated_at'];
}
