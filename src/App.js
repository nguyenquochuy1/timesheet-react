import React from 'react';

import './App.css';

import {
  BrowserRouter as Router,
  Route, Switch , Link
} from 'react-router-dom';
import TimeSheet from './CompomentTimeSheet/TimeSheet'
import LoginPage from './CompomentLogin/LoginPage'      
import {fireAuth}   from './firebase';

import Register from './CompomentRegister/Register';


class App extends React.Component{

  constructor(prop){
    super(prop);
    this.state = {
      status : false,
      isLoggedIn : true,
      user: null,

      
    }
    this.logOutUser = this.logOutUser.bind(this);
  }

  componentDidMount(){
		fireAuth.onAuthStateChanged(user => {
			if(user){
				this.setState({
					user
				});
			}
		});
	}

  logOutUser = () => {
		fireAuth.signOut()
			.then(window.location = "/login");
  }
  
  


  render() {
    // var {user} = this.state;
    // if (user === null) {
    //   return LoginPage;
    // }

    
    
    return (
      
      
      <Router>
				<div className="app">
					<nav className="main-nav">
						{!this.state.user && 
							<div>
								<Link to="/login">Login</Link>
								<Link to="/register">Register</Link>
							</div>
						}

						{this.state.user && 
							<a href="/login" onClick={this.logOutUser}>Logout</a>
						}
					</nav>

					<Switch>
            
           <Route path="/login"  component={LoginPage} />  
						<Route path="/timesheet"  render={() => <TimeSheet user={this.state.user}
                                                              
                                                        />} />
            
            
						<Route path="/register"  component={Register} />
            <Route path="/successfull" component={Successfull} />
						<Route component={NoMatch} />
            
					</Switch>
				</div>
			</Router>
      
    );
  }
}
const NoMatch = ({location}) => <div>No route match for {location.pathname}</div>;
const Successfull = () => <div> Successfull  </div>;
export default App;
