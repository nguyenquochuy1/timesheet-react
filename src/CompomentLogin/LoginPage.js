import React from 'react';
import '../LoginPage.css';

import { Link } from 'react-router-dom';
import { fireAuth } from '../firebase'




class LoginPage extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            email: '',
			password: '',
			error: null,
			onNoRefresh : false
        }
        this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		
		const {email, password} = this.state;

		fireAuth
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				
				this.onNoRefresh();
				return this.props.history.push('/timesheet');
				
					
			})
			.catch(error => {
				this.setState({error});
			});

		// fireAuth
		// 	.setPersistence(fireAuth.SESSION)
		// 	.then(() => {
		// 		// var provider = new fireAuth.GoogleAuthProvider();
		// 		return fireAuth.signInWithEmailAndPassword(email, password);
		// 	})
	}
	onNoRefresh = () => {
		var userid = fireAuth.currentUser.uid;
		var useridLocal = localStorage.setItem('firebase:uid',userid);
		if (userid === useridLocal) {
			this.setState({
				onNoRefresh : true
			});
		}
	}

    render() {
        
		const {email, password, error} = this.state;
		// if (onNoRefresh) {	
		
		return(
			
			<div className="auth--container">
				{/* <h1>Login</h1> */}
                <img src="header_logo.png" alt="Smiley face" />
				<p className="intro-text">Login to access your account</p>
				{error && <p className="error-message">{error.message}</p>}
				<form className="login-form" onSubmit={this.handleSubmit}>
					<label htmlFor="email">メールアドレス</label>
					<input type="email" 
						   name="email" 
						   id="email" 
						   placeholder="Email" 
						   value={email} 
						   onChange={this.handleChange} />
					<label htmlFor="password">パスワード</label>
					<input 
						type="password"
						name="password"
						id="password"
						placeholder="Password" 
						value={password}
						onChange={this.handleChange}
					/>
					<button className="general-submit">ログイン</button>
					<p>まだアカウントを持っていないのですか？ <Link className="login-btn" to="/register">ここに登録</Link></p>
				</form>
			</div>
		);;
    }
}
export default LoginPage;



