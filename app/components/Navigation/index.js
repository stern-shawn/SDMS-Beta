import React from 'react';
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

const NavItem = glamorous.a(
  bulma['nav-item'],
  (props) => {
    const classList = [];
    // Look at each prop (other than children) and see if it maps to a valid bulma class
    Object.keys(props)
      .filter((prop) => prop !== 'children')
      .forEach((prop) => {
        classList.push(`${bulmaMap[prop]}`);
      });
    return classList.join(' ');
  }
);

// Create an object for easy mapping of JS-firendly prop names to bulma's hypenated classes
const bulmaMap = {
  isActive: bulma['is-active'],
  isHiddenMobile: bulma['is-hidden-mobile'],
  isHiddenTablet: bulma['is-hidden-tablet'],
};

const NavTab = glamorous(NavItem)(
  bulma['is-tab'],
);

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
          <NavItem>
            <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
          </NavItem>
          <NavTab isActive isHiddenMobile>Home</NavTab>
          <NavTab isHiddenMobile>Dashboard</NavTab>
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
