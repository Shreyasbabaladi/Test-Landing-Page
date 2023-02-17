import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Input,
  FormGroup,
  Form
  
} from 'reactstrap';

function NavBar(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  
  const onSubmit = (e) => {
      e.preventDefault();
  }

  return (
    <div className=' shadow '>
      <Navbar color="faded" light className='container'>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <NavbarBrand  className="me-auto">
          <Form onSubmit={onSubmit}>
          <Input type="text" placeholder='Search by Products & services' bsSize='md' className='wd-85'/>

          </Form>
        </NavbarBrand>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;