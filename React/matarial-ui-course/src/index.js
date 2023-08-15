import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material';

const [mode, setMode] = useState(false)
const Theme = createTheme({
  palette: {
    mode: mode ? "dark" : "light"
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <App setMode={setMode} />
    </ThemeProvider>
  </React.StrictMode>
);