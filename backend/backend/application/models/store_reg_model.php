<?php
/* 
 * File Name: employee_model.php
 */
if ( ! defined('BASEPATH')) exit('No direct script access allowed');

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
}
?>