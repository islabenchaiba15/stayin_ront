import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Nav';
import { Image } from 'react-bootstrap';
import logoo from './logo.svg';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './Navbar.css';
const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container className='fluid'>
        <Image src={logoo} alt="Image" className="xx"fluid />
         
          <Form className="d-flex">
          <Nav.Link href="#action1" className="mx-5  ">
           <h6 className="font-weight-bold">list your property</h6>
            </Nav.Link>
          <Button variant="primary " className="mx-2 signin">sign in </Button>
            <Button variant="outline-" className="mx-2 signup">sign up</Button>
          </Form>
      
      </Container>
    </Navbar>
  );
};

export default NavBar;
