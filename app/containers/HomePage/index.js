/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import glamorous from 'glamorous';

// Components
import Hero from 'components/Bulma/Hero';
import HeroBody from 'components/Bulma/HeroBody';
import Container from 'components/Bulma/Container';
import Title from 'components/Bulma/Title';

// Styles
import bulma from 'styles/bulma.scss';

const SubTitle = glamorous.h2(
  bulma.subtitle,
);

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
