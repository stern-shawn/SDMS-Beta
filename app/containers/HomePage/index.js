/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

// Components
import Hero from 'components/Bulma/Layout/Hero';
import HeroBody from 'components/Bulma/Layout/Hero/HeroBody';
import Container from 'components/Bulma/Layout/Container';
import Title from 'components/Bulma/Title';
import SubTitle from 'components/Bulma/SubTitle';

// Styles

const HomePage = () => (
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
    <Hero size="isFullheight" color="isPrimary">
      <HeroBody>
        <Container>
          <Title>
            Welcome
          </Title>
          <SubTitle>
            Strength Development Management System
          </SubTitle>
        </Container>
      </HeroBody>
    </Hero>
  </article>
);

HomePage.propTypes = {
  // routeParams: PropTypes.object.isRequired,
};

export default HomePage;
