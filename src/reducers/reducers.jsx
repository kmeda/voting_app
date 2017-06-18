
export var pollsReducer = (state=[], action)=>{
  switch (action.type) {
    case "ADD_POLL":
      return action.poll
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
