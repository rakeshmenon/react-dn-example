function upVote(state = [], action) {
  switch(action.type){
    case 'UP_VOTE':
      // return the new state with the new comment
      return [
        ...state,
        {}
      }];
    default:
      return state;
  }
  return state;
}


export default comments;
