
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Hader = () => {
  const{user,logOut}=useAuth();
    return (
        <div>
<Navbar fixed="top"  collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home" className="text-warning fw-bold">Gaithersburg</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
    <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/home#services">Service</Nav.Link>
      <Nav.Link as={Link} to="/booking">Booking</Nav.Link>
      <Nav.Link as={Link} to="/home#experts">Experts</Nav.Link>
      <p className="text-light mt-2 px-2">{user?.displayName}</p>
      {user?.email ? <Button onClick={logOut} className="btn_regular">Logout</Button> 
      :<Nav.Link as={Link} to="/login">Login</Nav.Link>}
     
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Hader;