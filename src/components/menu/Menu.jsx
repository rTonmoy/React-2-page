import React from 'react'
import {Navbar,Container,Nav} from "react-bootstrap"
import {  } from "../../assets/logo.png";
import "./menu.css"
import Logo from "../../assets/logo.png";


const Menu = () => {
  return (
    <Navbar expand="lg" className='menu_bg'>
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About us</Nav.Link>
            <Nav.Link href="#link">Features</Nav.Link>
            <Nav.Link href="#link">Pricing</Nav.Link>
            <Nav.Link href="#link">Read Blog</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
          </Nav>
          <div className="nav_anchore text-end">
            <a href="#">Contact us</a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu