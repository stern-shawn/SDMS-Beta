/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

// Package Imports
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Helmet from 'react-helmet';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

// Components
import withProgressBar from 'components/ProgressBar';
import Navigation from 'components/Navigation';

// Actions
import * as actions from './actions';

// State selectors
import {
  makeSelectMobileNavActive,
} from './selectors';

import transitions from './transitions.scss';

// Sadly Scrollbars seems to be breaking useScroll middleware...
// import { Scrollbars } from 'react-custom-scrollbars';

// Make sure that children are assigned a unique key so that transitions fire on route change
export const App = ({ children, location, mobileNavActive, toggleMobileNav }) => (
  <div>
    <Helmet
      titleTemplate="%s - SDMS"
      defaultTitle="Strength Development Management System"
      meta={[
        {
          name: 'description',
          content: 'Track, plan, and predict your strength progress and goals',
        },
      ]}
    />
    <div>
      <Navigation mobileNavActive={mobileNavActive} toggleMobileNav={toggleMobileNav} />
      <CSSTransitionGroup
        transitionName={transitions}
        transitionAppear
        transitionLeave={false}
        transitionAppearTimeout={250}
        transitionEnterTimeout={250}
      >
        {React.cloneElement(children, { key: location.pathname })}
      </CSSTransitionGroup>
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object,
  mobileNavActive: PropTypes.bool.isRequired,
  toggleMobileNav: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  mobileNavActive: makeSelectMobileNavActive(),
});

export default connect(mapStateToProps, actions)(withProgressBar(App));
