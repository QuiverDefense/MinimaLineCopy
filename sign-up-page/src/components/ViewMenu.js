import React from "react";
import styled from "styled-components";
import burger_img from "../assets/burger.png";
import fries_img from "../assets/fries.png";
import {Link} from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import Categ from "./Categ";

const products = [
    {
        product_img: burger_img,
        product_name: 'McBurger',
        product_price: 'Php 200.00',
    },
    {
        product_img: fries_img,
        product_name: 'McFries',
        product_price: 'Php 50.00',
    },
    {
        product_img: burger_img,
        product_name: 'McNugget',
        product_price: 'Php 100.00',
    },
    {
        product_img: fries_img,
        product_name: 'McBurger',
        product_price: 'Php 200.00',
    },
    {
        product_img: burger_img,
        product_name: 'McFries',
        product_price: 'Php 50.00',
    },
    {
        product_img: fries_img,
        product_name: 'McNugget',
        product_price: 'Php 100.00',
    },
    {
        product_img: burger_img,
        product_name: 'McNugget',
        product_price: 'Php 100.00',
    },
    {
        product_img: fries_img,
        product_name: 'McBurger',
        product_price: 'Php 200.00',
    },
    {
        product_img: burger_img,
        product_name: 'McFries',
        product_price: 'Php 50.00',
    },
    {
        product_img: fries_img,
        product_name: 'McNugget',
        product_price: 'Php 100.00',
    },
    {
        product_img: burger_img,
        product_name: 'McNugget',
        product_price: 'Php 100.00',
    },
    {
        product_img: fries_img,
        product_name: 'McBurger',
        product_price: 'Php 200.00',
    },
    {
        product_img: burger_img,
        product_name: 'McFries',
        product_price: 'Php 50.00',
    },
    {
        product_img: fries_img,
        product_name: 'McNugget',
        product_price: 'Php 100.00',
    },
];

function ViewMenu () {
  return (
    <Container>
        <Wrapper>
            <ArrowWrapper>
                <Link to="/sidebar">
                <BiArrowBack size="40px" color="#676666"/>
                </Link>
            </ArrowWrapper>
            
            <ProdGrid>
            <Categ/>    
                <section className='productlist'> 
                    {products.map((product)=>{
                        const {product_img, product_name, product_price} = product;
                        return (
                            <Product product={product}></Product>
                        )
                    })}
                </section>
            </ProdGrid>
        </Wrapper>
    </Container>
  );
};

const Product = (props) => {
    const {product_img, product_name, product_price} = props.product;
    return (
        <article className='product_box'>
            <h3><img className='image' src={product_img} alt="" /></h3>
            <h1>{product_name}</h1>
            <h2>{product_price}</h2>
        </article> 
    );
};

const ArrowWrapper = styled.div`
  margin-top: 50px;
  margin-left: 30px;
`;

const Container = styled.div`
  background: #eefcff;
  /* background: linear-gradient(63deg, rgba(255,140,140,1) 0%, rgba(250,240,224,1) 60%, rgba(113,237,184,1) 100%);
  background-size: cover; */
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
`;

const ProdGrid = styled.div`
    .productlist {
        position: absolute;
        width: 70%;
        margin-top: 140px;
        //height: 100%;
        display: flex;
        margin: 5 rem auto;
        display: grid;
        gap: 2rem;


    }
    @media screen and (min-width: 768px) {
        .productlist {
            // grid-template-columns: repeat(4, 1fr);
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
    }
    
    .product_box h1{
        margin-top: 0.5rem;
    }
    .product_box h2{
        color: #617d98;
        font-size: 0.9rem;
        margin-top: 0.25;
    }

    .image{
        height: 150px;
        width: 150px;
        resizeMode: 'contain'
    }

`;

const Wrapper = styled.div`
  background: rgb(255,140,140);
  background: linear-gradient(63deg, rgba(255,140,140,1) 0%, rgba(250,240,224,1) 60%, rgba(113,237,184,1) 100%);
  width: 100%;
  height: 100%;
  display: flex;
`;

export default ViewMenu;