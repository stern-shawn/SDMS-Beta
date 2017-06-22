import React from 'react';
import bulma from 'styles/bulma.scss';

// Components
import Container from 'components/Bulma/Layout/Container';
import Nav from 'components/Bulma/Components/Nav/Nav';
import NavLeft from 'components/Bulma/Components/Nav/NavLeft';
import NavRight from 'components/Bulma/Components/Nav/NavRight';
import NavItem from 'components/Bulma/Components/Nav/NavItem';
import NavTab from 'components/Bulma/Components/Nav/NavTab';
import NavToggle from 'components/Bulma/Components/Nav/NavToggle';

// Instead of repeating the activeClassName prop as we declare each component, create a wrapper
// which forwards all given props and injecs the activeClassName prop for less typing
const NavTabWithActive = (props) => <NavTab {...props} activeClassName={bulma['is-active']} />;

class Navigation extends React.Component {
  // ES7 state. Only using this for mockup purposes to validate that dynamic props work with
  // changes to state/props
  state = {
    mobileMenuActive: false,
  };

  render = () => (
    <Nav hasShadow>
      <Container>
        <NavLeft>
          <NavItem to="/">
            <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
          </NavItem>
          <NavTabWithActive isHiddenMobile to="/">Home</NavTabWithActive>
          <NavTabWithActive isHiddenMobile to="/dashboard">Dashboard</NavTabWithActive>
          <NavTabWithActive isHiddenMobile to="/log">Training Log</NavTabWithActive>
          <NavTabWithActive isHiddenMobile to="/coach">Coach</NavTabWithActive>
        </NavLeft>
        <NavToggle isActive={this.state.mobileMenuActive} onClick={() => { console.log('toggle mobile'); this.setState({ mobileMenuActive: !this.state.mobileMenuActive }); }}>
          <span></span>
          <span></span>
          <span></span>
        </NavToggle>
        <NavRight hasMenu isActive={this.state.mobileMenuActive}>
          <NavTabWithActive isHiddenTablet to="/">Home</NavTabWithActive>
          <NavTabWithActive isHiddenTablet to="/dashboard">Dashboard</NavTabWithActive>
          <NavTabWithActive isHiddenTablet to="/log">Training Log</NavTabWithActive>
          <NavTabWithActive isHiddenTablet to="/coach">Coach</NavTabWithActive>
          <NavTab>
            <figure className={`${bulma.image} ${bulma['is-16x16']}`} style={{ marginRight: '8px' }}>
              <img src="http://bulma.io/images/jgthms.png" alt="Profile avatar" />
            </figure>
            Profile
          </NavTab>
          <NavTab>Log out</NavTab>
        </NavRight>
      </Container>
    </Nav>
  );
}

export default Navigation;
