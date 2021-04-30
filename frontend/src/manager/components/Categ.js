import React, { Component } from "react";
import styled from "styled-components";
import { TiDeleteOutline } from "react-icons/ti";
import { IconContext } from "react-icons";

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
      {
        product_name: 'Drinks',
    },
    {
        product_name: 'Sides',
    },
    {
        product_name: 'Desserts',
    },
      {
        product_name: 'Drinks',
    },
    {
        product_name: 'Sides',
    },
    {
        product_name: 'Desserts',
    },
];

class Categ extends Component {
    constructor(){
        super();
        this.state = { // initial/default state is the first category on the list
            clicked: false,
            current: 0,
            default: true
            // editMode: this.editButtonClicked
        }
        this.changeColor = this.changeColor.bind(this);
    }
    changeColor(index){
        if(this.state.current !== index) // different category is clicked
            this.setState({
                current: index,
                clicked: true,
                default: false
            })
    }

    deleteAlert(){
        alert("are you sure?");
    }

    render() { 
        console.log(this.state.editMode);
        const Product = (props) => {
            const {product_name} = props.product;
            return (
                <div className="word">
                <h1>{product_name}</h1>
                </div>
            );
        };
        return ( 
            <Container>
                {products.map((product,index)=>{
                    return(
                        <div
                            className={((this.state.clicked || this.state.default) && (this.state.current===index)) ? 'clicked' : 'unclicked'}
                            onClick={()=>this.changeColor(index)}>
                            <Product key={index} product={product}></Product>
                            {this.props.mode==="edit" ? 
                                <IconContext.Provider value={{ size: "25px"}}>
                                    <DeleteButton onClick={this.deleteAlert}/>
                                </IconContext.Provider>
                            : null
                            }

                        </div>
                    )
                })}      
            </Container>
         );
    }
}

const DeleteButton = styled(TiDeleteOutline)`
    position: absolute;
    // left: 135px;
    right: -10px;
    top: -10px;

    &:hover {
        color: red;
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

export default Categ;