import React from 'react';
import { Navbar } from 'react-bootstrap';
import mobile from "../mobile.png";
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
 } from "react-router-dom";

const Example = (props) => {
  return (
     <>
     <div style={{dpadding:20}}>
  <Navbar bg="white" style={{width:20, height:10}}>
    <Navbar.Brand href="home">
      <img
        src={mobile}
        width="25"
        height="25"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
      Download Regina Jastip App
      <>
      <Link href="home"><a>Tentang Jastip</a> </Link>
      Mitra Jastip</>
    </Navbar.Brand>
  </Navbar>
  </div>
  </>
  );
}

export default Example;