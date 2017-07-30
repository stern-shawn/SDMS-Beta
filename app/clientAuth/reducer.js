/*
 * AuthReducer
 */
import { fromJS } from 'immutable';

import {
  AUTH_USER,
  DEAUTH_USER,
  AUTH_ERROR,
} from './constants';

const initialState = fromJS({
  authenticated: false,
  token: null,
  userProfile: null,
  errors: null,
});

function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      console.log('User authenticated');
      console.log(action.payload);
      return state
        .set('authenticated', true)
        .set('errors', null)
        .set('token', action.payload.token)
        .set('userProfile', action.payload.userProfile);
    case DEAUTH_USER:
      console.log('Logging user out');
      return state
        .set('authenticated', false)
        .set('token', null)
        .set('userProfile', null);
    case AUTH_ERROR:
      console.log('Error in sign-in/up process');
      return state
        .set('errors', action.payload.error);
    default:
      return state;
  }
}

export default authReducer;
