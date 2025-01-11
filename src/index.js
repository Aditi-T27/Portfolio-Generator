import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import T1 from './Template/Template1/T1'
import T2 from './Template/Template2/T2'
import T3 from './Template/Template3/T3'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
