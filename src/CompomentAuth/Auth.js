import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import User from './User';
// import firebase from '../firebase/app';


const Auth  = (props) => { 
   return User.isLoggedIn() ? props.children : <Redirect to={'/login'} />;
   // const loginStatus = new LoginPage();
   // const loginFuction = loginStatus.login();
   
   // return loginFuction ? props.children : <Redirect to={'/login'} /> ;

}
export default Auth;

// class Auth extends Component {
//    state = {
//      user: null
//    }
 
//    componentDidMount() {
//      firebase.auth().onAuthStateChanged(user => {
//        this.setState({ user })
//      })
//    }
//    //componentDidMountはrenderが実行された後に行われる。データの受け渡しが可能な状態になったら下記のコードが実行されていく。
//    //onAuthstateChangeでuserにログインしたユーザーの情報を与える
 
//   login() {
//      const provider = new firebase.auth.GoogleAuthProvider()
//      firebase.auth().signInWithRedirect(provider)
//    }
//    //signInWithRedirectでGoogleのログインページに接続して、Google プロバイダ オブジェクトのインスタンスを作成する。
//    logout() {
//      firebase.auth().signOut()
//    }
 
//    render() {
//      return (
//        <div className="Auth">
//          {this.state.user ? (
//             <h1 className="UserName">{this.state.user && this.state.user.displayName}の家計簿</h1>
//             // displayNameでログインした人のGoogleアカウントに登録されている名前を表示する
//          ) : (
//             <h1 className="Name">あなたの家計簿</h1>
//  　　　　　　//ログインしていない人用の表示
//          )}
//          {this.state.user ? (
//            <button onClick={this.logout}>Google Logout</button>
//  　　　　　　//ユーザーがログインしている時はlogoutボタンを表示する
//          ) : (
//            <button onClick={this.login}>Google Login</button>
//  　　　　　　//ユーザーがいない時はloginボタンを表示する
//          )}
//        </div>
//      )
//    }
//  }
 
//  export default Auth