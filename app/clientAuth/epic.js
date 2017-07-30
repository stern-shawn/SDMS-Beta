import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs';
import {
  AUTH_ERROR,
  AUTH_USER,
  DEAUTH_USER,
  SIGN_IN,
  SIGN_OUT,
} from './constants';

const signInSuccess = (res) => ({
  type: AUTH_USER,
  payload: {
    token: res.token,
    userProfile: {
      firstName: res.userProfile.firstName,
    },
  },
});

const signInEpic = (action$) =>
  action$.ofType(SIGN_IN)
    .switchMap((action) =>
      ajax.post(
        '/api/signin',
        action.payload,
        { 'Content-Type': 'application/json' }
      )
        .map((res) => signInSuccess(res.response))
        .catch((err) => Observable.of({
          type: AUTH_ERROR,
          payload: {
            error: err.xhr.statusText,
          },
        }))
    );

export {
  signInEpic,
};
