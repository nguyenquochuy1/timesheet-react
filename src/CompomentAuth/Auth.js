import React from 'react';
import { Redirect } from 'react-router-dom';
import User from './User';
import LoginPage from '../CompomentLogin/LoginPage';
import TimeSheet from '../CompomentTimeSheet/TimeSheet';

class Auth {
   
   
   const Auths  = (props) => { 
     // return User.isLoggedIn() ? props.children : <Redirect to={'/login'} />;
     const loginStatus = new LoginPage;
     if (loginStatus.login) {
        return TimeSheet;
     }
   }
}
export default Auth;