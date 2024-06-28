<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class BranchCode extends Model
{
    use HasFactory, HasApiTokens;

    protected $guarded = [];

    public function users()
    {
        return $this->hasMany(User::class);
    }
    public function computerUsers()
    {
        return $this->hasMany(ComputerUser::class);
    }
}
