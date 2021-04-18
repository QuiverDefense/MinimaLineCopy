import React from "react";
import styled from "styled-components";
import UploadLogo from "./UploadLogo";
import Input from "./Input";
import {Link} from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";

const StoreReg = () => {
  return (
    <Container>
      <ArrowWrapper>
        <Link to="/sidebar">
          <BiArrowBack size="40px" color="#676666"/>
        </Link>
      </ArrowWrapper>
      <Form>
        <h2>Store Registration</h2>
        <Input placeholder="Store Name" />
        <Input placeholder="Branch" />
        <Input placeholder="Manager" />
        <p>Store Logo</p>
        <UploadLogo placeholder="Logo" />
        <button>Submit</button>
      </Form>
    </Container>
  );
};

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 200px;
    margin-right: 50px;

    h2{
        color: #666666;
        margin-bottom: 1rem;
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

    input{
      margin: 0.7rem 0;
    }

    p{
      margin-top: 5px;
      color: #757575;
      font-weight: bold; 
   }
`;

const ArrowWrapper = styled.div`
  margin-top: 50px;
  margin-left: 30px;
`;

const Container = styled.div`
  min-width: 600px;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.5);
  height: 100%;
  display: flex;
  // flex-direction: column;
  justify-content: space-evenly;
  // align-items: center;
  // padding: 0 2rem;

  @media (max-width: 900px){
      width: 100vw;
      position: absolute;
      padding 0;
  }
`;

export default StoreReg;