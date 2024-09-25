<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sink extends Model
{
    use HasFactory;
    protected $table = 'sinks';
    protected $fillable = [
        'id',
        'name',
        'model',
        'description',
        'OverallLength',
        'OverallWidth',
        'OverallHeight',
        'Type',
        'Features',
        'Size',
        'FaucetHoles',
        'Shape',
        'Style',
        'BasinDepth',
        'BasinWidth',
        'BasinLength',
        'Color',
        'Material',
        'Certifications',
        'price',
        'num of stock',
        'coverimg',
        'sub',
        'active',
        'discount',
        'install',

        'created_at',
        'updated_at'];
}
