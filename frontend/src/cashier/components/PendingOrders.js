import React, { Component } from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
// import {BsArrowRight} from "react-icons/bs";
import {FaLongArrowAltRight} from "react-icons/fa";
import {RiSearchLine} from "react-icons/ri";
import search from "../../assets/search.png";
import burger_img from "../../assets/burger.png";
import fries_img from "../../assets/fries.png";

class PendingOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
      document.title = "MinimaLine | Cashier"
    }

    render() { 
        return ( 
            <Container>
                <div className="left">
                    <h1>Priority Type</h1>
                    <div className="orderlist">
    
                    <Table>
                    <tr>
                        <td width="10%"><img src={burger_img}/></td>
                        <td width="50%">Potasdsgdfgdalsa</td>
                                <td width="20%">2</td>
                        <td width="20%">Php 300.00</td>
                    </tr>
                    <tr width="10%">
                        <td><img src={fries_img}/></td>
                            <td width="50%">McFries</td>
                                    <td width="20%">3</td>
                            <td width="20%">Php 90.00</td>
                    </tr>
                    <tr width="10%">
                        <td><img src={burger_img}/></td>
                        <td width="50%"> McBurger</td>
                                <td width="20%">2</td>
                        <td width="20%">Php 300.00</td>
                    </tr>
                    <tr width="10%">
                        <td><img src={fries_img}/></td>
                            <td width="50%">McFries</td>
                                <td width="20%">3</td>
                            <td width="20%">Php 90.00</td>
                    </tr>
                    <tr width="10%">
                        <td><img src={burger_img}/></td>
                        <td width="50%">McBurger</td>
                            <td width="20%">2</td>
                        <td width="20%">Php 300.00</td>
                    </tr>
                    <tr width="10%">
                        <td><img src={fries_img}/></td>
                            <td width="50%">McFries</td>
                                <td width="20%">3</td>
                            <td width="20%">Php 90.00</td>
                    </tr>
                    <tr width="10%">
                        <td><img src={fries_img}/></td>
                            <td width="50%">McFries</td>
                                <td width="20%">3</td>
                            <td width="20%">Php 90.00</td>
                    </tr>
                    <tr width="10%">
                        <td><img src={burger_img}/></td>
                        <td width="50%">McBurger</td>
                            <td width="20%">2</td>
                        <td width="20%">Php 300.00</td>
                    </tr>
                    <tr width="10%">
                        <td><img src={fries_img}/></td>
                            <td width="50%">McFries</td>
                                <td width="20%">3</td>
                            <td width="20%">Php 90.00</td>
                    </tr>
                    <tr width="10%">
                        <td><img src={fries_img}/></td>
                            <td width="50%">McFries</td>
                                <td width="20%">3</td>
                            <td width="20%">Php 90.00</td>
                    </tr>
                    <tr width="10%">
                        <td><img src={burger_img}/></td>
                        <td width="50%">McBurger</td>
                            <td width="20%">2</td>
                        <td width="20%">Php 1000.00</td>
                    </tr>
                    <tr width="10%">
                        <td><img src={fries_img}/></td>
                            <td width="50%">McFries</td>
                                <td width="20%">3</td>
                            <td width="20%">Php 90.00</td>
                    </tr>
                    </Table>

                    </div>
                    <h2>Order Notes</h2>
                    <div className="notes">
                        <p>No ketchup and mayo</p>
                    </div>
                    <div className="price">
                        <div className="total-price">
                            <h1>Total Price</h1>
                        </div>
                        <button className="confirm">
                            Confirm
                        </button>
                        <button>
                            Cancel
                        </button>
                    </div>
                </div>
                <div className="right">
                    <div>
                        <h1>Pending <br/> Orders</h1>
                        <div className="arrow">
                            <h2>Cancelled orders</h2>
                            <FaLongArrowAltRight size="30px" color="black"/>
                        </div>
                        <Search>
                            <input className="searchbox"
                                type="number"
                                placeholder="Search here"
                            />
                            <button className="search-button">
                                <img src={search}/>
                            </button>
                        </Search>
                    </div>
                    <Link to="/customer">
                    </Link>
                </div>
            </Container>
        );
    }
}

