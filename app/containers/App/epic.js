import { Observable } from 'rxjs';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  closeMobileNav,
} from './actions';

// Automatically close the nav drawer when the user has selected a new route
const closeMobileNavEpic = (action$, store) =>
  action$.ofType(LOCATION_CHANGE)
    .switchMap(() => {
      const drawerActive = store.getState().getIn(['global', 'mobileNavActive']);
      if (drawerActive) {
        return Observable.of(closeMobileNav());
      }
      return Observable.of();
    });

export {
  closeMobileNavEpic,
};
