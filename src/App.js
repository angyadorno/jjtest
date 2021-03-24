import React from 'react';
import {ThemeProvider} from '@material-ui/core';
import  JukeBox  from './pages/jukeNox.js'; 
import { useTheme } from '@material-ui/core/styles';
import './App.css';

function App() {

  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
     
        <JukeBox/>
     
    </ThemeProvider>
  );
}

export default App;
