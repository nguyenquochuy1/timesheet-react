import React from 'react';
import {fireAuth} from '../firebase';
import {Link} from 'react-router-dom';

class Register extends React.Component {
	
	constructor(props){
		
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			error: null
		}

		
	}
	

	handleChange = e => {
		this.setState({[e.target.name]: e.target.value});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		var {email,password} = this.state;
		
		
		fireAuth
			.createUserWithEmailAndPassword(email, password)
			.then(() => {
				this.props.history.push('/successfull');
			})
		.catch(error => {
			this.setState({error});
		});	
	}

	render(){
		const {email, username, password, error} = this.state;
		return(
			<div className="auth--container">
				<img src="header_logo.png" alt="Smiley face" />
				<p className="intro-text">Sing up to make new your account</p>
				{error && <p className="error-message">{error.message}</p>}
				
				<form onSubmit={this.handleSubmit}>
					
					<label htmlFor="username">Username</label>
					<input type="text" 
						   name="username"
						   id="username" 
						   value={username} 
						   onChange={this.handleChange} />   

					<label htmlFor="email">Email address</label>
					<input type="text" 
						   name="email" 
						   id="email" 
						   value={email} 
						   onChange={this.handleChange} />

					<label htmlFor="password">Choose a password</label>
					<input
						type="password"
						name="password"
						id="password"
						value={password}
						onChange={this.handleChange} />
					<button className="general-submit" children="Sign up" />

					<p>Already have an account? <Link className="login-btn" to="/login">Login here</Link></p>
				
				</form>
			</div>
		);
	}
}

export default Register;
//exports.api = functions.region("asia-east2").https.onRequest(app);
