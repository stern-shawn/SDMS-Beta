import glamorous from 'glamorous';
import bulma from 'styles/bulma.scss';

const NavRight = glamorous.div(
  bulma['nav-right'],
  (props) => (props.hasMenu ? bulma['nav-menu'] : null),
  (props) => (props.isActive ? bulma['is-active'] : null),
);

export default NavRight;
