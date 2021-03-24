import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Buttons extends Component {
    constructor(){
        super();
        this.state = {
            bgColor: 'secondary',  
            blueButtonId: null
        }
       this.changeColor = this.changeColor.bind (this);
    }
    
    changeColor(id){
        this.setState({
            blueButtonId: this.state.blueButtonId === id ? null : id
            
        })
    }

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
                        <h4 style={{marginTop:110}}> 
                            Select customer type:
                        </h4>
                    </Col>
                </Row>
                {/* REGULAR OR PRIORITY? */}
                <Row sm md lg="auto">
                    <Col sm md lg="auto" className="m-auto">
                        <Button //regular
                            onClick={() => {this.changeColor(0); this.buttonClickAlert()}}
                            variant = {this.state.blueButtonId === 0 ? "primary": "secondary"}
                            size="lg"
                            style={{marginTop: 50}}
                            className= "mx-5">
                             Regular
                        </Button>{' '}
                        <Button //priority
                            onClick={() => {this.changeColor(1); this.buttonClickAlert()} }
                            variant = {this.state.blueButtonId === 1 ? "primary": "secondary"}
                            size="lg"
                            style={{marginTop: 50, width: 110}}
                            className="mx-5">
                                Priority
                        </Button>{' '}
                        
                    </Col>
                </Row>
                {/* DINE IN OR TAKE OUT? */}
                <Row sm md lg="auto">
                    <Col sm md lg="auto" className="m-auto">
                        <Button
                            //onClick={this.buttonClickAlert}
                            onClick={() =>{this.changeColor(3); this.buttonClickAlert()}}
                            //variant="secondary"
                            variant = {this.state.blueButtonId === 3 ? "primary": "secondary"}
                            size="lg"
                            style={{marginRight:5, width:100}}
                            className="m-5">
                                Dine In
                        </Button>{' '}
                        <Button
                           // onClick={this.buttonClickAlert}
                            onClick={() =>{this.changeColor(0); this.buttonClickAlert()}}
                           // variant="secondary"
                            variant = {this.state.blueButtonId === 4 ? "primary": "secondary"}
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