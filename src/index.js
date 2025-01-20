import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './index.css';
import App from './App';
import { ColorContextProvider } from "./ColorContext/ColorContext"; // Import the provider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ColorContextProvider>  {/* Wrap the App with the provider */}
      <App />
    </ColorContextProvider>
  </React.StrictMode>
);
