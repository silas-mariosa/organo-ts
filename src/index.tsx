import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!); //O sinal de "!" vai garantiar para o código em tempo de compilação
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);