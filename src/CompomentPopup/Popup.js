import React from 'react';  
import './style.css'
import '../App.css'

class Popup extends React.Component {  
  
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

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}


  render() {
    var {fullName, email, workPart, workPlace, userName, password,   } = this.state;  
    return (  
    
    <div className='popup'>  
        <div className='popup_inner'>  
            {/* <h1>{this.props.text}</h1>   */}
            <button onClick={this.props.closePopup}>close me</button>
			<div className="auth--container">
			<form onSubmit={this.handleSubmit}>
					
					<label htmlFor="username">ユーザー名</label>
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

					<label htmlFor="workpart">部分</label>
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

					<label htmlFor="password">パスワード</label>
					<input
						type="password"
						name="password"
						id="password"
						value={password}
						autoComplete = "off"
						required
						onChange={this.handleChange} />
					<button className="general-submit" children="登録" />

				
				</form>
			</div>
              
        </div>  
    </div>  
        );  
    }  
}  

export default Popup;