import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs';
import {
  AUTH_ERROR,
  AUTH_USER,
  DEAUTH_USER,
  SIGN_IN,
  SIGN_OUT,
} from './constants';
import {
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
        .map((res) => signInSuccess(res.response))
        .catch((err) => Observable.of(signInError(err)))
    );

export {
  signInEpic,
};
