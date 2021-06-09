import React, { Component } from "react";
import styled from "styled-components";
import { MdModeEdit } from "react-icons/md";

const orders = [
    {
        product: 'McBurger',
        quantity: 2,
        price: 300
    },
    {
        product: 'McFries',
        quantity: 3,
        price: 500
    },
    {
        product: 'McBurger',
        quantity: 1,
        price: 300
    },
    {
        product: 'McFries',
        quantity: 1,
        price: 50
    },
];

class OrderSum extends Component {    
    render() { 
        return (
            <Container>
                <div className="title">
                    <h1>Order Summary</h1>
                </div>
                <div className="list">
                    {orders.map((order,index)=>{
                        return(
                            <div className="wrapper">
                                <MdModeEdit/>
                                <div className="order">
                                    <div>
                                        <p className="name">{order.product}</p>
                                    </div>
                                    <div className="price">
                                        <p>x{order.quantity}</p>
                                        <p>Php {order.price}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })} 
                </div>
                <div className="total-price">
                    <h1>Total Price: Php 790</h1>
                </div>
            </Container>
        );
    }
}

const Container = styled.div`
    height: 500px;
    width: 20%;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    position: fixed;
    background: #fff;
    right: 0;
    margin-top: 30px;
    margin-right: 30px;
    border-radius: 1rem;
    box-shadow: 0px 5px 10px -2px #858585;

    .wrapper{
        display: flex;
        flex-direction: row;
        margin-left: 20px;
    }

    .list{
        /* height: 310px; */
        height: 350px;
        overflow: auto;
    }

    .order{
        margin-left: 20px;
        margin-top: -20px;
    }

    .name{
        font-size: 20px;
    }

    .title{
        height: 70px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .price{
        display: flex;
        flex-direction: row;
        margin-top: -30px;
        margin-left: 200px;
        p{
            margin-right: 10px;
        }
    }

    .total-price{
        /* height: 100px; */
        height: 50px;
        margin-left: 40px;
        /* margin-top: 50px; */
        margin-top: 0px;
    }

    img{
        height: 200px;
        width: 200px;
        margin-top: -60px;
    }
    @media screen and (max-width: 1024px) {
        margin-right: 27px;
        img{
            height: 180px;
            width: 180px;
        }
    }
`;

export default OrderSum;