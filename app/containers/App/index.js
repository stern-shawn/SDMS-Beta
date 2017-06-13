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

// Components
import withProgressBar from 'components/ProgressBar';
// Sadly Scrollbars seems to be breaking useScroll middleware...
// import { Scrollbars } from 'react-custom-scrollbars';

export const App = ({ children }) => (
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
      {React.Children.toArray(children)}
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.node,
};

const mapDispatchToProps = {
};

const mapStateToProps = createStructuredSelector({
});

export default connect(mapStateToProps, mapDispatchToProps)(withProgressBar(App));
