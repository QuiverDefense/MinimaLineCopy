import React, { Component } from 'react';
import './style.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiArrowRightCircle } from "react-icons/fi";
import logo from './MINIMALINE.png';

class Main extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         bgColor: 'outline-secondary',  
    //         blueButtonId: null
    //     }
    //    this.changeColor = this.changeColor.bind (this);
    // }
    // changeColor(id){
    //     this.setState({
    //         blueButtonId: this.state.blueButtonId === id ? null : id
    //     })
    // }
    // variant = {this.state.blueButtonId === 0 ? "warning": "outline-secondary"}
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
                                variant = "outline-secondary"
                                size="lg"
                                style={{width: 120}}
                                className="mx-3 mb-5">
                                Regular
                            </Button>{' '}
                            <Button
                                variant = "outline-secondary"
                                size="lg"
                                style={{width: 120}}
                                className="mx-3 mb-5">
                                    Priority
                            </Button>{' '}
                        </Col>
                    </Row>
                    
                    {/* DINE IN OR TAKE OUT? */}
                    <Row sm md lg="auto">
                        <Col sm md lg="auto" className="m-auto">
                            <Button
                                variant = "outline-secondary"
                                size="lg"
                                style={{width: 120}}
                                className="mx-3 mb-5">
                                    Dine In
                            </Button>{' '}
                            <Button
                                variant = "outline-secondary"
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
 
export default Main;