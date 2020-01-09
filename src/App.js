import React from 'react';

import './App.css';

import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import TimeSheet from './CompomentTimeSheet/TimeSheet'
import LoginPage from './CompomentLogin/LoginPage'      

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
          <Route exact path="/" component={LoginPage}/>
          <Route exact path="/timesheet" component={TimeSheet}/>
          {/* <Auth>
            <Switch>
              <Route exact path="/" component={Top}/>
              <Route exact path="/page" component={Page}/>
            </Switch>
          </Auth> */}
        </Switch>
      </Router>
      
  
      
    );
  }
}
export default App;
