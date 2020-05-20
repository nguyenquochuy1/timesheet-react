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
        var {togglePopup} = this.props;
        this.state = {

          input_1 : '',
          input_2 : '',
          input_3 : '',
          input_4 : '',
          inputWork: '',
          inputTimes : '',
          status : false,
          showPopup : togglePopup,
          dataPopup : {},
        }
        
        
    }
        
    dataPopup = (input_1, input_2, input_3, input_4, content, workplace) => {
        // console.log(input_1);
        this.setState(
            {
                dataPopup: {
                    data1: input_1,
                    data2: input_2,
                    data3: input_3,
                    data4: input_4,
                    dataContent: content,
                    dataWorkplace: workplace
                },
            }
        );
    }

    togglePopup = () =>{ 
		this.setState({  
             showPopup: !this.state.showPopup
        });
        // console.log(this.dataPopup()); 
	}  

    render(){
        var {status} = this.state; 
        var {user} = this.props; 
    
        if (user) {
            return (
                <div className="container-fluid newstyle">
                    <Title/>
                    <div className="container">
                        <div className={status === false ?'statusRender':'row'}>
                            <Time taskTaskTime/>
                            <InputInfor />
                            <TableTime dataPopup={this.state.dataPopup} 
                                       status = {this.state.status} 
                                       togglePopup = {this.togglePopup}
                                       
                                       />
                            <Warning/>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <ProsessingTest/>
                                <TableAgree/>
                            </div>
                        </div>
                    </div>
                    
                    {!this.state.showPopup ?  
                        <Popup   
                            closePopup={this.togglePopup}
                            dataPopup ={this.dataPopup}
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