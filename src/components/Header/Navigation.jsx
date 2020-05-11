import React, { useContext } from 'react';
import { Container, Navbar, Nav, Image } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

import Logo from '../../images/logo.png';
import AppContext from '../context/AppContext';

const Navigation = () => {
  const { categories } = useContext(AppContext);
  const catSortBy = [13, 9, 8, 3, 6, 7, 4, 5, 2];
  let mainMenu = [];
  if (categories) {
    for (let i = 0; i < catSortBy.length; i++) {
      mainMenu.push(categories.find(category => category.id === catSortBy[i]));
    }
  }

  return (
    <Navbar 
      expand="lg" 
      variant="light" 
      bg="white" 
      className="border-top shadow-sm"
    >
      <Container>
        <Link to="/" className="navbar-brand d-block d-lg-none">
          <Image 
            fluid 
            src={Logo} 
            alt="Muslim BD" 
            className="Header-BrandArea__Logo"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavLink 
              exact
              to="/"
              className="nav-link"
              activeClassName="active"
            >হোম</NavLink>
            {
              mainMenu.length > 0 &&
                mainMenu.map(menu => (
                  <NavLink 
                    key={menu.id}
                    exact
                    to={{ pathname: '/' + menu.slug, state: { id: menu.id } }}
                    className="nav-link"
                    activeClassName="active"
                  >{menu.name}</NavLink>
                ))
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;