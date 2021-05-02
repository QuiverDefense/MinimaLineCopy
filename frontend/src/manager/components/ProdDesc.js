import React, { Component } from "react";
import styled from "styled-components";
import EditMenuInput from "./EditMenuInput";
import UploadPhoto from "./UploadPhoto";

class ProdDesc extends Component {

    render() { 
        return ( 
            <Container>
                <img src={this.props.product_img}/>
                {this.props.mode==="edit" ? 
                    <Upload
                        type="file"
                        name="photo"
                        autocomplete="off"
                    />
                : null
                } 
                {this.props.mode==="edit" ? 
                    <EditMenuInput placeholder={this.props.product_name} name="product name" />
                    : <h1>{this.props.product_name}</h1>
                }
                {this.props.mode==="edit" ? 
                    <EditMenuInput placeholder={this.props.product_price} name="product price" />
                    : <h3>{this.props.product_price}</h3>
                }
                {this.props.mode==="edit" ? 
                    <div>
                        {(() => {
                            if(this.props.product_availability==true){
                                return(
                                    <Select>
                                        <option selected value={this.props.product_availability}>Available</option> 
                                        <option value={!this.props.product_availability}>Not Available</option>
                                    </Select>
                                )
                            } else {
                                return(
                                    <Select>
                                        <option value={this.props.product_availability}>Available</option> 
                                        <option selected value={!this.props.product_availability}>Not Available</option>
                                    </Select>
                                )
                            } 
                        })()}
                    </div>
                : <h3>{this.props.product_availability ? "Available" : "Not Available"}</h3>
                }
                {this.props.mode==="edit" ? 
                    <Buttons>
                        <button className="save">Save Changes</button>
                        <button className="cancel">Cancel</button>
                    </Buttons>
                : null
                }
            </Container>
         );
    }
}

const Buttons = styled.div`
    display: flex;
    // flex-direction: column;

    button{
        font-family: "Work Sans";
        margin: 30px 5px 0px;
        width: 130px;
        height: 40px;
        border: none;
        box-shadow: 0px 14px 9px -15px rgba(0,0,0,0.25);
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease-in;

        &:hover{
            transform: translateY(-3px);
        }  
    }
    .save{
        color: black;
        background-color: #F9C91E;
    }

    .cancel{
        color: #fff;
        background-color: #FF5C5C;
    }
    @media screen and (max-width: 1024px) {
        flex-direction: column;
        .save{
            margin: 40px 5px 0px;
        }
        .cancel{
            margin: 10px 5px 10px;
        }
    }  
`

const Upload = styled.input`
    margin-top: 10px;
    margin-bottom: 10px;
    @media screen and (max-width: 1024px) {
        margin-left: 80px;
    }  
`

const Select = styled.select`
    display: flex;
    width: 280px;
    // width: 100%;
    // max-width: 700px;
    /* min-width: 150px; */
    height: 40px;
    border: none;
    margin: 1rem 0 0;
    background-color: #f5f5f5;
    box-shadow: 0px 14px 9px -15px rbga(0,0,0,0.25);
    border-radius: 8px;
    padding: 0 1rem;
    transition: all 0.2s ease-in;

    &:hover {
        transform: translateY(-3px);
    }

    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1024px) {
        width: 185px;
        padding: 0 0.5rem;
    }
`

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

export default ProdDesc;