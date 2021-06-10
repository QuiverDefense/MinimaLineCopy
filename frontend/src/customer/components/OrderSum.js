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
                    <h2>Total Price: Php 790</h2>
                </div>
            </Container>
        );
    }
}

const Container = styled.div`
    height: 50vh;
    display: flex;
    flex-direction: column;
    position: fixed;
    margin-top: 4vh;
    background: #fff;
    border-radius: 1rem;
    box-shadow: 0px 5px 10px -2px #858585;

    h2{
        font-size: 2.5vh;
    }

    .wrapper{
        display: flex;
        flex-direction: row;
        margin-left: 2vh;
    }

    .list{
        height: 100vh;
        overflow: auto;
    }

    .order{
        margin-left: 2vh;
        margin-top: -2vh;
    }

    .name{
        font-size: 2vh;
    }

    .title{
        height: 10vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .price{
        display: flex;
        flex-direction: row;
        margin-top: -5vh;
        margin-left: 20vh;
        p{
            margin-right: 1vh;
            font-size: 2vh;
        }
    }

    .total-price{
        height: 19vh;
        margin-left: 4vh;
    }
`;

export default OrderSum;