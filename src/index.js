import { ThemeProvider, createTheme } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Router from 'routes';
import './index.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2A9F85'
    },
    secondary: {
      main: '#FF7070'
    },
  }
})

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);

// MODO ANTIGO (ANTES DA VERSÃO 18 DO REACT)
// ReactDOM.render(
//   <React.StrictMode>
//     <StyledEngineProvider injectFirst>
//       <ThemeProvider theme={theme}>
//         <Router />
//       </ThemeProvider>
//     </StyledEngineProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );