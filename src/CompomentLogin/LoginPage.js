import React from 'react';
import '../LoginPage.css';

class LoginPage extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            // userName : userName,
            // passWord : passWord,
            //submitName : 'ログイン',
            email: '' , 
            password : ''

        }

    }

    checkLogin = (event) => {
        // var {userName , passWord} =  this.state;
        // var target = event.target;
        // var userName = target.username;
        // var passWord = target.password;
        
        // if((userName && passWord) == null){
        //     console.log('Vui long dang nhap');
        // }
    }

    loginFunction = (event) => { 
        // var target = event.target;
        // var userName = target.username;
        // var passWord = target.password;
        
        // if((userName && passWord) == null){
        //     console.log('Vui long dang nhap');
        // }
    }


    render() {
        return(
            <div id="body">
                <div className="login-card">
                    <img src="header_logo.png" alt="Smiley face" />
                    <div className="title">ログイン画面</div><br />
                    <form id="register_form" action="" method="post" onSubmit = {this.loginFunction}>
                        <input onChange={this.checkLogin} type="text" name="username" id="username" placeholder="Username" />
                        <input onChange={this.checkLogin} type="password" name="password" id="password" placeholder="Password" />
                        <input type="submit" name="submit" className="login login-submit" defaultValue={this.state.submitName}  />
                    </form>
                </div>
            </div>
        );
    }
}
export default LoginPage;



