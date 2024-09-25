<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VanitiesImage extends Model
{
    use HasFactory;
    protected $table = 'vanities_images';
    protected $fillable = ['id','vanitiesid','imagepath','created_at','updated_at'];
}
