import React from 'react';
import { Link } from 'react-router';
import bulma from 'styles/bulma.scss';
import glamorous from 'glamorous';

// const navTabHiddenMobile = `${bulma['nav-item']} ${bulma['is-tab']} ${bulma['is-hidden-mobile']}`;
// const navTabHiddenTablet = `${bulma['nav-item']} ${bulma['is-tab']} ${bulma['is-hidden-tablet']}`;

const NavWithShadow = glamorous.nav(
  bulma.nav,
  bulma['has-shadow'],
);

const Container = glamorous.div(
  bulma.container,
);

const NavLeft = glamorous.div(
  bulma['nav-left'],
);

const NavRight = glamorous.div(
  bulma['nav-right'],
);

const NavRightWithMenu = glamorous(NavRight)(
  bulma['nav-menu'],
  (props) => (props.isActive ? bulma['is-active'] : null),
);

const NavItem = glamorous(Link)(
  bulma['nav-item'],
  (props) => {
    const classList = [];
    // Look at each prop (other than children) and see if it maps to a valid bulma class
    Object.keys(props)
      .filter((prop) => !['children', 'to', 'activeClassName'].includes(prop))
      .forEach((prop) => {
        classList.push(`${bulmaMap[prop]}`);
      });
    return classList.join(' ');
  },
);

// Create an object for easy mapping of JS-firendly prop names to bulma's hypenated classes
const bulmaMap = {
  isActive: bulma['is-active'],
  isHiddenMobile: bulma['is-hidden-mobile'],
  isHiddenTablet: bulma['is-hidden-tablet'],
};

// Glamorous provides forwardProps and rootEl arguments which can be used to specifically pass on
// props OR prevent the passing of props which are invalid for normal HTML. (ie 'isActive' is not)
// a true <a> tag attribute and will raise an error
const NavTab = glamorous(NavItem, { forwardProps: ['to', 'activeClassName'], rootEl: 'a' })(
  bulma['is-tab'],
);

// Instead of repeating the activeClassName prop as we declare each component, create a wrapper
// which forwards all given props and injecs the activeClassName prop for less typing
const NavTabWithActive = (props) => <NavTab {...props} activeClassName={bulma['is-active']} />;

const NavToggle = glamorous.span(
  bulma['nav-toggle'],
  (props) => (props.isActive ? bulma['is-active'] : null)
);

class Navigation extends React.Component {
  // ES7 state. Only using this for mockup purposes to validate that dynamic props work with
  // changes to state/props
  state = {
    mobileMenuActive: false,
  };

  render = () => (
    <NavWithShadow>
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
        <NavRightWithMenu isActive={this.state.mobileMenuActive}>
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
        </NavRightWithMenu>
      </Container>
    </NavWithShadow>
  );
}

export default Navigation;
