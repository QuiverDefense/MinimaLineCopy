<?php

namespace App\Controllers;

use App\Models\store_reg_model;
use CodeIgniter\Controller;

class Store_registration extends Controller 
{
	/*public function __construct()
	{
	parent::__construct();
	$this->load->library('session');
	$this->load->database();
	$this->load->helper('url');
	$this->load->helper('form');
	$this->load->model('store_reg_model');
	}*/

	public function index()
	{
		//ask for store info (name, manager name, location, and logo)
		//$this->load->view('Store_registration',@$data);	
		/*if($this->input->post('register'))
		{
		$s=$this->input->post('store');
		$m=$this->input->post('manager');
		$l=$this->input->post('location');			
		$i=$this->input->post('store_logo');
		}
			*/
		$model = new store_reg_model();

		$data = [
			'store_info' => $model->getStore(),
			'store_name' => 'Store Names'
		];

		echo view('templates/header', $data);
		echo view('store/overview', $data);
		echo view('templates/footer', $data);
	}

	public function view($store_name = null)
	{
		$model = new store_reg_model();

		$data['store_info'] = $model->getStore($store_name);

		if (empty($data['store_info']))
    	{
      	  throw new \CodeIgniter\Exceptions\PageNotFoundException('Cannot find the store: '. $store_name);
  		}

    	$data['store_name'] = $data['store_info']['store_name'];

    	echo view('templates/header', $data);
    	echo view('store/view', $data);
    	echo view('templates/footer', $data);
	}

	public function create()
	{
    	$model = new store_reg_model();

    	if ($this->request->getMethod() === 'post' && $this->validate([
            'store_name' => 'required|min_length[3]|max_length[255]',
            'manager_name' => 'required',
			'location'  => 'required',
        	]))
    	{
        $model->save([
            'store_name' => $this->request->getPost('store_name'),
            //'slug'  => url_title($this->request->getPost('title'), '-', TRUE),
            'manager_name'  => $this->request->getPost('manager_name'),
			'location' => $this->request->getPost('location'),
        	]);

        echo view('store/success');

    }
    else
    {
        echo view('templates/header', ['store_name' => 'Register your store']);
        echo view('store/create');
        echo view('templates/footer');
    }
}

	/*public function form_validation(){
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
	}*/
}
/*?>*/