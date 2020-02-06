import React from 'react';
import firebase from '../firebase';
import {Link} from 'react-router-dom';

const functions = require('firebase-functions');

var admin = require("firebase-admin");

var serviceAccount = require("./login-timesheet-09ca63aa14bf.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://login-timesheet.firebaseio.com"
});

class Register extends React.Component{
	
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

	handleSubmit = e => {
		const express = require('express'); 
		const app = express();
		// app.post('/singup',(req , res) =>{   // singup 
		// 	const newUser = {
		// 		email : req.body.email,
		// 		password : req.body.password,
		// 		confirmPassword : req.body.confirmPassword,
		// 		handle : req.body.handle
		// 	};
		
		// 	firebase
		// 		.auth()
		// 		.createUserWithEmailAndPassword(newUser.email,newUser.password)
		// 		.then((data) =>{
		// 			return res
		// 			.status(201)
		// 			.json({message: `document ${data.user.id} created successfully`});
		// 		})
		// 		.catch(err =>{ // catch để bat loi va hien thi message
		// 			res.status(500).json({ error : 'Something went wrong' });
		// 			console.error(err);
		// 		});
		// });

		app.post('/singup',(req , res) =>{
			e.preventDefault();
			const {email, username, password} = this.state;
			firebase
				.auth()
				.createUserWithEmailAndPassword(email, password)
				.then((data) => {
					const user = firebase.auth().currentUser;
					
					user
						.updateProfile({displayName: username})
						.then(() => {
							this.props.history.push('/');
						})
						.catch(error => {
						this.setState({error});
					});
					return res
						.status(201)
						.json({message: `document ${data.user.id} created successfully`});
				})
				.catch(error => {
					res.status(500).json({ error : 'Something went wrong' });
					console.error(error);
					this.setState({error});
				});
		});
	}

	render(){
		const {email, username, password, error} = this.state;
		return(
			<div className="auth--container">
				<h1>Register your account</h1>
				{error && <p className="error-message">{error.message}</p>}
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="username">Username</label>
					<input type="text" name="username" id="username" value={username} onChange={this.handleChange} />
					<label htmlFor="email">Email address</label>
					<input type="text" name="email" id="email" value={email} onChange={this.handleChange} />
					<label htmlFor="password">Choose a password</label>
					<input
						type="password"
						name="password"
						id="password"
						value={password}
						onChange={this.handleChange}
					/>
					<button className="general-submit" children="Get Started" />
					<p>Already have an account? <Link className="login-btn" to="/login">Login here</Link></p>
				</form>
			</div>
		);
	}
}

export default Register;
exports.api = functions.region("asia-east2").https.onRequest(app);
