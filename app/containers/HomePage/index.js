/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

// Components


const HomePage = ({ routeParams }) => (
  <article>
    <Helmet
      title="Home Page"
      meta={[
        {
          name: 'description',
          content: 'Home to track, plan, and predict your strength progress and goals',
        },
      ]}
    />
    <h1>
      Home
    </h1>
  </article>
);

HomePage.propTypes = {
  // routeParams: PropTypes.object.isRequired,
};

export default HomePage;
