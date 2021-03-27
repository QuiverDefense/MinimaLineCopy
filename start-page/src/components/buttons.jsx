import React, { Component } from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiArrowRightCircle } from "react-icons/fi";
import logo from './MINIMALINE.png';

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
            <div className="white-box shadow-lg p-3 mb-5 bg-white rounded">
                <Container>
                    {/* LOGO */}
                    <Row sm md lg="auto">
                        <Col sm md lg ="auto" className="m-auto">
                            <img className="logo" src={logo} alt="MinimaLine logo"/>
                        </Col>
                    </Row>
                    {/* REGULAR OR PRIORITY? */}
                    <Row sm md lg="auto">
                        <Col sm md lg="auto" className="m-auto">
                            <Button
                                onClick={() => {this.changeColor(0)}}
                                variant = {this.state.blueButtonId === 0 ? "warning": "outline-secondary"}
                                size="lg"
                                style={{width: 120, marginTop: 20}}
                                className="mx-3 mb-5">
                                Regular
                            </Button>{' '}
                            <Button
                                onClick={() => {this.changeColor(1)} }
                                variant = {this.state.blueButtonId === 1 ? "warning": "outline-secondary"}
                                size="lg"
                                style={{width: 120, marginTop: 20}}
                                className="mx-3 mb-5">
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
                                style={{width: 120}}
                                className="mx-3 mb-5">
                                    Dine In
                            </Button>{' '}
                            <Button
                                onClick={() =>{this.changeColor(4)}}
                                variant = {this.state.blueButtonId === 4 ? "warning": "outline-secondary"}
                                size="lg"
                                style={{width: 120}}
                                className="mx-3 mb-5">
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