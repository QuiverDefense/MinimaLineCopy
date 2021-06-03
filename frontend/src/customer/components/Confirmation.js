import React, { Component } from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
// import img from '../../assets/Lunch_Break_Isometric.svg'
import img from '../../assets/confirm.png';

class Confirmation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Container>
                <div>
                    <h1>Your order has been confirmed.</h1>
                    <img src={img}/>
                    <h2>Please claim your order ticket and proceed to the cashier for payment.</h2>
                </div>
                <Link to="/customer">
                    <button>
                        Okay
                    </button>
                </Link>
            </Container>
        );
    }
}

const Container = styled.div`
    background-color: white;
    box-shadow: 3px 6px 5px 3px #d6d6d6;
    border-radius: 70px;
    height: 800px;
    width: 800px;
    margin-top: -400px;
    margin-left: -400px;
    position: absolute;
    top: 50%;
    left: 50%;
    align-items: center;
    justify-content: center;
    text-align: center;

    h1{
        margin-top: 85px;
        font-weight: bolder;
        font-size: 45px;
    }

    h2{
        margin-top: -40px;
        padding: 0px 70px;
        font-weight: lighter;
    }

    img{
        margin-top: -90px;
        width: 500px;
        height: 500px;
    }

    button{
        margin-top: 25px;
        font-family: "Work Sans";
        width: 200px;
        height: 90px;
        border: none;
        box-shadow: 0px 10px 9px -15px rgba(0,0,0,0.25);
        border-radius: 20px;
        font-weight: 600;
        font-size: 25px;
        cursor: pointer;
        color: black;
        background-color: #f9c91e;
        /* box-shadow: 0px 14px 9px -15px rgba(0,0,0,0.25); */
        :hover{
            transform: translateY(2px)
        }
    }
`

export default Confirmation;