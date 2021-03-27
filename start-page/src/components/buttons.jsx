import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiArrowRightCircle } from "react-icons/fi";

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

    // state = {
    //     isClicked: true
    // }; 

    render() { 
        return ( 
            <Container fluid>
                <Row sm md lg="auto">
                    <Col sm md lg="auto" className="mx-auto">
                        <h5 style={{marginTop: 20}}> 
                            Select customer type:
                        </h5>
                    </Col>
                </Row>
                {/* REGULAR OR PRIORITY? */}
                <Row sm md lg="auto">
                    <Col sm md lg="auto" className="m-auto">
                        <Button //regular
                            onClick={() => {this.changeColor(0)}}
                            variant = {this.state.blueButtonId === 0 ? "primary": "secondary"}
                            size="lg"
                            style={{marginTop: 20}}
                            className= "mx-5">
                             Regular
                        </Button>{' '}
                        <Button //priority
                            onClick={() => {this.changeColor(1)} }
                            variant = {this.state.blueButtonId === 1 ? "primary": "secondary"}
                            size="lg"
                            style={{marginTop: 20, width: 110}}
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
                            variant = {this.state.blueButtonId === 3 ? "primary": "secondary"}
                            size="lg"
                            style={{marginRight:5, width:100}}
                            className="m-5">
                                Dine In
                        </Button>{' '}
                        <Button
                            onClick={() =>{this.changeColor(4)}}
                            variant = {this.state.blueButtonId === 4 ? "primary": "secondary"}
                            size="lg"
                            className="m-5">
                                Take Out
                        </Button>{' '}
                    </Col>
                </Row>
                <Row sm md lg="auto">
                    <Col sm md lg="auto" className="m-auto">
                    <a href="https://github.com/CMSC-129A-Projects/MinimaLine"
                       style={{color: '#C59C6C'}}>
                        <FiArrowRightCircle size='50px'/>
                    </a>
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
export default Buttons;