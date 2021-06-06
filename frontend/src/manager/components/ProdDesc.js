import React, { Component } from "react";
import styled from "styled-components";
import Axios from 'axios';

class ProdDesc extends Component {
    constructor(props){
        super(props);
        this.state = {
            all_categs: [],
            prod_name: '',
            prod_price: '',
            prod_categ: '',
            prod_availability: this.props["availability"]
        }
        // this.showAvailability = this.showAvailability.bind(this)
    }
    handleChange(e){
        this.setState({
          [e.target.name]: e.target.value
        })
    }
    edit = e =>{
        const data = {
            product: this.state.prod_name,
            // price:
        }
    }
    async componentDidMount(){
        let categs = await Axios.get('http://localhost:3005/display-category');
        this.setState({
            all_categs: categs.data
        }) 
    }
    render() { 
        if (this.props.mode==="edit") {
            return (
                <Form>
                    <img src={this.props["photo"]}/>
                    <Upload
                        type="file"
                        name="photo"
                        autocomplete="off"
                    />
                    <StyledInput
                        placeholder={this.props["product"]}
                        type="text"
                        name="prod_name" 
                        autoComplete="off"
                        required
                        value={this.state.prod_name}
                        onChange={this.handleChange.bind(this)}
                    />
                    <StyledInput
                        placeholder={this.props["price"]}
                        type="text"
                        name="prod_price"
                        autoComplete="off"
                        required
                        value={this.state.prod_price}
                        onChange={this.handleChange.bind(this)}
                    />
                    {this.props["availability"]===1 ?
                        <Select
                            name="prod_availability"
                            value={this.state.prod_availability}
                            onChange={this.handleChange.bind(this)}>
                            <option selected value="1">Available</option> 
                            <option value="0">Not Available</option>
                        </Select> :
                        <Select
                            name="prod_availability"
                            value={this.state.prod_availability}
                            onChange={this.handleChange.bind(this)}>
                            <option value="1">Available</option> 
                            <option selected value="0">Not Available</option>
                        </Select>
                    }
                    <Select>
                        {this.state.all_categs.map((categ,index)=>{
                            return (
                                <option>{categ["name"]}</option>
                            )
                        })}
                    </Select>
                    <Buttons>
                        <button className="save">Save Changes</button>
                        <button className="cancel">Cancel</button>
                    </Buttons>
                </Form>
            );
        } else {
            return (
                <Container>
                    <img src={this.props["photo"]}/>
                    <h1>{this.props["product"]}</h1>
                    <h3>Php {this.props["price"]}</h3>
                    <h3>{this.props["availability"] ? "Available" : "Not Available"}</h3>
                </Container>
            );
        }
    }
}
const StyledInput = styled.input`
    width: 40%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    color: black;
    margin: 1rem 0 0;
    background-color: #f5f5f5;
    box-shadow: 0px 14px 9px -15px rbga(0,0,0,0.25);
    border-radius: 8px;
    padding: 0 1rem;
    transition: all 0.2s ease-in;

    &:hover {
        transform: translateY(-3px);
    }

    ::placeholder {
        color: black;
    }

    @media screen and (max-width: 1024px) {
      min-width: 150px;
      // padding: 0 0.5rem;
    }
`;

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
const Form = styled.form`
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