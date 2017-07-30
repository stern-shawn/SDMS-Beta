import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import * as actions from 'clientAuth/actions';
import {
  makeSelectAuthenticated,
} from 'clientAuth/selectors';
// Styles
import bulma from 'styles/bulma.scss';

// Components
import Container from 'components/Bulma/Layout/Container';
import Nav from 'components/Bulma/Components/Nav';
import NavLeft from 'components/Bulma/Components/Nav/NavLeft';
import NavRight from 'components/Bulma/Components/Nav/NavRight';
import NavItem from 'components/Bulma/Components/Nav/NavItem';
import NavTab from 'components/Bulma/Components/Nav/NavTab';
import NavToggle from 'components/Bulma/Components/Nav/NavToggle';

// Raw data
import tabs from './navigation.json';

// Instead of repeating the activeClassName prop as we declare each component, create a wrapper
// which forwards all given props and injecs the activeClassName prop for less typing
const NavTabWithActive = (props) => <NavTab {...props} activeClassName={bulma['is-active']} />;

const generateLeftTabs = (tabList) => tabList.map((tab, idx) => <NavTabWithActive isHiddenMobile to={tab.to} key={idx}>{tab.title}</NavTabWithActive>);

const generateRightTabs = (tabList) => tabList.map((tab, idx) => <NavTabWithActive isHiddenTablet to={tab.to} key={idx}>{tab.title}</NavTabWithActive>);

const Navigation = ({ authenticated, signOut, mobileNavActive, toggleMobileNav }) => (
  <Nav hasShadow>
    <Container>
      <NavLeft>
        <NavItem to="/">
          <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
        </NavItem>
        { authenticated ? generateLeftTabs(tabs.privateTabs) : generateLeftTabs(tabs.publicTabs) }
      </NavLeft>
      <NavToggle isActive={mobileNavActive} onClick={toggleMobileNav}>
        <span></span>
        <span></span>
        <span></span>
      </NavToggle>
      <NavRight hasMenu isActive={mobileNavActive}>
        { authenticated ? generateRightTabs(tabs.privateTabs) : generateRightTabs(tabs.publicTabs) }
        { !authenticated && <NavTabWithActive to="/signin">Sign In</NavTabWithActive>}
        { authenticated &&
          <NavTab>
            <figure className={`${bulma.image} ${bulma['is-16x16']}`} style={{ marginRight: '8px' }}>
              <img src="http://bulma.io/images/jgthms.png" alt="Profile avatar" />
            </figure>
            Profile
          </NavTab>
        }
        { authenticated && <NavTab onClick={signOut}>Sign out</NavTab>}
      </NavRight>
    </Container>
  </Nav>
);

Navigation.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired,
  mobileNavActive: PropTypes.bool.isRequired,
  toggleMobileNav: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  authenticated: makeSelectAuthenticated(),
});

export default connect(mapStateToProps, actions)(Navigation);
