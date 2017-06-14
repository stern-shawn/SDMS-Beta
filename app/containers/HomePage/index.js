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

// Styles
import bulma from 'styles/bulma.scss';

// Experiment with using glamorous to create semantically named components
// and see if it plays nicely with Bulma framework!
const Hero = glamorous.section(
  bulma.hero,
  bulma['is-primary'],
  (props) => (bulmaMapping[props.size])
);

const HeroBody = glamorous.div(
  bulma['hero-body'],
);

const Container = glamorous.div(
  bulma.container,
);

const Title = glamorous.h1(
  bulma.title,
);

const SubTitle = glamorous.h2(
  bulma.subtitle,
);

// Create an object for easy mapping of JS-firendly prop names to bulma's hypenated classes
const bulmaMapping = {
  isFullheight: bulma['is-fullheight'],
};


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
    <Hero size="isFullheight">
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
