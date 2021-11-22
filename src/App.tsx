import React from 'react';
import './App.css';
import { Button } from '@material-ui/core';;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="contained" color="primary">primary</Button>
        <Button variant="contained" color="secondary">secondary</Button>
        <Button variant="contained" >tertiary</Button>
      </header>
      </div>
  );
}

export default App;
