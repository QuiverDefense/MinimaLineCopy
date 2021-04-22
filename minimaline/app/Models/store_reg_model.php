<?php

namespace App\Models;

use CodeIgniter\Model;

class store_reg_model extends Model
{
    protected $table = 'store_info';
    
    protected $allowedFields = ['store_name','manager_name','location'];

    public function getStore($store_name = false)
    {
        if ($store_name === false)
        {
            return $this->findAll();
        }

        return $this->asArray()
                    ->where(['store_name' => $store_name])
                    ->first();
    }
}



/* 
 * File Name: employee_model.php
 */
/*if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Store_reg_model extends CI_Model
{
    function __construct()
    {
        // Call the Model constructor
        parent::__construct();
    }

    //get data to populate the store info
    function insert_data($data){
        $this->db->insert("store_info",$data);
        
    }
}*/
/*?>*/