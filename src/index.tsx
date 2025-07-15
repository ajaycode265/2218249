import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { authenticate, log } from './api/logging';

authenticate({
  email: 'ajaykapruwan265@gmail.com',
  rollNo: '2218249',
  clientId: 'c10a515d-007f-46fe-b847-356c8b76f7bb',
  clientSecret: 'ahsGRWfySChfJZeJ',
  accessCode: 'QAhDUr'
})
  .then(() => log('frontend', 'info', 'api', 'App authenticated'))
  .catch(console.error);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
