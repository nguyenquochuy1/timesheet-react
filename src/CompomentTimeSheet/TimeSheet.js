import React from 'react';
import Title from '../CompomentTitle/Title';
import Time from '../CompomentSetTime/Time';
import InputInfor from '../CompomentInput/InputInfor';
import TableTime from '../CompomentTableTime/TableTime';
import Warning from '../ComponentWarning/Warning';
import ProsessingTest from '../CompomentProssesTest/ProsessingTest';
import TableAgree from '../CompomentTableAgreement/TableAgree';
import LoginPage from '../CompomentLogin/LoginPage';
import Popup from '../CompomentPopup/Popup';



class TimeSheet extends React.Component{

    constructor(prop){
        super(prop);
        this.state = {
          
          status : false,
          showPopup : false
        //   isLoggedIn : true
        }

    }

    togglePopup = () => {  
		this.setState({  
			 showPopup: !this.state.showPopup  
		});  
	}  

    render(){
        // var {aaa} = this.state;
        var {status, email} = this.state; // var status = this.state.status;
        var {user} = this.props;   // var user = this.props.user;
        // var {isLoggedIn} = this.state;
        if (user) {
            return (
                <div className="container-fluid newstyle">
                    <Title/>
                    <div className="container">
                        <div className={status === false ?'statusRender':'row'}>
                            <Time taskTaskTime/>
                            <InputInfor userName ={email} />
                            <TableTime status = {this.state.status} />
                            <Warning/>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <ProsessingTest/>
                                <TableAgree/>
                            
                            </div>
                        </div>
                    </div>

                    <button onClick={this.togglePopup}> Click To Launch Popup</button>  
                        {this.state.showPopup ?  
                        <Popup  
                            text='Click "Close Button" to hide popup'  
                            closePopup={this.togglePopup}  
                        />  
                        : null  
                }

                </div>
            );
        }else{
           return(
            <div>
                

                <div className="disallow-chat">
                {/* <p><Link to="/login">Login</Link> or <Link to="/register">Register</Link> to start chatting!</p> */}
                <LoginPage/>
                </div>

            </div>
           );
        }
        
    }

}

export default TimeSheet;