/*
 * Blog Actions
 */

import {
  SIGN_IN,
  SIGN_OUT,
} from './constants';

/**
 * Request by the user to sign in using their email and password
 * @param {String} email      User email
 * @param {String} password   User password
 * @return {object}           An action object of type SIGN_IN and bundled user credentials
 */
function signIn(email, password) {
  return {
    type: SIGN_IN,
    credentials: { email, password },
  };
}

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
  signIn,
  signOut,
};
