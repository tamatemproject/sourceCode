import React from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import customTheme from './assets/themes/Default/Theme';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="contained" color="primary">primary</Button>
        <Button variant="contained" color="secondary">secondary</Button>
        <Button variant="contained" >Default</Button>
      </header>
      </div>
  );
}

export default App;
