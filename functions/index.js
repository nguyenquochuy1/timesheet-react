const functions = require('firebase-functions');
var admin = require("firebase-admin");

var serviceAccount = require("./login-timesheet-09ca63aa14bf.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://login-timesheet.firebaseio.com"
});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

const express = require('express');
const app = express();

app.get('/scream',(req , res) =>{  //login
    admin
        .firestore()
        .collection('scream')
        .orderBy('createAt','desc')
        .get()
        .then(data => {
            let screams = [];
            data.forEach((doc) => {
                screams.push({
                    screamsId : doc.id,
                    body : doc.data().body,
                    userHandle : doc.data().userHandle,
                    createdAt : doc.data().createAt // gan tên trường mới : tên trương ở firebase
                });
            });
            return res.json(screams);
        })
        .catch((err) => console.error(err));
});

app.post('/scream',(req , res) =>{   // singup 
    const newScream = {
        body : req.body.body,
        userHandle : req.body.userHandle, 
        createdAt: new Date().toISOString()
    };

    admin
        .firestore()
        .collection('scream') // ten trong trường database 
        .add(newScream)
        .then(doc =>{
            res.json({message: `document ${doc.id} created successfully`});
        })
        .catch(err =>{ // catch để bat loi va hien thi message
            res.status(500).json({ error : 'Something went wrong' });
            console.error(err);
        });
});

// https://baseurl.com/api/
exports.api = functions.region("asia-east2").https.onRequest(app);
