import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter, Link } from 'react-router-dom';

// 수정 내용
// ssj <BrowserRouter>// <React.StrictMode>
// </BrowserRouter>,  //</React.StrictMode>,

ReactDOM.render(
  
  <BrowserRouter>
    <App />
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
