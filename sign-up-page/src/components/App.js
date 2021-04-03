import styled from "styled-components";
import bgImg from '../assets/min.png'
import Sidebar from "./Sidebar";
import Main from "./Main";
import StoreReg from "./StoreReg";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Container>
      <Wrapper>
        <Switch>
          <Route path="/" exact component={Sidebar} />
          <Route path="/store-reg" exact component={StoreReg} />
        </Switch>
        <Main />
      </Wrapper>
    </Container>
    </Router>
  );
};

const Container = styled.div`
  background: #eefcff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const Wrapper = styled.div`
  background-image: url(${bgImg});
  background-position: center;
  background-size: cover;
  bacground-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
`;

export default App;
