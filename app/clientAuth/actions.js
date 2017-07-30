/*
 * Auth Actions
 */

import {
  AUTH_ERROR,
  AUTH_USER,
  DEAUTH_USER,
  SIGN_IN,
  SIGN_OUT,
} from './constants';

/**
 * Clear state tree on user sign out
 * @param {String} email      User email
 * @param {String} password   User password
 * @return {object}           An action object of type SIGN_IN and bundled user credentials
 */
function deauthUser() {
  return {
    type: DEAUTH_USER,
  };
}

/**
 * Request by the user to sign in using their email and password
 * @param {String} email      User email
 * @param {String} password   User password
 * @return {object}           An action object of type SIGN_IN and bundled user credentials
 */
function signIn(email, password) {
  return {
    type: SIGN_IN,
    payload: {
      email,
      password,
    },
  };
}

/**
 * Error action for failed sign in operations
 * @param {object} err  XHR error object, expected to contain xhr.statusText field
 * @return {object}     An action object of type AUTH_ERROR and error message payload
 */
const signInError = (err) => ({
  type: AUTH_ERROR,
  payload: {
    error: err.xhr.statusText,
  },
});

/**
 * Success action for user sign in
 * @param {object} payload  XHR response object, expected format of { token, userProfile }
 * @return {object}         An action object of type AUTH_USER and payload of user auth data
 */
const signInSuccess = (payload) => ({
  type: AUTH_USER,
  payload,
});

/**
 * Request by the user to sign in
 *
 * @return {object}    An action object of type SIGN_OUT
 */
function signOut() {
  return {
    type: SIGN_OUT,
  };
}

export {
  deauthUser,
  signIn,
  signInError,
  signInSuccess,
  signOut,
};
