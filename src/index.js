import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from '../node_modules/react-router-dom/dist/index';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('wrap'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);

