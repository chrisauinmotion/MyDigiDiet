import React from 'react';
import bn from '../../utils/bemnames';
import {
  Navbar,
  // NavbarToggler,
  Nav,
  Button,
} from 'reactstrap';
import { MdClearAll } from 'react-icons/lib/md';

const bem = bn.create('header');

class Header extends React.Component {

  handleSidebarControlButton(event) {
    event.preventDefault();
    event.stopPropagation();

    document.querySelector('.cr-sidebar').classList.toggle('cr-sidebar--open');
  };

  render() {
    return (
      <Navbar light expand className={bem.b('bg-white')}>
        <Nav navbar className="mr-2">
          <Button outline onClick={this.handleSidebarControlButton}>
            <MdClearAll size={25} />
          </Button>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
