
export var pollsReducer = (state=[], action)=>{
  switch (action.type) {
    case "ADD_POLL":
      return [
        ...state,
        action.poll
      ];
    default:
    return state;
  }
}

var pollInput = {
  options: ["input0", "input1"],
  capturedInputs: {
    pollName: '',
    pollOptions: []
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
