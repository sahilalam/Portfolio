import React from "react";
import {
  Button,
  Jumbotron,
  Navbar,
  Nav,
  Row,
  Col,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";
import "./style.css";
import Skills from "./Skills.js";

export default function App() {
  return (
    <div id="home">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="nav-bar bottom-animation"
      >
        <Navbar.Brand href="#home">
          <img
            className="logo-sm"
            src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/SA.png"
          />
          _Sahil Alam
        </Navbar.Brand>
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
      <Jumbotron className="m-0 p-4 jumbotron bg-transparent">
        <Row className="align-items-center p-5 header">
          <Col xs="12" md="6" className="text-left bottom-animation pb-0 mb-0 ">
            <img
              className="logo opacity-1"
              src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/SA.png"
            />
          </Col>
          <Col xs="12" md="6">
            <Col xs="12" md="10" className="top-animation pb-0 mb-0">
              <h1 className="heading">Sahil Alam</h1>
            </Col>

            <Col xs="12" lg="7" className="text-center bottom-animation">
              <p className="text-animation mb-0 pb-0 header2 opacity-1" />
              <br />
              <br />
            </Col>
          </Col>
          <Col xs="12" className="m-3 p-3">
            <Row>
              <Col xs="12">
                Key_Skills :
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Bootstrap</Tooltip>}
                >
                  <img
                    className="logo-md p-2"
                    src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/Bootstrap.png"
                  />
                </OverlayTrigger>
                <img
                  className="logo-md p-2"
                  src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/html1.png"
                />
                <img
                  className="logo-md p-2"
                  src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/css.png"
                />
                <img
                  className="logo-md p-2"
                  src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/react.png"
                />
                <img
                  className="logo-md p-2"
                  src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/Node.png"
                />
                <img
                  className="logo-md p-2"
                  src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/mongodb.png"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Jumbotron>
      <Skills />
    </div>
  );
}
