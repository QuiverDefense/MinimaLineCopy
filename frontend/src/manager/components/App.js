import styled from "styled-components";
import bgImg from '../../assets/food.png'
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Main from "./Main";
import StoreReg from "./StoreReg";
import Terms from "./Terms";
import ViewMenu from "./ViewMenu";
import EditMenu from "./EditMenu";
import Dashboard from "./Dashboard";
import * as Customer from '../../customer/components';
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
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/customer" exact component={Customer.App} />
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
  background-image: url(${bgImg});
  background-color: #fd8d8c; 
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
`;

export default App;