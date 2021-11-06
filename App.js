import React from 'react'
import { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
const App = (props) => {
  return <>
      <div className="container">
      <img className="image"   src={props.api} alt="not found"></img>
      <h1 className="name">{props.name}</h1>
      <p className="working">Working as a {props.work} </p>

      </div>
      

     </>
}

export default App
