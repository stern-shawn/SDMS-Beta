import glamorous from 'glamorous';
import bulma from 'styles/bulma.scss';

import NavItem from 'components/Bulma/Components/Nav/NavItem';

// Glamorous provides forwardProps and rootEl arguments which can be used to specifically pass on
// props OR prevent the passing of props which are invalid for normal HTML. (ie 'isActive' is not)
// a true <a> tag attribute and will raise an error
const NavTab = glamorous(NavItem, { forwardProps: ['to', 'activeClassName'], rootEl: 'a' })(
  bulma['is-tab'],
);

export default NavTab;
