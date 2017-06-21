import firebase, {firebaseRef, twitterProvider} from '../firebase/index.js';

//public polls reducer actions

export var startAddPoll = (poll) => {
  return (dispatch, getState)=>{

    var uid = getState().auth.uid;

    //push poll to user uid polls
    //fetch all polls into an array
    //fetch all public polls into an array
    //filter polls not in publicpolls
    //push result to publicpolls
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

              console.log("Promise?", userPollsKeys);
              const filtered = userPollsKeys
                .filter(key => !publicPolls.includes(key))
                .reduce((obj, key) => {
                  obj[key] = userPolls[key];
                  return obj;
                }, {});

              var publicPollsRef = firebaseRef.child(`users/publicPolls`).update(filtered);
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

        //filter polls her

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
        var parsedPolls = [];

        Object.keys(polls).forEach((pollId)=>{
          parsedPolls.push({
            id: pollId,
            ...polls[pollId]
          });
        });
        dispatch(addPublicPolls(polls));
    });
  };
};

export var startAddUserPolls = ()=>{
  return (dispatch, getState)=>{
    var uid = getState().auth.uid;
    return;

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
