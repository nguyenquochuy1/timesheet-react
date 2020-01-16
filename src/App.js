import React from 'react';

import './App.css';

import {
  BrowserRouter as Router,
  Route, Switch , Link
} from 'react-router-dom';
import TimeSheet from './CompomentTimeSheet/TimeSheet'
import LoginPage from './CompomentLogin/LoginPage'      
import Auth from './CompomentAuth/Auth';
import firebase  from './firebase';
import Register from './CompomentRegister/Register';


class App extends React.Component{

  constructor(prop){
    super(prop);
    this.state = {
      aaa : 0,
      status : false,
      isLoggedIn : true,
      user: null
    }
    this.logOutUser = this.logOutUser.bind(this);
  }

  componentDidMount(){
		firebase.onAuthStateChanged(user => {
			if(user){
				this.setState({
					user
				});
			}
		});
	}

  
  //  //localStorage
  // authListener = () => {
  //   fire.auth().onAuthStateChanged((user) => {
  //     console.log(user);
  //     if (user) {
  //       this.setState({ user });
  //       localStorage.setItem('key', user.uid);
  //     } else {
  //       this.setState({ user: null });
  //       localStorage.removeItem('key');
  //     }
  //   });
  // }

  logOutUser = () => {
		firebase.auth().signOut()
			.then(window.location = "/");
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
							<a href="#!" onClick={this.logOutUser}>Logout</a>
						}
					</nav>

					<Switch>
						<Route path="/" exact render={() => <TimeSheet user={this.state.user}/>} />
						<Route path="/login" exact component={LoginPage} />
						<Route path="/register" exact component={Register} />
						{/* <Route component={NoMatch} /> */}
					</Switch>
				</div>
			</Router>




      
      // <Router>
      //   <Switch>
      //     <Route exact path="/login" component={LoginPage} />
      //     {/* <Route exact path="/logout" component={Logout} /> */}
      //     <Auth>
      //       <Switch>
      //         <Route exact path="/timesheet" component={TimeSheet} />
      //         <Redirect from="/" to="/login" />
      //       </Switch>
      //     </Auth>
      //   </Switch>
      // </Router>
    );
  }
}
export default App;
