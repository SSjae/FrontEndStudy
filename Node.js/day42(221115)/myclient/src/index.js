import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Request from "./Request.jsx"
import Day02A1 from './Day02/Day02A1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Request /> */}
    <Day02A1 />
  </React.StrictMode>
);