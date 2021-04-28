import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import Input from "./Input";
import {Link} from 'react-router-dom';

const SignUp = () => {
  return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="" />
        <h3>
          Minima<span>Line</span>
        </h3>
      </LogoWrapper>
      <Form>
        <h3>Sign Up</h3>
        <form>
          <Input placeholder="Username" name="username" />
          <Input type="email" placeholder="Email" name="email" />
          <Input type="password" placeholder="Password" name="password"/>
          <Link to={{
            pathname: '/store-reg'}}>
            <button type="submit"> Sign Up </button>
          </Link>
        </form>
        
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
            <Link to='/sign-in' style={{textDecoration:'none'}}>
              <span>  Sign In</span>
            </Link>
        </h4>
      </div>
    </Container>
  );
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
        width: 75%;
        max-width: 350px;
        min-width: 250px;
        height: 40px;
        border: none;
        margin: 1rem 0;
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

export default SignUp;