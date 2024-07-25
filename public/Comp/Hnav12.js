import React, { useState } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Homepage.css'
function Hnav12() {
  const [expanded, setExpanded] = useState(false);

  const closeNavbar = () => setExpanded(false);

  return (
    <>
      <Container className='nav123'>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" expanded={expanded} id='nav'>

          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" fill="currentColor" className="bi bi-book-fill" viewBox="0 0 16 16">
            <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
          </svg>
          <Navbar.Brand href="#home">SK-BookZ</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(!expanded)} />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" id='navlink' onSelect={closeNavbar}>
              <Nav.Link className='text' as={Link} to="/" onClick={closeNavbar}>Home</Nav.Link>
              <Nav.Link className='text' as={Link} to='/class' onClick={closeNavbar}>Class</Nav.Link>
              <Nav.Link className='text' as={Link} to='/pricing' onClick={closeNavbar}>Pricing</Nav.Link>
              <Nav.Link className='text' id='pkl' as={Link} to='/about' onClick={closeNavbar} > About Us</Nav.Link>
            </Nav>

            <Nav id='mkmkmk'>
              <Nav.Link as={Link} to='/cart' onClick={closeNavbar}>
                <Button style={{backgroundColor:'lightsalmon',border:'1px solid lightdsalmon'}}>Cart</Button>{' '}
                
              </Nav.Link>
              <Nav.Link as={Link} to='/signup' eventKey={2}>
                <Button variant="primary">Login</Button>{' '}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
}

export default Hnav12;
