import React from 'react';
import {BrowserRouter as Router , Route ,Switch  } from 'react-router-dom';
import Nav from './Component/Nav';
import Engineering from './Component/Engineering/Acoustics/Acoustics';




function App(){
  return(
    <Router>
      <Nav />
      <Switch>
        <Engineering />
      </Switch>
    </Router>
  );
}

export default App;