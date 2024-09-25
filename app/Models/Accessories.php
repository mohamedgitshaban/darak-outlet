<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Accessories extends Model
{
    use HasFactory;
    protected $table = 'accessories';
    protected $fillable = [
        'id',
        'name',
        'model',
        'description',
        'Type',
        'Color',
        'Style',
        'Material',
        'Shape',
        'price',
        'numofstock',
        'coverimg',
        'install',
        'sub',
    'active',
    'discount',
    'created_at',
    'updated_at'];
}
