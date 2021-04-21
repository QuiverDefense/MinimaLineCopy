import React from "react";
import styled from "styled-components";

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
];

function Categ () {
    return (
        <Container>
            {products.map((product)=>{
                const {product_name} = product;
                
                return (<div className='item'> <Product product={product}></Product></div>)
            })}      
        </Container>
    );
};

const Product = (props) => {
    const {product_name} = props.product;
    return (
        <div className='word'>
        <h1>{product_name}</h1>
        </div>
    );
};

const Container = styled.div`
    max-height: 120px;
    //border: 1px solid #ddd;
    display: flex;
    overflow-x: auto;
    position: absolute;
    width: 90%;
    margin-top: 25px;

    .item{
        margin-top: 10px;
        min-width: 110px;
        heigh: 70px;
        line-height: 70px;
        text-align: center;
        background: #fff;
        margin-right: 10px;
        border-radius: 1rem;
        transition: all 0.2s ease-in;

        &:hover {
            transform: translateY(-4px);
        }
    }
    
    .word{
        font-size: 0.7rem;
        margin: 0.1px 10px 0.1px 10px;
    }

`

export default Categ;