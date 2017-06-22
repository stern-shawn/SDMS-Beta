import { Link } from 'react-router';

import glamorous from 'glamorous';
import bulma from 'styles/bulma.scss';

const NavItem = glamorous(Link)(
  bulma['nav-item'],
  (props) => {
    const classList = [];
    Object.keys(props)
      .filter((prop) => !['children', 'to', 'activeClassName'].includes(prop))
      .forEach((prop) => {
        classList.push(`${bulmaNavItemMap[prop]}`);
      });
    return classList.join(' ');
  },
);

const bulmaNavItemMap = {
  isActive: bulma['is-active'],
  isHiddenMobile: bulma['is-hidden-mobile'],
  isHiddenTablet: bulma['is-hidden-tablet'],
};

export default NavItem;
