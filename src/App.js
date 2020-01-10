import React from 'react';

import './App.css';


import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import TimeSheet from './CompomentTimeSheet/TimeSheet'
import LoginPage from './CompomentLogin/LoginPage'      
import Auth from './CompomentAuth/Auth';

class App extends React.Component{

  constructor(prop){
    super(prop);
    this.state = {
      aaa : 0,
      status : false,
      isLoggedIn : true
    }
  }


  render() {
    
    
    return (
      
      
<Router>
<Switch>
  <Route exact path="/login" component={LoginPage} />
  {/* <Route exact path="/logout" component={Logout} /> */}
  <Auth>
    <Switch>
      <Route exact path="/timesheet" component={TimeSheet} />
      {/* <Redirect from="/" to="/login" /> */}
    </Switch>
  </Auth>
</Switch>
</Router>
      
  
      
    );
  }
}
export default App;
