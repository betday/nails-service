import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css'; 
import App from './App';
import './App.css'; 

import { ThemeProvider, createTheme } from '@mui/material/styles'; 


const theme = createTheme();

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
