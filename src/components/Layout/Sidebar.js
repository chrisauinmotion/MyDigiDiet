import logo200Image from '../../assets/img/logo/logo_200.png';
import sidebarBgImage from '../../assets/img/sidebar/sidebar-4.jpg';
import React from 'react';
import {
  MdBorderAll,
  MdDashboard,
  MdInsertChart,
  MdWidgets,
} from 'react-icons/lib/md';
import { NavLink } from 'react-router-dom';
import {
  // UncontrolledTooltip,
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';
import bn from '../../utils/bemnames';

const sidebarBackground = {
  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const navItems = [
  { to: '/', name: 'dashboard', exact: true, Icon: MdDashboard },
  { to: '/charts', name: 'charts', exact: false, Icon: MdInsertChart },
  { to: '/widgets', name: 'widgets', exact: false, Icon: MdWidgets },
  { to: '/tables', name: 'tables', exact: false, Icon: MdBorderAll }
];

const bem = bn.create('sidebar');

class Sidebar extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpenComponents: true,
      isOpenContents: true,
      isOpenPages: true,
    };
  }

  handleClick(name) {
    return function() {
      this.setState(prevState => {
        const isOpen = prevState[`isOpen${name}`];
  
        return {
          [`isOpen${name}`]: !isOpen,
        };
      });
    };
  }

  render() {
    return (
      <aside className={bem.b()} data-image={sidebarBgImage}>
        <div className={bem.e('background')} style={sidebarBackground} />
        <div className={bem.e('content')}>
          <Navbar>
            <img
              src={logo200Image}
              width="100"
              height="90"
              className="pr-2"
              alt=""
            />
          </Navbar>
          <Nav vertical>
            {navItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}>
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}
          </Nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
