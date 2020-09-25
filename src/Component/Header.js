import React from 'react';
import { Navbar,Nav, Form, FormControl, Button } from 'react-bootstrap';
// import logo from "../logo.svg";
// import {
//    BrowserRouter as Router,
//    Switch,
//    Route,
//    Link
//  } from "react-router-dom";

const Example = (props) => {
  return (
     <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="splash">Regina Jastip</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="home">Home</Nav.Link>
      <Nav.Link href="order">Order</Nav.Link>
      <Nav.Link href="Informasi">Informasi</Nav.Link>
      <Nav.Link href="Blog">Blog</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  </>
  );
}

export default Example;