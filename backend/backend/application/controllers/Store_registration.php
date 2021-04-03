<?php
class Store_registration extends CI_Controller 
{
	public function __construct()
	{
	parent::__construct();
	$this->load->library('session');
	$this->load->database();
	$this->load->helper('url');
	$this->load->helper('form');
	$this->load->model('store_reg_model');
	}

	public function index()
	{
		//ask for store info (name, manager name, location, and logo)
		$data['store_info'] = $this->store_reg_model->get_store_info();
		if($this->input->post('register'))
		{
		$s=$this->input->post('store');
		$m=$this->input->post('manager');
		$l=$this->input->post('location');			
		$i=$this->input->post('store_logo');
		}

	$this->load->view('Store_registration',@$data);	
	}
}
?>