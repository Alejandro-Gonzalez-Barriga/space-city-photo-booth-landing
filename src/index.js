import React from 'react';
import ReactDOM from 'react-dom'; // React 16 import
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Use ReactDOM.render for React 16
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
