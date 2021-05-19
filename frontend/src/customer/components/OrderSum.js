import React, { Component } from "react";
import styled from "styled-components";

class OrderSum extends Component {

    render() { 
        return (
            <Container>
                <h1>Order Summary</h1>
                {/* <img src={this.props.product_img}/>
                <h1>{this.props.product_name}</h1>
                <h3>{this.props.product_price}</h3>
                <h3>{this.props.product_availability ? "Available" : "Not Available"}</h3> */}
            </Container>
        );
    }
}

const Container = styled.div`
    height: 500px;
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    background: #fff;
    right: 0;
    margin-top: 50px;
    border-radius: 1rem;
    margin-right: 30px;
    box-shadow: 0px 5px 10px -2px #858585;
    /* padding: 1rem; */

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