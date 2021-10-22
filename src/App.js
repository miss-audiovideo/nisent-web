import React from 'react';
import {BrowserRouter as Router , Route ,Switch  } from 'react-router-dom';
import Nav from './Component/Nav';
import Engineering from './Component/Engineering/Acoustics/Acoustics';
import Acoustics from './Component/Engineering/Acoustics/Acoustics';
import Fitness from './Component/Engineering/Fitness/Fitness';
import FMEA from './Component/Engineering/FMEA/Fmea';
import Integrity from './Component/Engineering/Intergrity/Intergrity';





function App(){
  return(
    <Router>
      <Nav />

      <Switch>
        <Route path="/abc">
        <Engineering />
      
        </Route>
        <Route path="/def">
        <Acoustics/>
      
        </Route>
        <Route path="/qw">
        < Fitness/>
      
        </Route>
        <Route path="/rf">
        <FMEA />
      
        </Route>
        <Route path="/yt">
        <Integrity />
      
        </Route>
      </Switch>
    </Router>
  );
}

export default App;