<?php

namespace App\Models;

use CodeIgniter\Model;

class test_model extends Model
{
    protected $table = 'test_table';
    protected $primarykey = 'id';
    protected $allowedFields = ['first','second','third'];

    public function getAccount($first = false)
    {
        if ($first === false)
        {
            return $this->findAll();
        }

        return $this->asArray()
                    ->where(['first' => $first])
                    ->first();
    }
}