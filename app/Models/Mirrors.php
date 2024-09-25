<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mirrors extends Model
{
    use HasFactory;
    protected $table = 'mirrors';
    protected $fillable = ['id',
    'name',
    'model',
    'description',
    'Type',
    'ExtensionLength',
    'Width',
    'Height',
    'Color',
    'Specification',
    'Magnification',
    'Style',
    'Features',
    'MirrorOrientation',
    'Material',
    'Shape',
    'MirrorLightType',
    'price',
    'num of stock',
    'coverimg',
        'sub',
        'install',

    'active',
    'discount',
    
    'created_at',
    'updated_at'];
}
