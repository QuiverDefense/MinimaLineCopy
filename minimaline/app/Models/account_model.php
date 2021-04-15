<?php

namespace App\Models;

use CodeIgniter\Model;

class account_model extends Model
{
    protected $table = 'account_info';
    
    protected $allowedFields = ['username','email','password'];

    public function getAccount($username = false)
    {
        if ($username === false)
        {
            return $this->findAll();
        }

        return $this->asArray()
                    ->where(['username' => $username])
                    ->first();
    }
}