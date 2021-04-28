import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import * as Manager from './manager/components';
import * as Customer from './customer/components';
import React, { Component } from 'react';
// import styled from 'styled-components';

class SelectMode extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        clicked: null
     }
     this.renderView = this.renderView.bind(this);
  }
  renderView(id){
    this.setState({
      clicked: id
    })
  }
  render() { 
    return ( 
        <div>
          <Link to='/sign-in'>
            <button onClick={()=>this.renderView(1)}>Manager</button>
          </Link>
          <button onClick={()=>this.renderView(2)}>Cashier</button>
          <Link to='/c'>
            <button onClick={()=>this.renderView(3)}>Customer</button>
          </Link>
          {this.state.clicked===1 ? <Manager.App/> : null}
          {this.state.clicked===3 ? <Customer.App/> : null}
        </div>
      
     );
  }
}

// const Container = styled.div`
//   button{
//     display: flex;
//     flex-direction: column;
//   }
// `;
 
export default SelectMode;