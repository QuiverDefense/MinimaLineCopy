import React, { Component } from "react";
import styled from "styled-components";
import burger_img from "../assets/burger.png";
import fries_img from "../assets/fries.png";
import {Link} from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import Categ from "./Categ";
import ProdDesc from "./ProdDesc";

const products = [
    {
        product_img: burger_img,
        product_name: 'McBurger',
        product_price: 'Php 200.00',
        availability: true
    },
    {
        product_img: fries_img,
        product_name: 'McFries',
        product_price: 'Php 50.00',
        availability: true
    },
    {
        product_img: burger_img,
        product_name: 'McNugget',
        product_price: 'Php 100.00',
        availability: true
    },
    {
        product_img: fries_img,
        product_name: 'McBurger',
        product_price: 'Php 200.00',
        availability: true
    },
    {
        product_img: burger_img,
        product_name: 'McFries',
        product_price: 'Php 50.00',
        availability: true
    },
    {
        product_img: fries_img,
        product_name: 'McNugget',
        product_price: 'Php 100.00',
        availability: true
    },
    {
        product_img: burger_img,
        product_name: 'McNugget',
        product_price: 'Php 100.00',
        availability: false
    },
    {
        product_img: fries_img,
        product_name: 'McBurger',
        product_price: 'Php 200.00',
        availability: false
    },
    {
        product_img: burger_img,
        product_name: 'McFries',
        product_price: 'Php 50.00',
        availability: false
    },
    {
        product_img: fries_img,
        product_name: 'McNugget',
        product_price: 'Php 100.00',
        availability: false
    },
    {
        product_img: burger_img,
        product_name: 'McNugget',
        product_price: 'Php 100.00',
        availability: false
    },
    {
        product_img: fries_img,
        product_name: 'McBurger',
        product_price: 'Php 200.00',
        availability: false
    },
    {
        product_img: burger_img,
        product_name: 'McFries',
        product_price: 'Php 50.00',
        availability: false
    },
    {
        product_img: fries_img,
        product_name: 'McNugget',
        product_price: 'Php 100.00',
        availability: false
    },
];

class ViewMenu extends Component {
    constructor(){
        super();
        this.state = {
            clicked: false,
            current: null,
            productInfo: []
        }
        this.changeColor = this.changeColor.bind(this);
    }
    changeColor(index){
        if(this.state.current !== index)
            this.setState({
                current: index,
                clicked: true
            })
    }
    render() { 
        const Product = (props) => {
            const {product_img, product_name, product_price} = props.product;
            return (
                <article>
                    <h3><img className='image' src={product_img} alt="" /></h3>
                    <h1>{product_name}</h1>
                    {/* <h2>{product_price}</h2> */}
                </article> 
            );
        };
        
        return ( 
            <Container>
                <Wrapper>
                    <Nav>
                        <ArrowWrapper>
                            <Link to="/sidebar">
                                <BiArrowBack size="40px" color="#676666"/>
                            </Link>
                        </ArrowWrapper>
                        <Categ/> 
                    </Nav>
                    <ProdGrid>
                        <section className='productlist'> 
                            {products.map((product,index)=>{
                                return (
                                    <div
                                        onClick={()=>this.changeColor(index)}
                                        className={(this.state.clicked && (this.state.current===index)) ? 'clicked' : 'unclicked'}>
                                        <Product key={index} product={product}></Product>
                                    </div>
                                )
                            })}
                            {this.state.clicked ? <ProdDesc {...products[this.state.current]}/> : null }
                        </section>
                    </ProdGrid>
                </Wrapper>
            </Container>
         );
    }
}
const Nav = styled.div`
  display: flex;
  flex-direction: row;
  height: 120px;
  overflow-x: auto;
  position: fixed;
  width: 100%;
  align-items: center;
  background: white;
  z-index: 1;
`;

const ArrowWrapper = styled.div`
  margin-top: 10px;
  margin-left: 40px;
  margin-right: 40px;

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
        //height: 100%;
        display: flex;
        margin-left: 50px;
        display: grid;
        gap: 2rem;
        z-index: 0;

        @media screen and (min-width: 768px) {
            grid-template-columns: repeat(auto-fit, minmax(177px, 1fr));
        }
    }

    .product_box{
        background: #fff;
        border-radius: 1rem;
        padding: 1rem 2rem;
        transition: all 0.2s ease-in;

        &:hover {
            transform: translateY(-4px);
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
    .clicked{
        background: #F9C91E;
        border-radius: 1rem;
        padding: 1rem 2rem;
        transition: all 0.2s ease-in;

        &:hover {
            transform: translateY(-4px);
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
    .unclicked{
        background: #fff;
        border-radius: 1rem;
        padding: 1rem 2rem;
        transition: all 0.2s ease-in;

        &:hover {
            transform: translateY(-4px);
            background: #F3D9A4;
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

`;

const Wrapper = styled.div`
  /* background: rgb(255,140,140);
  background: linear-gradient(63deg, rgba(255,140,140,1) 0%, rgba(250,240,224,1) 60%, rgba(113,237,184,1) 100%); */
  width: 100%;
  height: 100%;
  display: flex;
`;

export default ViewMenu;