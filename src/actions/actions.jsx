import firebase, {firebaseRef, twitterProvider} from '../firebase/index.js';

export var addPoll = (poll)=>{
  return {
    type: "ADD_POLL",
    poll
  }
}


export var startLogin = () => {
  return (dispatch, getState)=>{
    return firebase.auth().signInWithPopup(twitterProvider).then((result )=>{
      console.log("Auth Worked", result);
    }, (error)=>{
      console.log("Unable to Auth.", error);
    });
  };
}

export var startLogout = () => {
  return (dispatch, getState)=>{
    return firebase.auth().signOut().then(()=> {
  console.log("Logged out!");
});
  };
}

export var login = (uid, name, photoURL) =>{
  return {
    type: "LOGIN",
    uid,
    name,
    photoURL
  }
}

export var logout = ()=>{
  return {
    type: "LOGOUT"
  }
};
