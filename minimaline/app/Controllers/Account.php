<?php

namespace App\Controllers;

use App\Models\account_model;
use CodeIgniter\Controller;

class Account extends Controller 
{
	public function index()
	{

		$model = new account_model();

		$data = [
			'account_info' => $model->getAccount(),
			'username' => 'Usernames'
		];

		echo view('templates/header', $data);
		echo view('account/overview', $data);
		echo view('templates/footer', $data);
	}

	public function view($username = null)
	{
		$model = new account_model();

		$data['account_info'] = $model->getAccount($username);

		if (empty($data['account_info']))
    	{
      	  throw new \CodeIgniter\Exceptions\PageNotFoundException('Cannot find the account: '. $username);
  		}

    	$data['username'] = $data['account_info']['username'];

    	echo view('templates/header', $data);
    	echo view('account/view', $data);
    	echo view('templates/footer', $data);
	}

	public function signup()
	{
    	$model = new account_model();

    	if ($this->request->getMethod() === 'post' && $this->validate([
            'username' => [
				'rules' => 'required|min_length[3]|max_length[255]|is_unique[account_info.username]',
				'errors' => ['is_unique' => "The username already in use."]
				],
            'email' => [
				'rules' => 'required|valid_email|is_unique[account_info.email]',
				'errors' => ['is_unique' => "The email address is already in use."]
				],
			'password'  => 'required',
			'pass_confirm' => [
				'label' => 'confirm password',
				'rules' => 'required|matches[password]'
				]
        	]))
    	{
        $model->save([
            'username' => $this->request->getPost('username'),
            //'slug'  => url_title($this->request->getPost('title'), '-', TRUE),
            'email'  => $this->request->getPost('email'),
			'password' => $this->request->getPost('password'),
        	]);

        echo view('account/success');

    	}
    	else
    	{
        echo view('templates/header', ['username' => 'Sign up now']);
        echo view('account/signup');
        echo view('templates/footer');
    	}
	}

}