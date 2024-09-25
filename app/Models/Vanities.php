<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vanities extends Model
{
    use HasFactory;
    protected $table = 'vanities';
    protected $fillable = ['id',
    'name',
    'model',
    'description',
    'Type',
    'OverallWidth',
    'Finish',
    'Sinks',
    'SinkType',
    'Features',
    'OverallDepth',
    'Shape',
    'Size',
    'OverallHeight',
    'MirrorType',
    'Style',
    'TopMaterial',
    'TopFinish',
    'Doors',
    'Drawers',
    'VanityMaterial',
    'SinkMaterial',
    'SinkFinish',
    'price',
    'num of stock',
    'coverimg',
        'sub',
        'install',

    'active',
    'discount',
    'created_at','updated_at'];
}
