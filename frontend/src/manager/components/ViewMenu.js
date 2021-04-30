import React, { Component } from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import Categ from "./Categ";
import ProdDesc from "./ProdDesc";
import Products from "./Products";
import EditMenu from "./EditMenu";

class ViewMenu extends Component {
    constructor(){
        super();
        this.state = {
            clicked: false,
            current: null
            // editButtonClicked: false,
        }
        this.changeColor = this.changeColor.bind(this);
        // this.editMenu = this.editMenu.bind(this);
    }
    changeColor(index){
        if(this.state.current !== index)
            this.setState({
                current: index,
                clicked: true
            })
    }

    // editMenu(){
    //     this.setState({
    //         editButtonClicked: true
    //     })
    // }

    render() { 
        const Product = (props) => {
            const {product_img, product_name, product_price, product_availability} = props.product;
            return (
                <article>
                    <h3><img className='image' src={product_img} alt="" /></h3>
                    <h1>{product_name}</h1>
                    <h2>{product_price}</h2>
                    <h2>{product_availability ? "Available" : "Not Available"}</h2>
                </article> 
            );
        };
        
        return ( 
            <Container>
                <Wrapper>
                    <Arrow>
                        <ArrowWrapper>
                            <Link to="/store-reg">
                                <BiArrowBack size="40px" color="#676666"/>
                            </Link>
                        </ArrowWrapper>
                    </Arrow>
                    <EditButton>
                        <Link to='/edit-menu'>
                            <button>Edit Menu</button>
                        </Link>
                    </EditButton>
                    <Nav>
                        <Categ mode={"view"}/> 
                    </Nav>
                    <ProdGrid>
                        <section className='productlist'> 
                        {Products.map((product,index)=>{
                                return (
                                    <div
                                        onClick={()=>this.changeColor(index)}
                                        className={(this.state.clicked && (this.state.current===index)) ? 'clicked' : 'unclicked'}>
                                        <Product key={index} product={product}></Product>
                                    </div>
                                )
                            })}
                            {this.state.clicked ? <ProdDesc {...Products[this.state.current]}/> : null }
                        </section>
                    </ProdGrid>
                </Wrapper>
            </Container>
         );
    }
}

const EditButton = styled.div`
    right: 0;
    display: flex;
    flex-direction: row;
    height: 120px;
    overflow-x: auto;
    position: fixed;
    width: 12%;
    align-items: center;
    background: white;
    z-index: 1;

    button{ 
        border: none;
        color: black;
        padding: 0rem 1rem;
        margin: 0.1px 10px 0.1px 10px;
        min-width: 110px;
        height: 70px;
        line-height: 70px;
        text-align: center;
        background: #F9C91E;
        border-radius: 1rem;
        transition: all 0.1s ease-in;
        /* box-shadow: 0px 0px 10px 2px #858585; */

        &:hover {
            transform: translateY(-4px);
        }
    }
`

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  height: 120px;
  overflow-x: auto;
  position: fixed;
  margin-left: 5%;
  width: 83%;
  align-items: center;
  background: white;
  z-index: 1;
`;

const ArrowWrapper = styled.div`
  margin-top: 10px;
  margin-left: 40px;
  margin-right: 40px;

`;

const Arrow = styled.div`
    left: 0;
    display: flex;
    flex-direction: row;
    height: 120px;
    overflow-x: auto;
    position: fixed;
    width: 5%;
    align-items: center;
    background: white;
    z-index: 1;
    
`

const Container = styled.div`
  background: #faf0e0;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
`;

const ProdGrid = styled.div`
    .productlist {
        position: absolute;
        width: 70%;
        margin-top: 160px;
        //height: 100%;
        display: flex;
        margin-left: 50px;
        display: grid;
        gap: 2rem;
        z-index: 0;

        @media screen and (min-width: 768px) {
            grid-template-columns: repeat(auto-fit, minmax(177px, 1fr));
        }
    }

    .clicked{
        background: #F9C91E;
        border-radius: 1rem;
        padding: 1rem 2rem;
        transition: all 0.2s ease-in;

        &:hover {
            transform: translateY(-4px);
        }

        h1{
            margin-top: 0.5rem;
        }
        h2{
            color: #617d98;
            font-size: 0.9rem;
            margin-top: 0.25;
        }
    }
    .unclicked{
        background: #fff;
        border-radius: 1rem;
        padding: 1rem 2rem;
        transition: all 0.2s ease-in;

        &:hover {
            transform: translateY(-4px);
            background: #F3D9A4;
        }
        h1{
            margin-top: 0.5rem;
        }

        h2{
            color: #617d98;
            font-size: 0.9rem;
            margin-top: 0.25;
        }
    }
    .image{
        height: 150px;
        width: 150px;
    }

`;

const Wrapper = styled.div`
  /* background: rgb(255,140,140);
  background: linear-gradient(63deg, rgba(255,140,140,1) 0%, rgba(250,240,224,1) 60%, rgba(113,237,184,1) 100%); */
  width: 100%;
  height: 100%;
  display: flex;
`;

export default ViewMenu;