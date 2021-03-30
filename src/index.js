import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'proxy-polyfill/proxy.min.js';

import React from 'react';
import ReactDOM from 'react-dom';

import PersonContextProvider from './contexts/PersonContextProvider';

import IrpfApp from './apps/IrpfApp';
import reportWebVitals from './reportWebVitals';

import './index.css';

function render() {

  ReactDOM.render(
   <React.StrictMode>
    <PersonContextProvider>
      <IrpfApp />
    </PersonContextProvider>
  </React.StrictMode>,
    document.getElementById('root')
  );
}

render();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
