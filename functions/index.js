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

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello word");
});

exports.getScream = functions.https.onRequest((req, res) => {
    //response.send("Hello word");
    admin.firestore().collection('scream').get()
        .then(data => {
            let screams = [];
            data.forEach( doc => {
                screams.push(doc.data());
            });
            return res.json(screams);
        })
        .catch(err => console.error(err));
});

exports.createScream = functions.https.onRequest((req, res) => {
    //response.send("Hello word");
    const newScream = {
        body : req.body.body,
        userHandle : req.body.userHandle, 
        createAt: admin.firestore.Timestamp.fromDate(new Date())
    };

    admin
    .firestore()
        .collection('scream')
        .add(newScream)
        .then(doc =>{
            res.json({message: `document ${doc.id} created successfully`});
        })
        .catch(err =>{
            res.status(500).json({ error : 'Something went wrong'});
            console.error(err);
        })
});
