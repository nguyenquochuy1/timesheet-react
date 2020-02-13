import React from 'react';
import { fireStore , fireAuth } from '../firebase';
import {Link} from 'react-router-dom';

class Register extends React.Component {
	
	constructor(props){
		
		super(props);
		this.state = {
			userName: '',
			workPlace:'',
			workPart : '',
			fullName:'',
			email: '',
			password: '',
			typeUser : false,
			error: null
		}

		
	}

	writeUserData(){

        // if(uid === uid){
        //     return false;
        // }
		let userId = fireAuth.currentUser.uid;
		console.log(userId);
        var {fullName, typeUser, workPart, workPlace ,userName } = this.state;
        let data = {
            // fullName : this.state.fullName, // ten cot trong bang : ten cua state
            // typeUser : false,
            // workPart : this.state.workPart,
            // workPlace : this.state.workPlace,
            // userName : this.state.userName
            fullName , typeUser ,  workPart , workPlace, userName
        }
        let setDoc = fireStore.collection('User').doc(userId).set(data);
        
        return setDoc;

    }
	

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
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

		this.writeUserData();  
	}

	render(){
		const {email, userName, workPlace, workPart, fullName, password, error} = this.state;
		return(
			<div className="auth--container">
				<img src="header_logo.png" alt="Smiley face" />
				<p className="intro-text">Sing up to make new your account</p>
				{error && <p className="error-message">{error.message}</p>}
				
				<form onSubmit={this.handleSubmit}>
					
					<label htmlFor="username">ユーザー�?</label>
					<input type="text" 
						   name="userName"
						   id="username" 
						   value={userName}
						   autoComplete = "off"
						   required 
						   onChange={this.handleChange} />

					<label htmlFor="workplace">事業所</label>
					<input type="text" 
						   name="workPlace"
						   id="workplace" 
						   value={workPlace}
						   autoComplete = "off"
						   required 
						   onChange={this.handleChange} /> 

					<label htmlFor="workpart">部�?</label>
					<input type="text" 
						   name="workPart"
						   id="workpart" 
						   value={workPart}
						   autoComplete = "off"
						   required 
						   onChange={this.handleChange} />

					<label htmlFor="fullname">氏名 </label>
					<input type="text" 
						   name="fullName"
						   id="fullname" 
						   value={fullName}
						   autoComplete = "off"
						   required 
						   onChange={this.handleChange} />    

					<label htmlFor="email">メールアドレス</label>
					<input type="text" 
						   name="email" 
						   id="email" 
						   value={email} 
						   autoComplete = "off"
						   required
						   onChange={this.handleChange} />

					<label htmlFor="password">パスワー�?</label>
					<input
						type="password"
						name="password"
						id="password"
						value={password}
						autoComplete = "off"
						required
						onChange={this.handleChange} />
					<button className="general-submit" children="登録" />

					<p>すでにアカウントをお持ちですか?�? <Link className="login-btn" to="/login">ここでログイン</Link></p>
				
				</form>
			</div>
		);
	}
}

export default Register;
//exports.api = functions.region("asia-east2").https.onRequest(app);
