import React, { Component } from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import Categ from "./Categ";
import ProdDesc from "./ProdDesc";
import { TiDeleteOutline } from "react-icons/ti";
import { IoIosAddCircleOutline } from "react-icons/io";
import Modal from 'react-modal';
import Axios from "axios";

class EditMenu extends Component {
    constructor(){
        super();
        this.state = {
            prods: [],
            all_categs: [],
            clicked: false,
            current: null,
            new_categ: '',
            prod_name: '',
            prod_price: '',
            prod_availability: true,
            prod_img: '',
            openDeleteModal: false,
            openAddCateg: false,
            openAddProd: false,
            this_prod: null
        }
        this.changeColor = this.changeColor.bind(this);
        this.deleteModal = this.deleteModal.bind(this);
        this.addCateg = this.addCateg.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.deleteProd = this.deleteProd.bind(this);
    }
    async componentDidMount(){
        document.title = "MinimaLine | Edit Menu";
        let products = await Axios.get('http://localhost:3005/menu-info');
        this.setState({
            prods: products.data
        })
        let categs = await Axios.get('http://localhost:3005/display-category');
        this.setState({
            all_categs: categs.data
        }) 
    }
    changeColor(index){
        if(this.state.current !== index)
            this.setState({
                current: index,
                clicked: true
            })
    }
    deleteModal(id){
        this.setState({
            this_prod: id,
            openDeleteModal: !this.state.openDeleteModal
        })
    }
    addCateg(){
        this.setState({openAddCateg: !this.state.openAddCateg})
    }
    addProduct(){
        this.setState({openAddProd: !this.state.openAddProd})
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleUpload(e){
        this.setState({
            prod_img: e.target.files[0]
        })
    }
    addNewCateg = e =>{
        const data = {
            category: this.state.new_categ
        };
        e.preventDefault();
        //console.log(data);
        Axios.post("http://localhost:3005/add-categ", data).then((response) => {
            console.log(response)
            this.addCateg()
        })
    }
    addNewProd = e =>{
        e.preventDefault();
        console.log(this.state.prod_name,
                    this.state.prod_price,
                    this.state.prod_availability,
                    this.state.prod_img)
    }
    deleteProd(){
        Axios.delete(`http://localhost:3005/delete-product/${this.state.this_prod}`).then((response) => {
            console.log(response)
            this.deleteModal()
        })
    }

    render() {
        var modalStyle={overlay: {zIndex: 2}}

        return ( 
            <Container>
                {this.state.openDeleteModal ?
                    <ModalContainer>
                        <CategModal isOpen={true} style={modalStyle}>
                            <h2>Are you sure you want to remove this product from the menu?</h2>
                            <div className="buttons">
                                <button className="delete" onClick={this.deleteProd}>Delete</button>
                                <button onClick={this.deleteModal}>Cancel</button>
                            </div>
                        </CategModal>
                    </ModalContainer>
                : null}

                {this.state.openAddCateg ?
                    <ModalContainer>
                        <CategModal isOpen={true} style={modalStyle}>
                            <h2>Add New Menu Category</h2>
                            <form onSubmit={this.addNewCateg}>
                                <input
                                    type="text"
                                    placeholder="Category Name"
                                    name="new_categ"
                                    value={this.state.new_categ}
                                    required
                                    autoComplete="off"
                                    onChange={this.handleChange.bind(this)}/>
                                <div className="buttons">
                                    <button className="save">Save Changes</button>
                                    <button onClick={this.addCateg}>Cancel</button>
                                </div>
                            </form>
                        </CategModal>
                    </ModalContainer>
                : null}

                {this.state.openAddProd?
                    <ModalContainer>
                        <ProdModal className="add-prod" isOpen={true} style={modalStyle}>
                            <h2>Add New Product</h2>
                            <form onSubmit={this.addNewProd}>
                                <input
                                    type="text"
                                    placeholder="Product Name"
                                    name="prod_name"
                                    value={this.state.prod_name}
                                    required
                                    autoComplete="off"
                                    onChange={this.handleChange.bind(this)}/>
                                <input
                                    type="text"
                                    placeholder="Price"
                                    name="prod_price"
                                    value={this.state.prod_price}
                                    required
                                    autoComplete="off"
                                    onChange={this.handleChange.bind(this)}/>
                                <select>
                                    <option selected value={this.state.prod_availability}>Available</option> 
                                    <option value={!this.state.prod_availability}>Not Available</option>
                                </select>
                                <select>
                                    {this.state.all_categs.map((categ,index)=>{
                                        return (
                                            <option>{categ["name"]}</option>
                                        )
                                    })}
                                </select>
                                <input
                                    type="file"
                                    placeholder="Product Image"
                                    name="prod_img"
                                    value={this.state.prod_img}
                                    required
                                    autoComplete="off"
                                    onChange={this.handleChange.bind(this)}/>
                                <div className="buttons">
                                    <button className="save">Save Changes</button>
                                    <button onClick={this.addProduct}>Cancel</button>
                                </div>
                            </form>
                        </ProdModal>
                    </ModalContainer>
                : null}

                <Wrapper>
                    <Arrow>
                        <ArrowWrapper>
                            <Link to="/dashboard">
                                <BiArrowBack size="40px" color="#676666"/>
                            </Link>
                        </ArrowWrapper>
                    </Arrow>
                    <Nav>
                        <Categ mode={"edit"}/>
                        <AddCategButton size="50px" onClick={this.addCateg}/>
                    </Nav>
                    <EditButton>
                        <Link to="/view-menu">
                            <button>Save</button>
                        </Link>
                    </EditButton>
                    {!this.state.prods.length ? 
                        <div className="empty-grid">
                            <AddButton size="100px" onClick={this.addProduct}/> 
                        </div> :
                        <ProdGrid>
                                <section className='productlist'> 
                                        {this.state.prods.map((prod,index)=>{
                                                return (
                                                    <div
                                                    onClick={()=>this.changeColor(index)}
                                                    className={(this.state.clicked && (this.state.current===index)) ? 'clicked' : 'unclicked'}>
                                                            <DeleteButton size="50px" onClick={()=>this.deleteModal(prod["id"])}/>
                                                            <article>
                                                                <h3><img className='image' src={prod["photo"]} alt={prod["product"]}/></h3>
                                                                <h1>{prod["product"]}</h1>
                                                                <h2>P{prod["price"]}</h2>
                                                                <h2>{prod["availability"]===1 ? "Available" : "Not Available"}</h2>
                                                            </article> 
                                                    </div>
                                                )
                                            })}
                                    {this.state.clicked ? <ProdDesc {...this.state.prods[this.state.current]} mode={"edit"}/> : null }
                                    <AddButton size="100px" onClick={this.addProduct}/>
                                </section>
                        </ProdGrid>
                    }
                </Wrapper>
            </Container>
         );
    }
}

const ModalContainer = styled.div`
  position: relative;
`;
const ProdModal = styled(Modal)`
  outline: none;
  background-color: white;
  box-shadow: 3px 6px 5px 3px #d6d6d6;
  border-radius: 8px;
  height: 500px;
  width: 400px;
  margin-top: -250px;
  margin-left: -200px;
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2{
      text-align: center;
      padding: 35px 50px 0px;
  }
  
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  input{
    width: 80%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    color: black;
    margin: 7px 0px 10px;
    background-color: #f5f5f5;
    box-shadow: 0px 14px 9px -15px rbga(0,0,0,0.25);
    border-radius: 8px;
    padding: 0 1rem;
    transition: all 0.2s ease-in;
  }
    
  select{
    width: 89%;
    max-width: 400px;
    min-width: 250px;
    height: 40px;
    border: none;
    color: black;
    margin: 7px 0px 10px;
    background-color: #f5f5f5;
    box-shadow: 0px 14px 9px -15px rbga(0,0,0,0.25);
    border-radius: 8px;
    padding: 0 1rem;
    transition: all 0.2s ease-in;
  }

  .buttons{
    flex-direction: row;
    
    button{
        font-family: "Work Sans";
        margin: 30px 20px 0px;
        width: 150px;
        height: 50px;
        border: none;
        box-shadow: 0px 10px 9px -15px rgba(0,0,0,0.25);
        border-radius: 8px;
        font-weight: 600;
        font-size: 18px;
        cursor: pointer;

        :hover{
            transform: translateY(2px)
        }
    }
    .delete{
        color: #fff;
        background-color: #FF5C5C;
        box-shadow: 0px 14px 9px -15px rgba(0,0,0,0.25);
    }
    .save{
        color: black;
        background-color: #F9C91E;
    }
  }
  
`;

const CategModal = styled(Modal)`
  outline: none;
  background-color: white;
  box-shadow: 3px 6px 5px 3px #d6d6d6;
  border-radius: 8px;
  height: 300px;
  width: 600px;
  margin-top: -150px;
  margin-left: -300px;
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2{
      text-align: center;
      padding: 35px 50px 0px;
  }
  
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input{
    width: 80%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    color: black;
    margin: 7px 0px 10px;
    background-color: #f5f5f5;
    box-shadow: 0px 14px 9px -15px rbga(0,0,0,0.25);
    border-radius: 8px;
    padding: 0 1rem;
    transition: all 0.2s ease-in;
  }
    
  .buttons{
    flex-direction: row;
    
    button{
        font-family: "Work Sans";
        margin: 30px 20px 0px;
        width: 150px;
        height: 50px;
        border: none;
        box-shadow: 0px 10px 9px -15px rgba(0,0,0,0.25);
        border-radius: 8px;
        font-weight: 600;
        font-size: 18px;
        cursor: pointer;

        :hover{
            transform: translateY(2px)
        }
    }
    .delete{
        color: #fff;
        background-color: #FF5C5C;
        box-shadow: 0px 14px 9px -15px rgba(0,0,0,0.25);
    }
    .save{
        color: black;
        background-color: #F9C91E;
    }
  }
  
`;

const AddCategButton = styled(IoIosAddCircleOutline)`
    // position: relative;
    padding: 0.5rem 0.5rem;
    border-radius: 1rem;
    overflow: visible;

    transition: all 0.2s ease-in;
    &:hover {
        transform: translateY(-4px);
        background: #F3D9A4;
        cursor: pointer;
    }
` 

const DeleteButton = styled(TiDeleteOutline)`
    position: absolute;
    right: -25px;
    top: -15px;

    &:hover {
        color: #FF5C5C;
        cursor: pointer;
    }
` 
const AddButton = styled(IoIosAddCircleOutline)`
    position: relative;
    left: 50px;
    top: 90px;

    transition: all 0.2s ease-in;
    &:hover {
        transform: translateY(-4px);
        color: #F9C91E;
        cursor: pointer;
    }
` 

const Arrow = styled.div`
    left: 0;
    display: flex;
    flex-direction: row;
    height: 120px;
    position: fixed;
    width: 5%;
    align-items: center;
    background: white;
    z-index: 1;
    
`

const EditButton = styled.div`
    right: 0;
    display: flex;
    flex-direction: row;
    height: 120px;
    position: fixed;
    width: 12%;
    align-items: center;
    background: white;
    z-index: 1;

    button{ 
        outline: none;
        border: none;
        color: black;
        padding: 0rem 1rem;
        margin: 0.1px 10px 0.1px 10px;
        min-width: 110px;
        height: 70px;
        line-height: 70px;
        text-align: center;
        background: #F9C91E;
        border-radius: 1rem;
        transition: all 0.1s ease-in;
        font-family: "Work Sans";
        font-size: 90%;
        font-weight: bold;

        &:hover {
            transform: translateY(-4px);
            cursor: pointer;
        }    

    }
`

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  height: 120px;
  overflow-x: auto;
  position: fixed;
  margin-left: 5%;
  width: 83%;
  align-items: center;
  background: white;
  z-index: 1;
`;

const ArrowWrapper = styled.div`
    margin-top: 10px;
    padding-left: 25%;
`;

const Container = styled.div`
  background: #faf0e0;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
`;

const ProdGrid = styled.div`
    .productlist {
        position: absolute;
        width: 70%;
        margin-top: 160px;
        display: flex;
        margin-left: 50px;
        display: grid;
        gap: 2rem;
        /* z-index: 0; */
        grid-template-columns: repeat(auto-fit, minmax(177px, 1fr));

        @media screen and (max-width: 1024px) {
            gap: 1.5rem;
        }
    }

    .clicked{
        position: relative;
        background: #F9C91E;
        border-radius: 1rem;
        padding: 1rem 2rem;
        transition: all 0.2s ease-in;

        &:hover {
            transform: translateY(-4px);
            cursor: pointer;
        }

        h1{
            margin-top: 0.5rem;
        }
        h2{
            color: #617d98;
            font-size: 0.9rem;
            margin-top: 0.25;
        }
        @media screen and (max-width: 1024px) {
            width: 70%;
        }
    }
    .unclicked{
        position: relative;
        background: #fff;
        border-radius: 1rem;
        padding: 1rem 2rem;
        transition: all 0.2s ease-in;

        &:hover {
            transform: translateY(-4px);
            background: #F3D9A4;
            cursor: pointer;
        }
        h1{
            margin-top: 0.5rem;
        }

        h2{
            color: #617d98;
            font-size: 0.9rem;
            margin-top: 0.25;
        }
    }
    .image{
        height: 150px;
        width: 150px;
    }
    @media screen and (max-width: 1024px) {
            width: 70%;
        }

`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  .empty-grid{
    margin-top: 70px; 
  }
`;

export default EditMenu;