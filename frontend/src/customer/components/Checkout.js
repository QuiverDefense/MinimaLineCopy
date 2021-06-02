import React, { Component } from 'react';
import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import {Link} from 'react-router-dom';
import { RiDeleteBin2Line } from "react-icons/ri";
import burger_img from "../../assets/burger.png";
import fries_img from "../../assets/fries.png";

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
        document.title = "MinimaLine | Checkout"
    }

    render() { 
        return (
            <Container>
                <ArrowWrapper>
                    <Link to="/prod-select">
                       <BiArrowBack size="40px" color="#676666"/>
                    </Link>
                </ArrowWrapper>
                <h1>Checkout</h1>
                <Table>
                    <tr>
                        <td width="10%"><img src={burger_img}/></td>
                        <td width="50%">McBurger</td>
                        <div className="counter">
                            <button>-</button>
                                <span>
                                <td width="20%">2</td>
                                </span>
                            <button>+</button>
                        </div>
                        <td width="20%">Php 300.00</td>
                    </tr>
                    <tr>
                        <td width="10%"><img src={fries_img}/></td>
                            <td width="50%">McFries</td>
                            <div className="counter">
                                <button>-</button>
                                    <span>
                                    <td width="20%">3</td>
                                    </span>
                                <button>+</button>
                            </div>
                            <td width="20%">Php 90.00</td>
                    </tr>
                    <tr>
                        <td width="10%"><img src={burger_img}/></td>
                        <td width="50%">McBurger</td>
                        <div className="counter">
                            <button>-</button>
                                <span>
                                <td width="20%">2</td>
                                </span>
                            <button>+</button>
                        </div>
                        <td width="20%">Php 300.00</td>
                    </tr>
                    <tr>
                        <td width="10%"><img src={fries_img}/></td>
                            <td width="50%">McFries</td>
                            <div className="counter">
                                <button>-</button>
                                    <span>
                                    <td width="20%">3</td>
                                    </span>
                                <button>+</button>
                            </div>
                            <td width="20%">Php 90.00</td>
                    </tr>
                    <tr>
                        <td width="10%"><img src={burger_img}/></td>
                        <td width="50%">McBurger</td>
                        <div className="counter">
                            <button>-</button>
                                <span>
                                <td width="20%">2</td>
                                </span>
                            <button>+</button>
                        </div>
                        <td width="20%">Php 300.00</td>
                    </tr>
                    <tr>
                        <td width="10%"><img src={fries_img}/></td>
                            <td width="50%">McFries</td>
                            <div className="counter">
                                <button>-</button>
                                    <span>
                                    <td width="20%">3</td>
                                    </span>
                                <button>+</button>
                            </div>
                            <td width="20%">Php 90.00</td>
                    </tr>
                    {/* <tr>
                        <td width="10%"><img src={burger_img}/></td>
                        <td width="50%">McBurger</td>
                        <div className="counter">
                            <button>-</button>
                                <span>
                                <td width="20%">2</td>
                                </span>
                            <button>+</button>
                        </div>
                        <td width="20%">Php 300.00</td>
                    </tr>
                    <tr>
                        <td width="10%"><img src={fries_img}/></td>
                            <td width="50%">McFries</td>
                            <div className="counter">
                                <button>-</button>
                                    <span>
                                    <td width="20%">3</td>
                                    </span>
                                <button>+</button>
                            </div>
                            <td width="20%">Php 90.00</td>
                    </tr>
                    <tr>
                        <td width="10%"><img src={burger_img}/></td>
                        <td width="50%">McBurger</td>
                        <div className="counter">
                            <button>-</button>
                                <span>
                                <td width="20%">2</td>
                                </span>
                            <button>+</button>
                        </div>
                        <td width="20%">Php 300.00</td>
                    </tr>
                    <tr>
                        <td width="10%"><img src={fries_img}/></td>
                            <td width="50%">McFries</td>
                            <div className="counter">
                                <button>-</button>
                                    <span>
                                    <td width="20%">3</td>
                                    </span>
                                <button>+</button>
                            </div>
                            <td width="20%">Php 90.00</td>
                    </tr>
                    <tr>
                        <td width="10%"><img src={burger_img}/></td>
                        <td width="50%">McBurger</td>
                        <div className="counter">
                            <button>-</button>
                                <span>
                                <td width="20%">2</td>
                                </span>
                            <button>+</button>
                        </div>
                        <td width="20%">Php 300.00</td>
                    </tr>
                    <tr>
                        <td width="10%"><img src={fries_img}/></td>
                            <td width="50%">McFries</td>
                            <div className="counter">
                                <button>-</button>
                                    <span>
                                    <td width="20%">3</td>
                                    </span>
                                <button>+</button>
                            </div>
                            <td width="20%">Php 90.00</td>
                    </tr> */}

                </Table>
                <hr/>
                <div className="total-price">
                    <h2>Total</h2>
                    <h2>Php 967.00</h2>
                </div>
                <div className="bottom">
                    <h2>Order Notes</h2>
                    <textarea
                        type="text"
                        placeholder="Optional"
                        name="order-note"
                        autoComplete="off"
                        // onChange={this.handleChange.bind(this)}
                    />
                    <button>Confirm</button>
                </div>
            </Container>
        );
    }
}

const Container = styled.div`
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
        margin-top: -10px;
    }

    hr{
        color: #676666;
        width: 70%;
        /* height: 850px; */
        margin-top: 450px;
        /* top: 50%; */
    }

    .total-price{
        display: flex;
        flex-direction: row;
        margin-left: 1070px;
        margin-top: -20px;
        
        h2{
            margin-right: 40px;
            font-size: 35px;
        }
    }

    .bottom{
        margin-top: -70px;
        margin-left: 130px;
    
    }

    textarea{
        outline: none;
        width: 80%;
        max-width: 450px;
        min-width: 350px;
        height: 120px;
        border: none;
        margin: -0.5rem 0;
        background-color: #f5f5f5;
        box-shadow: 0px 14px 9px -15px rbga(0,0,0,0.25);
        border-radius: 8px;
        padding: 1 1rem;
        transition: all 0.2s ease-in;
        font-family: "Work Sans";
    }
    
`;

const Table = styled.table`
    table-layout: fixed;
    width: 1000px;
    margin-left: -500px;
    position: absolute;
    left: 50%;
    font-size: 30px;
    overflow: auto;

    .counter{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 15px;

        button{
            outline: none;
            width: 30px;
            height: 30px;   
            color: black;
            border: none;
            background-color: #d6d6d6;
            border-radius: 8px;
        }

        span{
            margin: 0px 8px;
        }
    }

    img{
        width: 8vh;
        height: 6vh;
    }
`;

const ArrowWrapper = styled.div`
    margin-top: 40px;
    margin-left: 50px;
`

export default Checkout;