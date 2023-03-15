import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../nav.css'
class Navhead extends Component {
  state = {}
  render() {
    return (
      <Navbar className="bar" bg="info" variant="dark" expand="lg">
        <Navbar.Brand mb={0} href="#home">
          <img src="usthb.png" style={{ width: 40 }} /> certificate
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item className="mt-2 mr-2 ">
              <Link to="/" style={{ color: '#ffffff' }}>
                Home
              </Link>
            </Nav.Item>
            <Nav.Item className="mt-2 ml-2 mr-3">
              <Link to="/reg" style={{ color: '#ffffff' }}>
                Register
              </Link>
            </Nav.Item>
            <Nav.Item className="mt-2 ml-2 mr-3">
              <Link to="/intro" style={{ color: '#ffffff' }}>
                How it works
              </Link>
            </Nav.Item>
            <Nav.Item className="mt-2 ml-2 mr-3">
              <Link to="/verify" style={{ color: '#ffffff' }}>
                Verify
              </Link>
            </Nav.Item>
            <Nav.Item className="mt-2 mr-3">
              <Link to="/view" style={{ color: '#ffffff' }}>
                View Certificate
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Navhead
