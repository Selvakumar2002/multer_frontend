import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Adminpanel.css'
import React, { useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";
function Adminpanel() {

  const [isOpen, setIsOpen] = useState(false);
  // const [isopen, setIsopen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  // const toggleDropdown = () => {
  //   setIsOpen(!isopen);
  // };
  return (
    <Container fluid>
      <Row  className='adminselect1'>
        <Col>Administration</Col>
        <Col md="auto">Demo USer</Col>
        <Col xs lg="1">
         logout
        </Col>
      </Row>
      <Row>
        <Col md={2}  className='adminselect2' >
        <FiAlignJustify />

        <Row>Deshboard</Row>
        <Row>Customer</Row>
        <Row>Customer detail</Row>
        <Row>
        <div className="dropdown">
      <button className="dropbtn" onClick={toggleDropdown}>
        Customer
      </button>
      {isOpen && (
        <div className="dropdown-content" >
          <a href="#link1">Link 1</a>
          <a href="#link2">Link 2</a>
          <a href="#link3">Link 3</a>
        </div>
      )}
    </div>
        </Row>
        </Col>
        <Col className='adminselect3'>
        
        
        </Col>
      </Row>
   </Container>
  );
}

export default Adminpanel;