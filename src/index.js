import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contex from './Context/Context'



ReactDOM.render(
  <React.StrictMode>
  <Contex>

    <App />
</Contex>
  </React.StrictMode>,
  document.getElementById('root')
);


