import styled from "styled-components";
import chicken from '../../assets/chicken.png'
import glitter from '../../assets/glitter.png'
import circle from '../../assets/circle.png'
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Main from "./Main";
import StoreReg from "./StoreReg";
import Terms from "./Terms";
import ViewMenu from "./ViewMenu";
import EditMenu from "./EditMenu";
import Dashboard from "./Dashboard";
import ManageAccount from "./ManageAccount";
import * as Customer from '../../customer/components';
import * as Cashier from '../../cashier/components';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Container>
      <Wrapper>
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/sign-up" exact component={SignUp} />
          {/* <Redirect from="/sign-up" to ="/store-reg"/> */}
          <Route path="/terms" exact component={Terms} />
          <Route path="/store-reg" exact component={StoreReg} />
          <Route path="/view-menu" exact component={ViewMenu} />
          <Route path="/edit-menu" exact component={EditMenu} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/account" exact component={ManageAccount} />
          <Route path="/customer" exact component={Customer.App} />
          <Route path="/cashier" exact component={Cashier.App} />
        </Switch>
        <Main />
      </Wrapper>
    </Container>
    </Router>
  );
};

const Container = styled.div`
  background: #faf0e0;
  position: absolute;
  overflow: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const Wrapper = styled.div`
  background-image: url(${chicken}), url(${glitter}), url(${circle});
  background-color: #f3d9a4; 
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;

  /* @keyframes fadeInY{
    0% {
      opacity: 0;
      transform: translateY(-5px);
    }
    100% { 
      opacity: 1;
      transform: translateY(0px);
    }
  }
  animation: fadeInY 2s; */
`;

export default App;