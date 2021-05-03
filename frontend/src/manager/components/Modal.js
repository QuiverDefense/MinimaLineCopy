import React, { Component } from 'react';
import styled from 'styled-components';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Container>
                <Header> </Header>
                <Body> </Body>
                <Footer> </Footer>
            </Container>
         );
    }
}
 
export default Modal;