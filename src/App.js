import {React , } from 'react';
import Border from './compoment/Border';
import Calendar from 'react-calendar'


import { BrowserRouter as Router, Switch , Route} from 'react-router-dom'; 
 import User from './Pages/User';
import './App.css';

import Clients from './Pages/Clients';
// import Support from './Pages/Support';
// import Tram from './Pages/Team'; 
// import Messages from './Pages/Messages'; 

function App() {
 
  return (
  <>


    <Router>
<Border/>
<Switch>
  <Route path='/'  exact component={User} />
  <Route path='/ Clients' component={Clients} />
  <Calendar />

  {/* <Route path='/ Support' component={Support} />
  <Route path='/ Team' component={Team} />
  <Route path='/ Messages' component={Messages} /> */}
</Switch>
</Router>
   
    </>
  );
}

export default App;
