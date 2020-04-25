import React from 'react';

import './App.css';

import {
	BrowserRouter as Router,
	Route, Switch, Link
} from 'react-router-dom';
import TimeSheet from './CompomentTimeSheet/TimeSheet'
import LoginPage from './CompomentLogin/LoginPage'
import { fireAuth } from './firebase';

import Register from './CompomentRegister/Register';



class App extends React.Component {

	constructor(prop) {
		super(prop);
		// let authUser = null;
		// var storageId = 'firebase:uid';
		// for (let key in localStorage) {
		// 	if (key === storageId) {
		// 	  authUser = {};
		// 	  break;
		// 	}
		// }

		this.state = {
			status: false,
			isLoggedIn: true,
			user: null,
			showPopup : false,
		}
		this.logOutUser = this.logOutUser.bind(this);
		this.myRef = React.createRef();
		// this.copyNode = this.copyNode.bind(this);
		
	}

	copyNode = () => {
		
		//console.log(node);
		this.myRef.current.togglePopup();
	}

	componentDidMount() {
		fireAuth.onAuthStateChanged(user => {
			if (user) {
				this.setState({
					user : user
				});
			}
		});

	}

	logOutUser = () => {
		fireAuth.signOut()
			.then(window.location = "/login");
	}

	render() {

		return (
			<Router>
				<div className="app">
					<nav className="main-nav">
						{!this.state.user &&
							<div>
								<Link to="/login">ログイン</Link>
								<Link to="/register">登録</Link>
							</div>
						}

						{this.state.user &&
							<a href="/login" onClick={this.logOutUser}>
							ログアウト</a>
						}
					</nav>

					<Switch>
						
						<Route path="/login" component={LoginPage} />
						<Route path="/timesheet" render={() => <TimeSheet copyNode = {this.copyNode} showPopup={this.state.showPopup} user={this.state.user} ref={this.myRef} />} />
						<Route path="/register" component={() => <Register />} />
						{/* <Route path="/successfull" component={Successfull} /> */}
						<Route path="/" component={LoginPage} />
						{/* <Route component={NoMatch} /> */}
						
						

					</Switch>
				</div>
			</Router>

		);
	}
}

// const NoMatch = ({ location }) => <div>No route match for {location.pathname}</div>;
// const Successfull = () => <div> Successfull  </div>;
export default App;
