import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import Login from './component/auth/Login';  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <Login />
  </React.StrictMode>
); 
