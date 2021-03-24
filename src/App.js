import React from 'react';
import {ThemeProvider} from '@material-ui/core';
import  Player  from './main/Player'; 
import { useTheme } from '@material-ui/core/styles';
import './App.css';

function App() {

  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
     
        <Player/>
     
    </ThemeProvider>
  );
}

export default App;
