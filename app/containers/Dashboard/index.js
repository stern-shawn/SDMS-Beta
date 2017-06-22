import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Components
import Hero from 'components/Bulma/Hero';
import HeroBody from 'components/Bulma/HeroBody';
import Container from 'components/Bulma/Container';
import Title from 'components/Bulma/Title';
import SubTitle from 'components/Bulma/SubTitle';

// Styles

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
