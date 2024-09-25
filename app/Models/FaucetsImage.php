<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FaucetsImage extends Model
{
    use HasFactory;
    protected $table = 'faucets_images';
    protected $fillable = ['id','faucetsid','imagepath','created_at','updated_at'];
}
