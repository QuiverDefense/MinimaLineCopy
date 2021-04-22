import styled from "styled-components";
import bgImg from '../../assets/food.png'
import SignIn from "./SignIn";
import Sidebar from "./Sidebar";
import Main from "./Main";
import StoreReg from "./StoreReg";
import Terms from "./Terms";
import ViewMenu from "./ViewMenu";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Container>
      <Wrapper>
        <Switch>
          <Route path="/sign-in" exact component={SignIn} />
          <Route path="/sign-up" exact component={Sidebar} />
          <Route path="/terms" exact component={Terms} />
          <Route path="/store-reg" exact component={StoreReg} />
          <Route path="/view-menu" exact component={ViewMenu} />
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