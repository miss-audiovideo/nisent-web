import React from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Nav from './Component/Nav';
// import Engineering from './Component/Engineering/Acoustics/Acoustics';
// import Acoustics from './Component/Engineering/Acoustics/Acoustics';
// import Fitness from './Component/Engineering/Fitness/Fitness';
// import FMEA from './Component/Engineering/FMEA/Fmea';
// import Integrity from './Component/Engineering/Intergrity/Intergrity';





function App(){
  return(
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/products/sentinel">
          <div>Hi</div>
        </Route>
        <Route exact path="/products/stream">
          <div>Hi2</div>
        </Route>
        <Route exact path="/trendius/predective">
          <div>Hi3</div>
        </Route>
        <Route exact path="/trendius/performance">
          <div>Hi4</div>
        </Route>
        <Route exact path="/engineering/acoustics">
          <div>Hi5</div>
        </Route>
        <Route exact path="/engineering/vibration">
          <div>Hi6</div>
        </Route>
        <Route exact path="/engineering/fmea">
          <div>Hi7</div>
        </Route>
        <Route exact path="/engineering/intergrity">
          <div>Hi8</div>
        </Route>
        <Route exact path="/engineering/surge">
          <div>Hi9</div>
        </Route>
        <Route exact path="/engineering/fitness">
          <div>Hi10</div>
        </Route>
        <Route exact path="/plant/turnaround">
          <div>Hi11</div>
        </Route>
        <Route exact path="/plant/balancing">
          <div>Hi12</div>
        </Route>
        <Route exact path="/plant/o&m">
          <div>Hi13</div>
        </Route>
        <Route exact path="/plant/commisioning">
          <div>Hi14</div>
        </Route>
        <Route exact path="/plant/ESP">
          <div>Hi15</div>
        </Route>
        <Route exact path="/plant/monitoring">
          <div>Hi16</div>
        </Route>
        <Route exact path="/whitepaper">
          <div>Hi17</div>
        </Route>
        <Route exact path="/resources">
          <div>Hi18</div>
        </Route>
        <Route exact path="/blogs">
          <div>Hi19</div>
        </Route>
        <Route exact path="/about">
          <div>Hi20</div>
        </Route>
        <Route exact path="/leadership">
          <div>Hi21</div>
        </Route>
        <Route exact path="/policies">
          <div>Hi22</div>
        </Route>
        <Route exact path="/sustanibility">
          <div>Hi23</div>
        </Route>
        <Route exact path="/careers">
          <div>Hi24</div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;