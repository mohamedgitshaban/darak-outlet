<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MirrorsImage extends Model
{
    use HasFactory;
    protected $table = 'mirrors_images';
    protected $fillable = ['id','mirrorsid','imagepath','created_at','updated_at'];
}
