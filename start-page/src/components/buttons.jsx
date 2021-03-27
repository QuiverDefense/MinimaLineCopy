import React, { Component } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiArrowRightCircle } from "react-icons/fi";

class Buttons extends Component {
    constructor(){
        super();
        this.state = {
            bgColor: 'outline-secondary',  
            blueButtonId: null
        }
       this.changeColor = this.changeColor.bind (this);
    }
    
    changeColor(id){
        this.setState({
            blueButtonId: this.state.blueButtonId === id ? null : id
            
        })
    }

    render() { 
        return ( 
            <div className="btns-white-box">
                <Container>
                    {/* REGULAR OR PRIORITY? */}
                    <Row sm md lg="auto">
                        <Col sm md lg="auto" className="m-auto">
                            <Button //regular
                                onClick={() => {this.changeColor(0)}}
                                variant = {this.state.blueButtonId === 0 ? "warning": "outline-secondary"}
                                size="lg"
                                // style={{marginTop: 70}}
                                className= "mx-5">
                                Regular
                            </Button>{' '}
                            <Button //priority
                                onClick={() => {this.changeColor(1)} }
                                variant = {this.state.blueButtonId === 1 ? "warning": "outline-secondary"}
                                size="lg"
                                style={{width: 110}}
                                className="mx-5">
                                    Priority
                            </Button>{' '}
                        </Col>
                    </Row>
                    {/* DINE IN OR TAKE OUT? */}
                    <Row sm md lg="auto">
                        <Col sm md lg="auto" className="m-auto">
                            <Button
                                onClick={() =>{this.changeColor(3)}}
                                variant = {this.state.blueButtonId === 3 ? "warning": "outline-secondary"}
                                size="lg"
                                style={{marginRight:5, width:100}}
                                className="m-5">
                                    Dine In
                            </Button>{' '}
                            <Button
                                onClick={() =>{this.changeColor(4)}}
                                variant = {this.state.blueButtonId === 4 ? "warning": "outline-secondary"}
                                size="lg"
                                style={{marginRight: 2}}
                                className="m-5">
                                    Take Out
                            </Button>{' '}
                        </Col>
                    </Row>
                    <Row sm md lg="auto">
                        <Col sm md lg="auto" className="m-auto">
                        <a href="https://github.com/CMSC-129A-Projects/MinimaLine"
                            target="_blank">
                            <FiArrowRightCircle size='50px'color='#C59C6C'/>
                        </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
 
export default Buttons;