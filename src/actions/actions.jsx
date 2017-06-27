import firebase, {firebaseRef, twitterProvider} from '../firebase/index.js';
import axios from 'axios';


//public polls reducer actions

export var startAddPoll = (poll) => {
  return (dispatch, getState)=>{

    var uid = getState().auth.uid;
    var userPolls = [];
    var publicPolls = [];

    var userPollsKeys = [];

    var userPollsRef = firebaseRef.child(`users/${uid}`).push(poll);

    userPollsRef.then(()=>{
        var fetchUserPolls = firebaseRef.child(`users/${uid}`);
            fetchUserPolls.once("value").then((snapshot)=>{
              userPolls = snapshot.val() || {};
              userPollsKeys = Object.keys(userPolls);

            });

        var fetchPublicPolls = firebaseRef.child(`users/publicPolls`);
            fetchPublicPolls.once("value").then((snapshot)=>{
              publicPolls = Object.keys(snapshot.val() || {});

              const filtered = userPollsKeys
                .filter(key => !publicPolls.includes(key))
                .reduce((obj, key) => {
                  obj[key] = userPolls[key];
                  return obj;
                }, {});

                // inject poll id into each poll
                var thisPoll = [];
                var obj = {};
                Object.keys(filtered).forEach((pollId)=>{
                  thisPoll.push({
                    id: pollId,
                    ...filtered[pollId]
                  });
                  obj[pollId] = thisPoll[0];
                })

                  var newobj = Object.assign({}, obj)


              var publicPollsRef = firebaseRef.child(`users/publicPolls`).update(newobj);
                  publicPollsRef.then(()=>{
                    return;
                  })

              var allUserPolls = firebaseRef.child(`users/publicPolls`);
                  allUserPolls.once("value").then((snapshot)=>{
                    var polls = snapshot.val() || {};
                    dispatch(clearPublicPolls());
                    dispatch(startAddPublicPolls());
                  })
            });
    });
  };
}

export var addPublicPolls = (publicPolls) => {
    return {
      type: "ADD_PUBLIC_POLLS",
      publicPolls
    }
}

export var clearPublicPolls = () => {
  return {
    type: "CLEAR_PUBLIC_POLLS"
  }
}

export var startAddPublicPolls = ()=>{
  return (dispatch, getState)=>{

    var pollsRef = firebaseRef.child(`users/publicPolls`);
    return pollsRef.once("value").then((snapshot)=>{
        var polls = snapshot.val() || {};

        dispatch(addPublicPolls(polls));
    });
  };
};

export var addUserPollsKeys = (userPollsKeys)=>{
  return {
    type: "GET_USER_POLLS_KEYS",
    userPollsKeys
  }
}

export var clearUserPollKeys = () => {
  return {
    type: "CLEAR_USER_POLL_KEYS"
  }
}

export var startAddUserPolls = ()=>{
  return (dispatch, getState)=>{
    var uid = getState().auth.uid;
    // grab users polls object keys
    var pollsRef = firebaseRef.child(`users/${uid}`);
    pollsRef.once("value").then((snapshot)=>{
      var polls = snapshot.val() || {};
      var pollKeys = Object.keys(polls);
      dispatch(addUserPollsKeys(pollKeys));
    });
  };
};


//poll input reducer actions
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


export var clearCapturedInputs = ()=>{
  return {
    type: "CLEAR_CAPTURED_INPUTS"
  }
}

//selectedOptionReducer actions
export var selectedOption = (selectedOption) =>{
  return {
    type: "SELECTED_OPTION",
    selectedOption
  }
}

export var clearSelectedOption = () => {
  return {
    type: "CLEAR_SELECTED_OPTION"
  }
}

//pollReducer actions
export var getPoll = (pollID)=>{
  //async action to get poll with pollID
  return (dispatch, getState)=>{
    var pollsRef = firebaseRef.child(`users/publicPolls/${pollID}`);
    return pollsRef.once("value").then((snapshot)=>{
        var poll = snapshot.val() || {};

        dispatch(addPoll(poll));
    });
  };
}

export var addPoll = (poll)=>{
    return {
      type: "ADD_POLL",
      poll
    }
}

export var updatePollToFirebase = (poll, pollID)=>{
  //Async action to update poll to firebase using pollID
  return (dispatch, getState)=>{
    var pollsRef = firebaseRef.child(`users/publicPolls/${pollID}`).update(poll);
    }
}

export var clearPoll = ()=>{
  return {
    type: "CLEAR_POLL"
  }
}
export var deletePoll = (pollID)=>{
  //async action to delete poll from firebase using pollID
}


// userIPReducer actions

export var getUserIP = ()=>{
  return (dispatch, getState) =>{
    axios.get('https://api.ipify.org?format=json').then((res)=>{
      dispatch(setUserIP(res.data.ip));
    });
  }
}

export var setUserIP = (ip)=>{
  return {
    type: "SET_USER_IP",
    ip
  }
}

// Auth reducer actions
export var login = (uid, name, photoURL) =>{
  return {
    type: "LOGIN",
    uid,
    name,
    photoURL
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

export var logout = ()=>{
  return {
    type: "LOGOUT"
  }
};

export var startLogout = () => {
  return (dispatch, getState)=>{
    return firebase.auth().signOut().then(()=> {
  console.log("Logged out!");
});
  };
}
