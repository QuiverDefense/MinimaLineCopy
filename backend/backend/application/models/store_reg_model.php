<?php
/* 
 * File Name: employee_model.php
 */
if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class store_reg_model extends CI_Model
{
    function __construct()
    {
        // Call the Model constructor
        parent::__construct();
    }

    //get department table to populate the department name dropdown
    function get_store_info()     
    { 
        $this->db->select('store_name');
        $this->db->select('manager_name');
        $this->db->select('location');
        $this->db->select('logo');
        $this->db->from('store_info');
        $query = $this->db->get();
        $result = $query->result();

        //array to store department id & department name
        $id = array('-SELECT-');

        for ($i = 0; $i < count($result); $i++)
        {
            array_push($id, $result[$i]->department_id);
        }
        return $result = array_combine($id);
    }
}
?>