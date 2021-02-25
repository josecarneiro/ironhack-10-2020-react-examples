import React from 'react'; // ES Module Syntax
// const React = require('react'); // Common.js Syntax
import ReactDOM from 'react-dom';
import './index.css';
// require('./index.css');
import App from './App-class-based';
import reportWebVitals from './reportWebVitals';

// JSX

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
