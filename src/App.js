// import React from 'react';
// import {BrowserRouter as Router , Route ,Switch  } from 'react-router-dom';

// import Nav from './Nav';
// import Products from './Products/Products';
// import Trendius from './Trendius/Trendius';
// import Engineering from './Engineering';
// import Plantmore from './Plantmore/Plantmore';
// import Prespectives from './Prespectives/Prespectives';
// import Company from './Company/Company';

// function App() {
//   return (
//     <>
//     <Router>
//         <Nav/>
//       <Switch>
//           <Route exact path="/">

//           </Route>
//           <Route exact path="/products">
//               <Products/>
//           </Route>
//           <Route exact path="/trendius">
//             <Trendius/>
//           </Route>
//           <Route exact path="/company/career">
//             <Career/>
//           </Route>
//         </Switch>
//     </Router>
      
//     </>
//   );
// }

// export default App;



import React from 'react';
import Nav from './Component/Nav'

function App(){
  return(
    <div>
      <Nav />
    </div>
  );
}

export default App;