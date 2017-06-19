
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

export var addOptionsReducer = (state={inputs: ["input-0", "input-1"]}, action) =>{
  switch (action.type) {
    case "ADD_OPTIONS":
      return {
        ...state,
      inputs: action.inputCountArray
      };
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
