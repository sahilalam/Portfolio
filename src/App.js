import React from "react";
import { Button, Jumbotron, Navbar, Nav, Row, Col } from "react-bootstrap";
import "./style.css";

export default function App() {
  return (
    <div>
      <Jumbotron className="m-0 p-5 jumbotron bg-light">
        <Row className="justify-content-center p-5 mt-5 header">
          <Col xs="12" md="10" className="text-center top-animation">
            <h1 className="heading">Sahil Alam</h1>
          </Col>
          <Col xs="12" md="3" className="text-center bottom-animation">
            <h5 className="text-animation mb-0 pb-0" />
          </Col>
        </Row>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          className="nav-bar bottom-animation"
        >
          <Navbar.Brand href="/">Sahil Alam</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Jumbotron>
    </div>
  );
}
