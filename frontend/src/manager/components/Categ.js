import React, { Component } from "react";
import styled from "styled-components";
import { TiDeleteOutline } from "react-icons/ti";
import Modal from 'react-modal';
import Axios from 'axios';
/*
const products = [
    {
        product_name: 'Mains',
    },
    {
        product_name: 'Appetizers',
    },
    {
        product_name: 'Sides',
    },
    {
        product_name: 'Desserts',
    },

];
*/

class Categ extends Component {
    constructor(){
        super();
        this.state = { // initial/default state is the first category on the list
            clicked: false,
            current: 0,
            default: true,
            openModal: false,
            categ: {}
        }
        this.changeColor = this.changeColor.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    changeColor(index){
        if(this.state.current !== index) // different category is clicked
            this.setState({
                current: index,
                clicked: true,
                default: false
            })
    }
    handleClick(){
        this.setState({openModal: !this.state.openModal})
    }

    render() { 
        const Product = (props) => {
            const {product_name} = props.product;
            return (
                <div className="word">
                <h1>{product_name}</h1>
                </div>
            );
        };
        var modalStyle={overlay: {zIndex: 2}}
        return ( 
            <Container>
                {products.map((product,index)=>{
                    return(
                        <div
                            className={((this.state.clicked || this.state.default) && (this.state.current===index)) ? 'clicked' : 'unclicked'}
                            onClick={()=>this.changeColor(index)}>
                            <Product key={index} product={product}></Product>
                            {this.props.mode==="edit" ? 
                                <DeleteButton size="25px"onClick={this.handleClick}/>
                            : null}
                        </div>
                    )
                })} 
                {this.state.openModal ?
                    <ModalContainer>
                        <DeleteModal isOpen={true} style={modalStyle}>
                            <h2>Are you sure you want to remove this category from the menu?</h2>
                            <div className="buttons">
                                <button className="delete">Delete</button>
                                <button onClick={this.handleClick}>Cancel</button>
                            </div>
                        </DeleteModal>
                    </ModalContainer>
                : null}     
            </Container>
         );
    }
}

const DeleteButton = styled(TiDeleteOutline)`
    position: absolute;
    right: -10px;
    top: -10px;

    &:hover {
        color: #FF5C5C;
    }
` 

const Container = styled.div`
    display: flex;
    flex-direction: row;

    .unclicked{
        position: relative;
        margin-top: 10px;
        min-width: 110px;
        height: 70px;
        line-height: 40px;
        text-align: center;
        background: #FFFFFF;
        margin-right: 10px;
        border-radius: 1rem;
        transition: all 0.1s ease-in;

        &:hover {
            transform: translateY(-4px);
            background: #F3D9A4;
        }
    }

    .clicked{
        position: relative;
        margin-top: 10px;
        min-width: 110px;
        height: 70px;
        line-height: 40px;
        text-align: center;
        background: #F9C91E;
        margin-right: 10px;
        border-radius: 1rem;
        transition: all 0.1s ease-in;
        /* box-shadow: 0px 0px 10px 2px #858585; */

        &:hover {
            transform: translateY(-4px);
        }
    }
    
    .word{
        font-size: 0.7rem;
        margin: 0.1px 10px 0.1px 10px;
        color: black;

    }
`
const ModalContainer = styled.div`
  position: relative;
`;
const DeleteModal = styled(Modal)`
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
  .ReactModal__Overlay{
      z-index: 1000;
  }

  h2{
      text-align: center;
      padding: 45px 50px 0px;
  }
  .buttons{
    display: flex;
    flex-direction: row;
    align-items: center;
    
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
  }
`;

export default Categ;