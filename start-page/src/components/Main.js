import React from 'react';
import styled from 'styled-components';
import logo from '../assets/MINIMALINE.png';
import {FiArrowRightCircle} from 'react-icons/fi';
// import CustomerInput from './CustomerInput'

const Main = () => {
    return (
      <Container>
        <Box>
          <LogoWrapper>
            <img src={logo} alt="MinimaLine logo"/>
          </LogoWrapper>
          {/* <CustomerInput/> */}
          <NextButtonWrapper>
            <FiArrowRightCircle size='50px'color='#808080'/>
          </NextButtonWrapper>
        </Box>
      </Container>
    );
  };
  
  const Container = styled.div`
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
  `;

  const Box = styled.div`
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 10px 2px #858585;
    width: 450px;
    height: 550px;

    @media (max-width: 900px) {
        width: 350px;
    }
  `;

  const LogoWrapper = styled.div`
    width: 450px;
    height: 150px;
    display: flex;
    justify-content: center;

    img{
      margin: 30px;
    }

    @media (max-width: 900px) {
      width: 350px;
    }
  `;
  
  const NextButtonWrapper = styled.div`
    width: 450px;
    height: 300px;
    margin-top: 40px;
    display: flex;
    justify-content: center;

    @media (max-width: 900px) {
      width: 350px;
    }
  `;
  export default Main;