import firebase from 'firebase';

if(process.env.NODE_ENV == 'production'){
  var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID
  };
  
} else {
  var config = require('../../config/config').config;
}


console.log(process.env.NODE_ENV);
console.log(config);
firebase.initializeApp(config);

export var twitterProvider = new firebase.auth.TwitterAuthProvider();
export var firebaseRef = firebase.database().ref();
export default firebase;
