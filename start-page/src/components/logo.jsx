import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import logo from './MINIMALINE.png';

class Logo extends Component {
    render() { 
        return ( 
            <div className="logo-white-box">
                <Container>
                    <Row sm md lg="auto">
                        <Col sm md lg ="auto" className="m-auto">
                            <img className="logo" src={logo} alt="MinimaLine logo"/>
                        </Col>
                    </Row>
                </Container>
            </div>
         );
    }
}
 
export default Logo;