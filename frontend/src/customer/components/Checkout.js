import React, { Component } from 'react';
import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Container>
                <ArrowWrapper>
                    {/* <Link to="/customer"> */}
                    <BiArrowBack size="40px" color="#676666"/>
                    {/* </Link> */}
                </ArrowWrapper>
                <h1>Checkout</h1>
            </Container>
        );
    }
}

const Container = styled.div`
    /* outline: none; */
    background-color: white;
    box-shadow: 3px 6px 5px 3px #d6d6d6;
    border-radius: 30px;
    height: 850px;
    width: 1800px;
    margin-top: -425px;
    margin-left: -900px;
    position: absolute;
    top: 50%;
    left: 50%;
    /* display: flex;
    flex-direction: row; */
    align-items: center;
    justify-content: center;

    h1{
        font-size: 55px;
        margin-left: 120px;
    }
`;

const ArrowWrapper = styled.div`
    margin-top: 40px;
    margin-left: 50px;
`

export default Checkout;