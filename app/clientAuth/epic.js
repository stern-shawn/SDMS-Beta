import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs';
import { browserHistory } from 'react-router';
import {
  SIGN_IN,
  SIGN_OUT,
} from './constants';
import {
  deauthUser,
  signInError,
  signInSuccess,
} from './actions';

const signInEpic = (action$) =>
  action$.ofType(SIGN_IN)
    .switchMap((action) =>
      ajax.post(
        '/api/signin',  // Endpoint URI
        action.payload, // SIGN_IN payload object resolves to { email, password } to fit endpoint
        { 'Content-Type': 'application/json' } // Need to explicitly define that we're sending JSON
      )
        .map(({ response }) => {
          // Cache the JWT and userProfile for later logins, etc
          localStorage.setItem('token', response.token);
          localStorage.setItem('userProfile', JSON.stringify(response.userProfile));
          // Redirect to success page or something to be defined later
          browserHistory.push('/dashboard');
          // Dispatch action to save data to store
          return signInSuccess(response);
        })
        .catch((err) => Observable.of(signInError(err)))
    );

const signOutEpic = (action$) =>
  action$.ofType(SIGN_OUT)
    .switchMap(() => {
      // Clear the JWT and profile from local storage. Redirect will be handled by HOC
      localStorage.removeItem('token');
      localStorage.removeItem('userProfile');
      return Observable.of(deauthUser());
    });

export {
  signInEpic,
  signOutEpic,
};
