<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AccessoriesImage extends Model
{
    use HasFactory;
    protected $table = 'accessories_images';
    protected $fillable = ['id','accessoriesid','imagepath','created_at','updated_at'];
}
