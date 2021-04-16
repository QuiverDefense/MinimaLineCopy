import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../assets/MINIMALINE.png';
import {IconContext} from 'react-icons';
import {FiArrowRightCircle} from 'react-icons/fi';
import RegularPriority from './RegularPriority';
import DineInTakeOut from './DineInTakeOut';

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
             <img src={logo} alt="MinimaLine logo"/>
           </LogoWrapper>

           <Buttons1 onClick={this.priorityClick}> {/* input buttons; show regular/priority first; */}
              <RegularPriority />
           </Buttons1>

           <Buttons2 onClick={this.completeInput}> {/* render dine in/takeout on click */}
              {this.state.isPrioritySelected ? <DineInTakeOut/> : null}
           </Buttons2>

          <IconContext.Provider value={{size: '50px', color: '#808080',}}>
            <NextButtonWrapper> {/* render only when customer types are complete */}
              {this.state.isInputComplete ? <FiArrowRightCircle/> : null }
            </NextButtonWrapper>
          </IconContext.Provider>

           
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
  margin: 35px;
  }

  @media (max-width: 900px) {
  width: 350px;
  }
`;
const Buttons1 = styled.div`
  width: 450px;
  height: 90px;
  margin-top: 40px;
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

  @media (max-width: 900px) {
  width: 350px;
  }
`;

export default Main;