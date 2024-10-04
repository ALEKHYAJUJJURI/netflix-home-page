import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './App.css'
import { HomePage } from './home';
import { WhatWeDo } from './page2';
import { NetflixHome } from './mui-component/netflix';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

