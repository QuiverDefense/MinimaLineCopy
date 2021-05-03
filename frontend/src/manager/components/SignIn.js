import React,{ useEffect, useState, response } from "react";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import Input from "./Input";
import {Link} from 'react-router-dom';
import Axios from "axios"

function SignIn(){

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const login = () => {
    Axios.post("http://localhost:3005/user-login", {
      username: username,  
      password: password
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="" />
        <h3>
          Minima<span>Line</span>
        </h3>
      </LogoWrapper>
      <Form>
        <form>
          <h3>Sign In</h3>
          <Input 
            type="text" 
            placeholder="Username" 
            name="username" 
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            />
          <Input 
            type="password" 
            placeholder="Password" 
            name="password" 
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Link to="/dashboard">
            <button type="submit" onClick={login}> Sign In </button>
          </Link>
        </form>
      </Form>
      <div>
        <h4>
         Don't have an account?  
            <Link to='/sign-up' style={{textDecoration:'none'}}>
            <span>  Sign Up</span>
            </Link>
        </h4>

      </div>
    </Container>
  );
};

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3{
        color: #666666;
        margin-bottom: 2rem;
        margin-left: 165px;
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

export default SignIn;