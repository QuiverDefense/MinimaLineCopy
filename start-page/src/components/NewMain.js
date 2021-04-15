import React from 'react';
import styled from 'styled-components';
import logo from '../assets/MINIMALINE.png';

const Main = () => {
    return (
      <Container>
        <Wrapper>
            {/* <img src={logo}/> */}
        </Wrapper>
      </Container>
    );
  };
  
  const Container = styled.div`
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

    // @media (max-width: 900px) {
    //     background: blue;
    // }
  `;

  const Wrapper = styled.div`
    background-color: white;
    box-shadow: 0px 0px 10px 3px gray;
    display: flex;
    width: 450px;
    height: 500px;


    @media (max-width: 900px) {
        width: 350px;
        height: 500px;
    }
  `;
  
  export default Main;