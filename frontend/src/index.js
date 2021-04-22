import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SelectMode from './SelectMode';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import * as Manager from './manager/components';
import * as Customer from './customer/components';

ReactDOM.render(
  <React.StrictMode>
    <Router>
          <Switch>
            <Route path="/" exact component={SelectMode} />
            <Route path="/sign-in" exact component={Manager.App} />
            <Route path="/c" exact component={Customer.App} />
          </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
