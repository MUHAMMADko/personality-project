import React from 'react';
import  ReactDOM  from 'react-dom';
import App from './App';
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <center><h1 id="index">MY TECH COMPANY</h1></center>
    <App name="Faisal" work="Frontend developer" api="https://joeschmoe.io/api/v1/Faisal"/>
    <App name="Ayaan " work="Backend developer" api="https://joeschmoe.io/api/v1/Ayaan"/>
    <App name="Asad" work="Database manager" api="https://joeschmoe.io/api/v1/Asad"/>
    <App name="Aman" work="API user" api="https://joeschmoe.io/api/v1/Aman"/>
  </React.StrictMode>,
  document.getElementById('root')
);