
export var publicPollsReducer = (state=[], action) => {
  switch (action.type) {
    case "ADD_PUBLIC_POLLS":
      return [
        ...state,
        action.publicPolls
      ];
    case "CLEAR_PUBLIC_POLLS":
      return [];
    default:
      return state;
  }
}

export var userPollsReducer = (state=[], action) => {
  switch (action.type) {
    case "GET_USER_POLLS_KEYS":
      return action.userPollsKeys
    case "CLEAR_USER_POLL_KEYS":
      return [];
    default:
      return state;
  }
}

var pollInput = {
  options: ["input0", "input1"],
  capturedInputs: {
    pollName: '',
    pollOptions: [],
    pollResults: []
  }
}

export var pollInputReducer = (state=pollInput, action) =>{
  switch (action.type) {
    case "MORE_OPTIONS":
      return {
        ...state,
      options: action.inputCountArray
      };
    case "CAPTURE_INPUTS":
    return {
      ...state,
      capturedInputs: action.inputs
    }
    case "CLEAR_CAPTURED_INPUTS":
    return pollInput;
    default:
      return state;
  }
}

export var authReducer = (state={}, action)=>{
  switch (action.type) {
    case "LOGIN":
      return {
        uid: action.uid,
        name: action.name,
        photoURL: action.photoURL
      };
    case "LOGOUT":
        return {};
    default:
      return state;
  }
}

var pollResults = {
  pollResults: [],
  usersVoted: []
}
export var pollResultsReducer = (state=pollResults, action)=>{
  switch (action.type) {
    case "CAPTURE_POLL_RESULT":
      return {
        ...state,
        pollResults: action.capturedResult
      }
    case "VOTED_BY_USER":
      return {
        ...state,
        usersVoted: action.addUserVoted
      }
    default:
      return state;
  }
}

export var selectedOptionReducer = (state=[], action)=>{
  switch (action.type) {
    case "SELECTED_OPTION":
      return [
        action.selectedOption
      ];
    case "CLEAR_SELECTED_OPTION":
      return [];
    default:
      return state;

  }
}

export var userIPReducer = (state=[], action) => {
  switch (action.type) {
    case "GET_USER_IP":
      return action.userIP;
    default:
      return state;
  }
}
