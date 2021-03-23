import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Buttons extends Component {
    state = {
        isClicked: true
    };

    buttonClickAlert(){
       alert("You just clicked a button!");
    };

    render() { 
        return ( 
            <Container fluid>

                {/* insert logo here */}

                <Row sm md lg="auto">
                    <Col sm md lg="auto" className="mx-auto mt-5">
                        <h4> Select customer type:</h4>
                    </Col>
                </Row>
                {/* REGULAR OR PRIORITY? */}
                <Row sm md lg="auto">
                    <Col sm md lg="auto" className="m-auto">
                        <Button
                            onClick={this.buttonClickAlert}
                            variant="secondary"
                            size="lg"
                            className="mx-5">
                                Regular
                        </Button>{' '}
                        <Button
                            onClick={this.buttonClickAlert}
                            variant="secondary"
                            size="lg"
                            className="mx-5">
                                Priority
                        </Button>{' '}
                        
                    </Col>
                </Row>
                {/* DINE IN OR TAKE OUT? */}
                <Row sm md lg="auto">
                    <Col sm md lg="auto" className="m-auto">
                        <Button
                            onClick={this.buttonClickAlert}
                            variant="secondary"
                            size="lg"
                            className="m-5">
                                Dine In
                        </Button>{' '}
                        <Button
                            onClick={this.buttonClickAlert}
                            variant="secondary"
                            size="lg"
                            className="m-5">
                                Take Out
                        </Button>{' '}
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
export default Buttons;