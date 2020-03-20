import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { LogsProvider } from './contexts/LogsContext'
import './index.css';
import App from './components/App/App';

ReactDOM.render(
  <BrowserRouter>
    <LogsProvider>
      <App />
    </LogsProvider>
  </BrowserRouter>, 
  document.getElementById('root'));


