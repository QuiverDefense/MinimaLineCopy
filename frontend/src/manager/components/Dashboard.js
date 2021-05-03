import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../../assets/random.jpeg';
import {MdRestaurantMenu, MdAccountCircle} from 'react-icons/md';
import {AiOutlineUserSwitch} from 'react-icons/ai';
import {Link} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return ( 
      <Container>
        <div className="header">
          <HeaderCircle>
            <img src={logo}/>
          </HeaderCircle>
          <HeaderBar>
            <h1>Welcome, &lt;username&gt;.</h1>
          </HeaderBar>
        </div>

        <Body>
          <StyledLink to="/view-menu" style={{textDecoration:'none'}}>
              <MdRestaurantMenu className="icon" size="90px"/>
              <h2>View Menu</h2>
              <p>View and edit the restaurant menu.</p>
          </StyledLink>
          <StyledLink to="/dashboard" style={{textDecoration:'none'}}>
            <MdAccountCircle className="icon" size="90px"/>
            <h2>Account</h2>
            <p>Manage your account and restaurant information.</p>
          </StyledLink>
          <Option>
              <AiOutlineUserSwitch className="icon" size="90px"/>
              <h2>Switch Modes</h2>
              <p>Switch to Cashier Mode or Customer Mode.</p>
          </Option>
        </Body>

      </Container>
     );
  }
}

const Container = styled.div`
  position: absolute;
  overflow: auto;
  background-color: #faf0e0;
  height: 100%;
  width: 100%;
`;
const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* position: fixed; */
  background-color: transparent;
  margin-top: 260px;
  width: 100%;
  height: 100%;
`;
const HeaderCircle = styled.div`
  margin: 20px 0px 0px 130px;
  position: fixed;
  background-color: #f9c91e;
  width: 230px;
  height: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 200px 200px;
  border-bottom-left-radius: 200px 200px;
  border-top-right-radius: 200px 200px;
  border-bottom-right-radius: 200px 200px;
  box-shadow: 3px 3px 5px 3px #d6d6d6;
  z-index: 1;

  img{
    width: 210px;
    height: 210px;
    object-fit: cover;
    border-top-left-radius: 200px 200px;
    border-bottom-left-radius: 200px 200px;
    border-top-right-radius: 200px 200px;
    border-bottom-right-radius: 200px 200px;

    @keyframes fadeIn{
      0% {
        opacity: 0;
      }
      100% { 
        opacity: 1;
      }
    }
    animation: fadeIn 2s;
  }
`;
const HeaderBar = styled.div`
  margin: 65px 0px 0px 300px;
  position: fixed;
  background-color: white;
  width: 100%;
  height: 130px;
  display: flex;
  align-items: center;
  box-shadow: 8px 5px 5px 3px #d6d6d6;
  z-index: 0;

  h1{
    font-size: 50px;
    margin-left: 150px;

    @keyframes fadeInX{
      0% {
        opacity: 0;
        transform: translateX(-10px)
      }
      100% { 
        opacity: 1;
        transform: translateX(0px);
      }
    }
    animation: fadeInX 2s;

    @media screen and (max-width: 1200px){
      font-size: 40px;
      margin-left: 120px;
    }
  }

  
`;

const StyledLink = styled(Link)`
  height: 330px;
  width: 270px;
  background-color: white;
  box-shadow: 3px 6px 5px 3px #d6d6d6;
  border-radius: 8px;
  margin: 60px 70px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .icon{
    color: #676666;
    margin-top: 50px;
  }

  p{
    padding: 0px 10px;
    text-align: center;
    color: #676666;
    font-family: 'Lato';
  }

  h2{
    color: #676666;
  }

  :hover{
    transform: translateY(3px);
    cursor: pointer;
    background-color: #f9c91e;

    .icon{
      color: black;
    }
    p, h2{
      color: black;
    }
  }

  @keyframes fadeInY{
    0% {
      opacity: 0;
      transform: translateY(-5px);
    }
    100% { 
      opacity: 1;
      transform: translateY(0px);
    }
  }
  animation: fadeInY 2s;

  @media screen and (max-width: 1230px) {
    height: 310px;
    width: 250px;
    margin: 50px 40px;
    .icon{
      margin-top: 40px;
    }
  }
`;
const Option = styled.div`
  height: 330px;
  width: 270px;
  background-color: white;
  box-shadow: 3px 6px 5px 3px #d6d6d6;
  border-radius: 8px;
  margin: 60px 70px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .icon{
    color: #676666;
    margin-top: 50px;
  }

  p{
    padding: 0px 10px;
    text-align: center;
    color: #676666;
    font-family: 'Lato';
  }

  h2{
    color: #676666;
  }

  :hover{
    transform: translateY(3px);
    cursor: pointer;
    background-color: #f9c91e;

    .icon{
      color: black;
    }
    p, h2{
      color: black;
    }
  }

  @keyframes fadeInY{
    0% {
      opacity: 0;
      transform: translateY(-5px);
    }
    100% { 
      opacity: 1;
      transform: translateY(0px);
    }
  }
  animation: fadeInY 2s;

  @media screen and (max-width: 1230px) {
    height: 310px;
    width: 250px;
    margin: 50px 40px;
    .icon{
      margin-top: 40px;
    }
  }
`;
 
export default App;