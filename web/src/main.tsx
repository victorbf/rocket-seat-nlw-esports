import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';

import { App } from './App';
import { GamesContextProvider } from './contexts/GamesContext';
import './styles/main.css';

axios.defaults.baseURL = 'http://localhost:3333';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToastContainer
      theme="dark"
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      toastStyle={{ backgroundColor: "#2A2634" }}
    />

    <GamesContextProvider>
      <App />
    </GamesContextProvider>
  </React.StrictMode>,
);
