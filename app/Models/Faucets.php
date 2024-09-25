<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Faucets extends Model
{
    use HasFactory;
    protected $table = 'faucets';
    protected $fillable = ['id',
    'name',
    'model',
    'description',
    'Type',
    'Finish',
    'FaucetHoles',
    'Handles',
    'HandleStyle',
    'SpoutReach',
    'SpoutHeight',
    'OverallHeight',
    'Style',
    'Certifications',
    'num of stock',
    'coverimg',
        'sub',
        'install',
    'Color',
    'active',
    'discount',
    'price',
    'created_at',
    'updated_at'];
}
