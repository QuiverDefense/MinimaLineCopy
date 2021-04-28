import React, { Component } from "react";
import styled from "styled-components";

class ProdDesc extends Component {

    render() { 
        return ( 
            <Container>
                <img src={this.props.product_img}/>
                <h1>{this.props.product_name}</h1>
                <h3>{this.props.product_price}</h3>
                <h3>{this.props.product_availability ? "Available" : "Not Available"}</h3>
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
    margin-right: 40px;
    box-shadow: 0px 5px 10px -2px #858585;

    img{
        height: 200px;
        width: 200px;
        margin-top: -60px;
    }
`;

export default ProdDesc;