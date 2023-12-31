import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider domain='dev-w8unvg7o5zi0f5us.us.auth0.com' clientId='NAnMMGOnxBvdlEzH9tZdF20ZGhfUorWm' redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
  </React.StrictMode>
);