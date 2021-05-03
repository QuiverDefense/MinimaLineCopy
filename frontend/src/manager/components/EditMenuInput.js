import React from 'react'
import styled from "styled-components";

const EditMenuInput = ({type, placeholder, name}) => {
    return (
      <Container>
        <StyledInput
          placeholder={placeholder && placeholder}
          type={type ? type : "text"}
          name={name}
          autocomplete="off"
        />
      </Container>
    );
};

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

const Container  = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

export default EditMenuInput;