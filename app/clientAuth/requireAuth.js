// HOC for protecting sensitive routes from unauthenticated users
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { createStructuredSelector } from 'reselect';

import { makeSelectAuthenticated } from 'clientAuth/selectors';

export default function (ComposedComponent) {
  class Authentication extends Component {
    componentWillMount() {
      // Redirect user to signin if they are not authenticated and try to access a resource
      if (!this.props.authenticated) {
        browserHistory.push('/signin');
      }
    }

    // Add in an update hook so that if the user signs out (which will update the authentication prop)
    // we run a check and do a forced redirect to home
    componentWillUpdate(nextProps) {
      if (this.props.authenticated && !nextProps.authenticated) {
        browserHistory.push('/');
      }
    }

    // Render the passed component if authenticated, and pass down any additional properties that we've added using ES6 spread
    render() {
      return this.props.authenticated && <ComposedComponent {...this.props} />;
    }
  }

  Authentication.propTypes = {
    authenticated: PropTypes.bool.isRequired,
  };

  const mapStateToProps = createStructuredSelector({
    authenticated: makeSelectAuthenticated(),
  });

  return connect(mapStateToProps)(Authentication);
}
