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
		$this->load->view('Store_registration',@$data);	
		/*if($this->input->post('register'))
		{
		$s=$this->input->post('store');
		$m=$this->input->post('manager');
		$l=$this->input->post('location');			
		$i=$this->input->post('store_logo');
		}
			*/
	
	}

	public function form_validation(){
		$this->load->library('form_validation');
		$this->form_validation->set_rules("store_name","Store Name",'required|alpha');
		$this->form_validation->set_rules("manager_name","Manager Name",'required|alpha');
		
		if($this->form_validation->run()){
			$this->load->model("Store_reg_model");
			$data = array(
				"store_name"	=>$this->input->post("store_name"),
				"manager_name"	=>$this->input->post("manager_name"),
				"location"		=>$this->input->post("location"),
				"logo"			=>$this->input->post("logo")
			);
			
			$this->Store_reg_model->insert_data($data);
			
		}
		else{
			$this->index();
		}
	}
		
}
?>