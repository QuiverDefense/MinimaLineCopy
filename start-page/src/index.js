import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Buttons from './components/buttons';
import Logo from './components/logo';


ReactDOM.render(
  <React.StrictMode>
    <Logo />
    <Buttons />
  </React.StrictMode>,
  document.getElementById('root')
);