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
<<<<<<< HEAD
        <>
=======
        <div>
>>>>>>> 86f0ee596d11d49bcad1447ef7c3304a9d858776
          <Link to='/sign-in'>
            <button onClick={()=>this.renderView(1)}>Manager</button>
          </Link>
          <button onClick={()=>this.renderView(2)}>Cashier</button>
          <Link to='/c'>
            <button onClick={()=>this.renderView(3)}>Customer</button>
          </Link>
          {this.state.clicked===1 ? <Manager.App/> : null}
          {this.state.clicked===3 ? <Customer.App/> : null}
<<<<<<< HEAD
        </>
     );
  }
}
=======
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
>>>>>>> 86f0ee596d11d49bcad1447ef7c3304a9d858776
 
export default SelectMode;