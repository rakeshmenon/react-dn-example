import * as actions from '../constants/actions';

let initialState = 'all';

function filter(state = initialState, action) {
  console.log('FILTER');
  switch (action.type) {

    case actions.TOGGLE_FILTER:
      return action.filter;

    default:
      return state;

  }
}

export default filter;
