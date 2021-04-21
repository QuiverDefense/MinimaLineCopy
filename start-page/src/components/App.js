import styled from "styled-components";
import Main from "./Main";

const App = () => {
  return (
      <Container>
      <Wrapper>
        <Main />
      </Wrapper>
    </Container>
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
  background: rgb(255,140,140);
  background: linear-gradient(63deg, rgba(255,140,140,1) 0%, rgba(250,240,224,1) 60%, rgba(113,237,184,1) 100%);
  width: 100%;
  height: 100%;
  display: flex;
`;

export default App;

//#C59C6C