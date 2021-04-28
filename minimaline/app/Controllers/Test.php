<?php namespace App\Controllers;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\test_model;


class Test extends ResourceController
{
    use ResponseTrait;

    // all users
    public function index(){
      $model = new test_model();
      $data['test_table'] = $model->orderBy('id', 'DESC')->findAll();
      return $this->respond($data);
    }

    // create
    public function create() {
        $model = new test_model();
        $data = [
            'first' => $this->request->getVar('first'),
            'second'  => $this->request->getVar('second'),
        ];
        $model->insert($data);
        $response = [
          'status'   => 201,
          'error'    => null,
          'messages' => [
              'success' => 'Data created successfully'
          ]
      ];
      return $this->respondCreated($response);
    }

    // single user
    public function getData($id = null){
        $model = new test_model();
        $data = $model->where('id', $id)->first();
        if($data){
            return $this->respond($data);
        }else{
            return $this->failNotFound('No data found');
        }
    }

    // update
    public function update($id = null){
        $model = new test_model();
        $id = $this->request->getVar('id');
        $data = [
            'first' => $this->request->getVar('first'),
            'second'  => $this->request->getVar('second'),
        ];
        $model->update($id, $data);
        $response = [
          'status'   => 200,
          'error'    => null,
          'messages' => [
              'success' => 'data updated successfully'
          ]
      ];
      return $this->respond($response);
    }

    // delete
    public function delete($id = null){
        $model = new test_model();
        $data = $model->where('id', $id)->delete($id);
        if($data){
            $model->delete($id);
            $response = [
                'status'   => 200,
                'error'    => null,
                'messages' => [
                    'success' => 'data successfully deleted'
                ]
            ];
            return $this->respondDeleted($response);
        }else{
            return $this->failNotFound('No data found');
        }
    }

}