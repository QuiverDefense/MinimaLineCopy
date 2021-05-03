// import React,{ useEffect, useState, response } from "react";
import React, { Component } from 'react';
import Axios from "axios"
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import Input from "./Input";
import {Link,Redirect} from 'react-router-dom';

class SignUp extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    }
    this.register = this.register.bind(this);
  }
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  register = e => {
    const data = this.state;
    console.log('hello this is your input:',data)
    e.preventDefault();
    Axios.post('http://localhost:3005/user-registration',
      data).then((response) => {
      console.log(response.data);
    })
  };

  render(){
    return (
      <Container>
        <LogoWrapper>
          <img src={logo} alt="" />
          <h3>
            Minima<span>Line</span>
          </h3>
        </LogoWrapper>

        <Form onSubmit={this.register}>
          <h3>Sign Up</h3>
            <InputContainer>
              <StyledInput 
                type="text" 
                placeholder="Username" 
                name="username"
                value={this.state.username} 
                required
                autocomplete="off"
                onChange={this.handleChange.bind(this)}
              />
              <Status />
            </InputContainer>
            <InputContainer>
              <StyledInput 
                type="email" 
                placeholder="Email" 
                name="email" 
                value={this.state.email} 
                required
                autocomplete="off"
                onChange={this.handleChange.bind(this)}
              />
              <Status />
            </InputContainer>
            <InputContainer>
              <StyledInput 
                type="password" 
                placeholder="Password" 
                name="password"
                value={this.state.password} 
                required
                autocomplete="off"
                onChange={this.handleChange.bind(this)}
              />
              <Status />
            </InputContainer>
            {/* <Link to='/store-reg'> */}
              <button type="submit"> Sign Up </button>
            {/* </Link> */}
        </Form>
        
        <div>
          <Terms>
            By signing up, I agree to the
              <Link to='/terms' style={{textDecoration:'none'}}>
                <span> Privacy Policy <br /> and Terms of Service</span>
              </Link>
          </Terms>
          <h4>
            Already have an account? 
              <Link to='/' style={{textDecoration:'none'}}>
                <span>  Sign In</span>
              </Link>
          </h4>
        </div>
      </Container>
    );
  }
};

const Terms = styled.p`
    padding: 0 1rem;
    text-align: center;
    font-size: 10px;
    color: #808080;
    font-weight: 300;
`;
const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3{
        color: #666666;
        margin-bottom: 2rem;
    }

    button{
        margin-left: 45px;
        margin-top: 10px;
        width: 75%;
        max-width: 350px;
        min-width: 250px;
        height: 40px;
        border: none;
        box-shadow: 0px 14px 9px -15px rgba(0,0,0,0.25);
        border-radius: 8px;
        background-color: #70edb9;
        color: #fff;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease-in;
        
        &:hover{
            transform: translateY(-3px);
        }
    }
`;

const LogoWrapper = styled.div`
    img{
        height: 6rem;
    }

    h3{
        text-align:center;
        color: #ff8d8d;
        font-size: 22px;
    }

    span{
        color: #5dc399;
        font-weight: 300;
        font-size: 18px;
    }

`;

const Container = styled.div` 
  min-width: 400px;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.5);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 900px){
      width: 100vw;
      position: absolute;
      padding: 0;
  }

  h4 {
      color: #808080;
      font-weight: bold;
      font-size: 13px;
      margin-top: 2rem;

      span {
          color: #ff8d8d;
          cursor: pointer;
      }
  }
`;
const InputContainer  = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledInput = styled.input`
    width: 80%;
    max-width: 450px;
    min-width: 350px;
    height: 40px;
    border: none;
    margin: 0.5rem 0;
    background-color: #f5f5f5;
    box-shadow: 0px 14px 9px -15px rbga(0,0,0,0.25);
    border-radius: 8px;
    padding: 0 1rem;
    transition: all 0.2s ease-in;

    &:hover {
        transform: translateY(-3px);
    }
`;

const Status = styled.div`
  height: 10px;
  width: 10px;
  background: #9d9d9d;
  border-radius: 10px;
  margin-left: 1rem;

  ${StyledInput}:focus + & {
    background: #ffa689;
  }
  ${StyledInput}:invalid + & {
    background: #fe2f75;
  }
  ${StyledInput}:valid + & {
    background: #70edb9;
  }
`;
export default SignUp;