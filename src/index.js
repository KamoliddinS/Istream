import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserContextProvider } from 'context/dashboard-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>
);

