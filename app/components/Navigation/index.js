import React from 'react';
import bulma from 'styles/bulma.scss';

// Components
import Container from 'components/Bulma/Container';
import Nav from 'components/Bulma/Nav';
import NavLeft from 'components/Bulma/NavLeft';
import NavRight from 'components/Bulma/NavRight';
import NavItem from 'components/Bulma/NavItem';
import NavTab from 'components/Bulma/NavTab';
import NavToggle from 'components/Bulma/NavToggle';

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
          <NavTab isHiddenMobile to="/dashboard" activeClassName={bulma['is-active']}>Dashboard</NavTab>
          <NavTab isHiddenMobile>Training Log</NavTab>
          <NavTab isHiddenMobile>Plan</NavTab>
        </NavLeft>
        <NavToggle isActive={this.state.mobileMenuActive} onClick={() => { console.log('toggle mobile'); this.setState({ mobileMenuActive: !this.state.mobileMenuActive }); }}>
          <span></span>
          <span></span>
          <span></span>
        </NavToggle>
        <NavRight hasMenu isActive={this.state.mobileMenuActive}>
          <NavTab isActive isHiddenTablet>Home</NavTab>
          <NavTab isHiddenTablet>Dashboard</NavTab>
          <NavTab isHiddenTablet>Training Log</NavTab>
          <NavTab isHiddenTablet>Plan</NavTab>
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
