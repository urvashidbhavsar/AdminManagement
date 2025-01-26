import React from 'react'
import { Container, Navbar, Nav, Button, TabContainer } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
const Home = () => {

  const navigate = useNavigate();
  const uservalue = JSON.parse(localStorage.getItem("admincredential"));
  const logout = () => {
    localStorage.removeItem("loginuser")
    navigate("/");
  }
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Product</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-between flex-grow-0'>
            <Nav className="m-0 d-flex align-items-center gap-3">
              <h4 className='m-0'>Hello, {uservalue.username}</h4>
              <Button variant='danger' className='btn-sm' onClick={logout}>Logout</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='container-fluid'>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-9"></div>
        </div>
      </div>
    </>
  )
}

export default Home
