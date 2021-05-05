import React from "react";
import { Navbar, Nav, Row, Col, Toast } from "react-bootstrap";
import { BrowserRouter, Route, NavLink, Redirect } from "react-router-dom";
import All from "./All.js";
import Frontend from "./Frontend.js";
import Reactprojects from "./React.js";
import Fullstack from "./Fullstack.js";

export default function Projects() {
  let [show, useShow] = React.useState(true);
  return (
    <BrowserRouter>
      <div className="container-fluid text-center " id="projects">
        <Toast
          show={show}
          className="fade-in  toast "
          onClose={() => {
            useShow(false);
          }}
        >
          <Toast.Header className="bg-transparent text-light text-small">
            Scroll down over images to see more.
          </Toast.Header>
        </Toast>
        <Row className="justify-content-center">
          <Navbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
            className="projects-nav top-animation"
          >
            <NavLink to="/projects/all" className="navbar-brand">
              Projects :
            </NavLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <NavLink className="nav-link navlink" to="/projects/all">
                  All
                </NavLink>
                <NavLink className="nav-link navlink" to="/projects/frontend">
                  Front-End
                </NavLink>
                <NavLink className="nav-link navlink" to="/projects/react">
                  React
                </NavLink>
                <NavLink className="nav-link navlink" to="/projects/fullstack">
                  Full-Stack
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
        <Route exaxt path="/projects">
          <Redirect to="/projects/all" />
        </Route>
        <Route exaxt path="/projects/all" component={All} />
        <Route exaxt path="/projects/frontend" component={Frontend} />
        <Route exaxt path="/projects/react" component={Reactprojects} />
        <Route exaxt path="/projects/fullstack" component={Fullstack} />
      </div>
    </BrowserRouter>
  );
}
