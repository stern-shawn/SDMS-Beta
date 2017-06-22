import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import glamorous from 'glamorous';

import bulma from 'styles/bulma.scss';

// Experiment with using glamorous to create semantically named components
// and see if it plays nicely with Bulma framework!
const Hero = glamorous.section(
  bulma.hero,
  (props) => {
    const mappedClasses = [];
    // Look at each prop (other than children) and see if it maps to a valid bulma class
    Object.keys(props)
      .filter((prop) => prop !== 'children')
      .forEach((prop) => {
        mappedClasses.push(`${bulmaMapping[props[prop]]}`);
      });
    return mappedClasses.join(' ');
  }
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
  isPrimary: bulma['is-primary'],
  isDanger: bulma['is-danger'],
};

export class Dashboard extends Component {
  render() {
    return (
      <Hero size="isFullheight" color="isDanger">
        <HeroBody>
          <Container>
            <Title>
              Client Dashboard
            </Title>
            <SubTitle>
              Overview of your progress
            </SubTitle>
          </Container>
        </HeroBody>
      </Hero>
    );
  }
}

Dashboard.propTypes = {
};

// Need to export so we can test and have full test coverage in Jest
export const mapDispatchToProps = {
};

const mapStateToProps = createStructuredSelector({
  // currentPage: makeSelectCurrentPage(),
});

// Wrap the component to inject dispatch and state
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
