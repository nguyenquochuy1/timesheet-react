

import firebase from 'firebase/app';


  // Your web app's Firebase configuration
  var config = {
    apiKey: "AIzaSyCWsLlER-JJlGaiNznGZ1RdgE1bbbiLFww",
    authDomain: "login-timesheet.firebaseapp.com",
    databaseURL: "https://login-timesheet.firebaseio.com",
    projectId: "login-timesheet",
    storageBucket: "login-timesheet.appspot.com",
    messagingSenderId: "20380916858",
    appId: "1:20380916858:web:31634aec7ec3404815efc3",
    measurementId: "G-6B0JT17MF7"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
//   firebase.analytics();

  export default firebase;