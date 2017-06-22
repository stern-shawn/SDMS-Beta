import glamorous from 'glamorous';
import bulma from 'styles/bulma.scss';

const NavToggle = glamorous.span(
  bulma['nav-toggle'],
  (props) => (props.isActive ? bulma['is-active'] : null)
);

export default NavToggle;
