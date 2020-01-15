import React from 'react';
import { Redirect } from 'react-router-dom';
import User from './User';


const Auth  = (props) => { 
   return User.isLoggedIn() ? props.children : <Redirect to={'/login'} />;
   // const loginStatus = new LoginPage();
   // const loginFuction = loginStatus.login();
   
   // return loginFuction ? props.children : <Redirect to={'/login'} /> ;

}
export default Auth;