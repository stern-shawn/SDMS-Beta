import glamorous from 'glamorous';
import bulma from 'styles/bulma.scss';

const Nav = glamorous.nav(
  bulma.nav,
  (props) => (props.hasShadow ? bulma['has-shadow'] : null),
);

export default Nav;
