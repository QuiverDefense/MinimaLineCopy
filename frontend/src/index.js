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
<<<<<<< HEAD
=======
        <div>
>>>>>>> 86f0ee596d11d49bcad1447ef7c3304a9d858776
          <Switch>
            <Route path="/" exact component={SelectMode} />
            <Route path="/sign-in" exact component={Manager.App} />
            <Route path="/c" exact component={Customer.App} />
          </Switch>
<<<<<<< HEAD
      </Router>
=======
        </div>
      </Router>
    {/* <SelectMode /> */}
>>>>>>> 86f0ee596d11d49bcad1447ef7c3304a9d858776
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
