import * as actions from '../constants/actions';

let initialState = {};

function user(state = initialState, action) {
  console.log('USER');
  switch (action.type) {

    case actions.LOGIN_USER:
      return {
        ...state,
        email: action.email,
        isLoggedIn: true
      };

    case actions.LOGOUT_USER:
      return {
        email: '',
        isLoggedIn: false
      };

    default:
      return state;

  }
}

export default user;