const Container = styled.div`
    align-items: center;
    justify-content: center;
    text-align: center;

    .left{
        
        h1{
            margin-left: 40px;
            font-size: 30px;  
        }

        h2{
            position: absolute;
            margin-left: 40px;
            margin-top: 410px;
            font-size: 30px;  
        }

        p{
            /* position: absolute; */
            text-align: left;
            margin-left: 30px;
        }

        .orderlist{
            position: absolute;
            background-color: white;
            box-shadow: 3px 6px 5px 3px #d6d6d6;
            border-radius: 35px;
            height: 400px;
            width: 780px;
            margin-top: -10px;
            margin-left: 40px;  
        }

        .notes{
            position: absolute;
            background-color: white;
            box-shadow: 3px 6px 5px 3px #d6d6d6;
            border-radius: 30px;
            height: 100px;
            width: 780px;
            margin-top: 460px;
            margin-left: 40px;  
            padding: 5px;
        }

        .price{
            position: absolute;
            background-color: white;
            box-shadow: 3px 6px 5px 3px #d6d6d6;
            border-radius: 40px;
            height: 215px;
            width: 780px;
            margin-top: 590px;
            margin-left: 40px; 

            .total-price{
                position: absolute;
                background-color: #f9c91e;
                box-shadow: 3px 6px 5px 3px #d6d6d6;
                border-radius: 40px;
                height: 60px;
                width: 620px;
                margin-top: 20px;
                margin-left: 85px; 

                h1{
                    position: absolute;
                    margin-top: 15px;
                    margin-left: 20px;
                }
            } 

            button{
                margin-left: 10px;
                margin-top: 100px;
                /* margin-right: 50px; */
                font-family: "Work Sans";
                width: 300px;
                height: 90px;
                border: none;
                box-shadow: 0px 10px 9px -15px rgba(0,0,0,0.25);
                border-radius: 30px;
                font-weight: 600;
                font-size: 25px;
                cursor: pointer;
                color: black;
                background-color: #f9c91e;
                
                :hover{
                    transform: translateY(2px)
                }
            }
        }

    }
    
    .right{
        position: absolute;
        background-color: white;
        box-shadow: 3px 6px 5px 3px #d6d6d6;
        border-radius: 70px;
        height: 850px;
        width: 1000px;
        margin-top: -45px;
        margin-left: 870px;

                
        h1{
            text-align: left;
            margin-left: 40px;
            font-size: 60px;  
        }

        .arrow{
            position: absolute;
            margin-left: 720px;
            margin-top: -180px;
            display: flex;
            flex-direction: row;

            h2{
                margin-top: -1px;
                margin-right: 10px;
            }
        }
    }
`

const Search = styled.div`
    position: absolute;
    margin-top: -110px;
    margin-left: 590px;
    display: flex;
    flex-direction: row;

    .search-button{
        background: transparent;
        border: none;
        outline: none;
        margin-left: -40px;
    }

    .search-button img{
        width: 20px;
        height: 20px;
        object-fit: cover;
    }
    input{
        padding-left: 20px;
        width: 80%;
        max-width: 450px;
        min-width: 350px;
        height: 40px;
        border: none;
        margin: 0.5rem 0;
        background-color: #f5f5f5;
        border-radius: 50px;
    }
`

const Table = styled.table`
    table-layout: fixed;
    width: 90%;
    margin-left: -500px;
    position: absolute;
    left: 50%;
    font-size: 20px;
    margin-left: -345px;
    /* margin-right: 500px; */
    display: block;
    overflow: auto;
    height: 400px;

    td{
        text-align: left;
    }
    .counter{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 15px;
    }

    img{
        width: 7vh;
        height: 5vh;
        margin-right: 15px;
    }
`;

export default PendingOrders;