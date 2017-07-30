/*
 * Auth selectors
 */

import { createSelector } from 'reselect';

const selectAuth = (state) => state.get('auth');

const makeSelectAuthenticated = () => createSelector(
  selectAuth,
  (authState) => authState.get('authenticated')
);

const makeSelectUserProfile = () => createSelector(
  selectAuth,
  (authState) => authState.get('userProfile')
);

const makeSelectToken = () => createSelector(
  selectAuth,
  (authState) => authState.get('token')
);

const makeSelectErrors = () => createSelector(
  selectAuth,
  (authState) => authState.get('errors')
);

export {
  selectAuth,
  makeSelectAuthenticated,
  makeSelectUserProfile,
  makeSelectToken,
  makeSelectErrors,
};
