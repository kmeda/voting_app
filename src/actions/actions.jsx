import firebase, {firebaseRef, twitterProvider} from '../firebase/index.js';

export var addPoll = (poll)=>{
  return {
    type: "ADD_POLL",
    poll
  }
}

export var startAddPoll = (poll) => {
  return (dispatch, getState)=>{

    var uid = getState().auth.uid;
    var pollRef = firebaseRef.child(`users/${uid}/polls`).push(poll);

    pollRef.then(()=>{
      return;
    });
  };
}

export var addPolls = (polls)=>{
  return {
    type: "ADD_POLLS",
    polls
  }
}

export var startAddUserPolls = ()=>{
  return (dispatch, getState)=>{
    var uid = getState().auth.uid;
    var pollsRef = firebaseRef.child(`users/${uid}/polls`);

    return pollsRef.once("value").then((snapshot)=>{
        var polls = snapshot.val() || {};
        var parsedPolls = [];

        Object.keys(polls).forEach((pollId)=>{
          parsedPolls.push({
            id: pollId,
            ...polls[pollId]
          });
        });
        dispatch(addPolls(parsedPolls));
    });

  };
};

export var moreOptions = (inputCountArray)=>{
  return {
    type: "MORE_OPTIONS",
    inputCountArray
  }
}

export var captureInputs = (inputs) => {
  return {
    type: "CAPTURE_INPUTS",
    inputs
  }
}

export var validateInput = () => {
    return {
      type: "ON_VALID_INPUT"
    }
}

export var clearCapturedInputs = ()=>{
  return {
    type: "CLEAR_CAPTURED_INPUTS"
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
