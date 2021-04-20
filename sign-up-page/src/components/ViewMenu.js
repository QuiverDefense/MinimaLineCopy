import React from "react";
import styled from "styled-components";
import burger_img from "../assets/burger.png";
import fries_img from "../assets/fries.png";
import {Link} from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";

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
        <article className='product'>
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
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const ProdGrid = styled.div`
    .productlist {
        width:90vw;
        max-width: 1170px;
        margin: 5 rem auto;
        display: grid;
        gap: 2rem;
    }
    @media screen and (min-width: 768px) {
        .productlist {
            grid-template-columns: repeat(4, 1fr);
        }
    }
    .product{
        background: #fff;
        border-radius: 1rem;
        padding: 1rem 2rem;
    }
    
    .product h1{
        margin-top: 0.5rem;
    }
    .product h2{
        color: #617d98;
        font-size: 0.9rem;
        margin-top: 0.25;
    }

    .image{
        // height: auto;
        // max-height: 250px;
        // width: auto;
        // max-width: 250px;
        height: 200px;
        width: 200px;
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