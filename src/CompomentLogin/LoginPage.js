import React from 'react';
import '../LoginPage.css';

class LoginPage extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {

        }

    }
    render() {
        return(
            <div id="body">
                <div className="login-card">
                    <img src="header_logo.png" alt="Smiley face" />
                    <div className="title">ログイン画面</div><br />
                    <form id="register_form" action="" method="post" onsubmit>
                        <input type="text" name="username" id="username" placeholder="Username" />
                        <input type="password" name="password" id="password" placeholder="Password" />
                        <input type="submit" name="submit" className="login login-submit" defaultValue="ログイン" />
                    </form>
                </div>
            </div>
        );
    }
}
export default LoginPage;



