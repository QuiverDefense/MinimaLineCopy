import React, { Component } from 'react';
import styled from 'styled-components';

class RegularPriority extends Component {
    constructor(){
        super();
        this.state = {
            clickRegular: false,
            clickPriority: false
        }
        this.changeColor = this.changeColor.bind(this);
    }
    changeColor(id){
        if(id===1)
            this.setState({
                clickRegular: true,
                clickPriority: false
            });
        else
            this.setState({
                clickRegular: false,
                clickPriority: true
            });
    }
    render() { 
        return ( 
            <div>
                <StyledButtons
                    type="button"
                    value="Regular"
                    selected={this.state.clickRegular}
                    onClick={()=>this.changeColor(1)}
                />

                <StyledButtons
                    type="button"
                    value="Priority"
                    selected={this.state.clickPriority}
                    onClick={()=>this.changeColor(2)}
                />
            </div>

         );
    }
}

const StyledButtons = styled.input`
    margin: 0px 30px 20px;
    padding: 10px 15px;
    width: 120px;
    background-color: ${props => props.selected ? '#f9c91e' : 'transparent'};
    border-radius: 8px;
    border: ${props => props.selected ? '2px solid #f9c91e' : '2px solid #676666'};
    font-size: 20px;
    color: ${props => props.selected ? 'black' : '#676666'};;

    :hover{
        background-color: ${props => props.selected ? '#f9c91e' : 'transparent'};
        border: 2px solid #f9c91e;
        color: ${props => props.selected ? 'black' : '#f9c91e'};
        transform: translateY(3px);
    }

    @media (max-width: 900px) {
        margin: 0px 20px 10px;
        padding: 10px 15px;
        width: 110px;
    }
    
`;

export default RegularPriority;