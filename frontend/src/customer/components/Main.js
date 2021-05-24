import React, { Component } from 'react';
import styled from 'styled-components';
// import logo from '../../assets/logo.svg';
import {IconContext} from 'react-icons';
import {FiArrowRightCircle} from 'react-icons/fi';
import RegularPriority from './RegularPriority';
import DineInTakeOut from './DineInTakeOut';
import {Link} from 'react-router-dom';

class Main extends Component {
  constructor(){
    super();
    this.state = {
      isPrioritySelected: false, // either regular or priority has been clicked
      isInputComplete: false // regular/priority and dine in/takeout have been clicked
    }
    this.priorityClick = this.priorityClick.bind(this);
    this.completeInput = this.completeInput.bind(this);
  }
  priorityClick(){
    this.setState({isPrioritySelected: true})
  }
  completeInput(){
    this.setState({isInputComplete: true})
  }

  render() { 
    return (
      <Container>
        <Box>

          <LogoWrapper>
            {/* <img src={logo} alt="MinimaLine logo"/> */}
            <h3> Minima<span>Line</span> </h3>
          </LogoWrapper>

          <Buttons1 onClick={this.priorityClick}> {/* input buttons; show regular/priority first; */}
            <RegularPriority />
          </Buttons1>

          <Buttons2 onClick={this.completeInput}> {/* render dine in/takeout on click */}
            {this.state.isPrioritySelected ? <DineInTakeOut/> : null}
          </Buttons2>

          <Link to='/prod-select' style={{textDecoration:'none'}}>
            <IconContext.Provider value={{size: '50px', color: '#808080'}}>
              <NextButtonWrapper> {/* render only when customer types are complete */}
                {this.state.isInputComplete ? <FiArrowRightCircle/> : null }
              </NextButtonWrapper>
            </IconContext.Provider>
          </Link>

        </Box>
      </Container>
     );
  }
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  background-color: rgba(255, 255, 255, 1);
  width: 450px;
  height: 550px;
  border-radius: 1rem;
  box-shadow: 0px 5px 10px -2px #858585;

  @media (max-width: 900px) {
    width: 350px;
  }

  @keyframes fadeIn{
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% { 
      opacity: 1;
      transform: translateY(0px);
    }
  }
  animation: fadeIn 1s;
`;
const LogoWrapper = styled.div`
  width: 450px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 10px;

  img{
    margin: 20px 35px 0px;
    width: 50%;
    height: 50%;
    padding-bottom: 0px;
  }

  h3{
    text-align:center;
    /* color: #f9c91e; */
    color: #ec9736;
    font-size: 22px;
  }

  span{
    color: #568d33;
    font-weight: 300;
    font-size: 18px;
  }

  @media (max-width: 900px) {
  width: 350px;
  }
`;
const Buttons1 = styled.div`
  width: 450px;
  height: 90px;
  margin-top: 40px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 900px) {
    width: 350px;
  }
`;
const Buttons2 = styled.div`
  width: 450px;
  height: 130px;
  margin-top: 10px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 900px) {
  width: 350px;
  } 
`;
const NextButtonWrapper = styled.div`
  width: 450px;
  height: 100px;
  display: flex;
  justify-content: center;

  a:hover{
    transform: translateY(3px);
  }

  @media (max-width: 900px) {
  width: 350px;
  }
`;

export default Main;