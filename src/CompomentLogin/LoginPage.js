import React from 'react';
import '../LoginPage.css';
import fire from 'firebase/app';
import TimeSheet from '../CompomentTimeSheet/TimeSheet';
require('firebase/auth');


class LoginPage extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            email: '' , 
            password : ''
        }

    }

    handleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        // console.log(name);
        // console.log(value);
        this.setState({ 
            [name]:value 
        });
    }


    login = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
            console.log("success");
            
            return true;
            // console.log(true);
            // return true;
            //console.log(this.state.email-this.state.password);
        }).catch((error) => {
            console.log(error);

            console.log(this.state.email-this.state.password);
            return false;
          });
        return true;
    }


    signup = (e) => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).then((u)=>{console.log(u)})
        .catch((error) => {
            console.log(error);
            alert(error);
          })

    }

    render() {
        return(
            <div id="body">
                <div className="login-card">
                    <img src="header_logo.png" alt="Smiley face" />
                    <div className="title">ログイン画面</div><br />
                    <form id="register_form" action="" method="post" onSubmit = {this.loginFunction}>
                        <input onChange={this.handleChange} value={this.state.email} type="text" name="email" id="username" placeholder="Username" />
                        <input onChange={this.handleChange} value={this.state.password} type="password" name="password" id="password" placeholder="Password" />
                        <button type="submit" onClick={this.login} className="btn btn-primary">ログイン</button>
                        <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">登録</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default LoginPage;



