/*
 * AuthReducer
 */
import { fromJS } from 'immutable';

import {
  AUTH_ERROR,
  AUTH_USER,
  DEAUTH_USER,
  SIGN_IN,
  SIGN_OUT,
} from './constants';

const initialState = fromJS({
  authenticated: false,
  errors: null,
  inProgress: false,
  token: null, // Token is cached in localStorage, this is here so we don't have to do an IO operation with localStorage for EVERY request
  userProfile: null,
});

function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_ERROR:
      console.log('Error in sign-in/up process');
      return state
        .set('errors', action.payload.error);
    case AUTH_USER:
      console.log('User authenticated');
      console.log(action.payload);
      return state
        .set('authenticated', true)
        .set('errors', null)
        .set('inProgress', false)
        .set('token', action.payload.token)
        .set('userProfile', action.payload.userProfile);
    case DEAUTH_USER:
      console.log('User logged out');
      return state
        .set('authenticated', false)
        .set('inProgress', false)
        .set('token', null)
        .set('userProfile', null);
    case SIGN_IN:
      console.log('User submitting credentials to sign in');
      return state
        .set('errors', null)
        .set('inProgress', true);
    case SIGN_OUT:
      console.log('User requesting sign out');
      return state
        .set('errors', null)
        .set('inProgress', true);
    default:
      return state;
  }
}

export default authReducer;
