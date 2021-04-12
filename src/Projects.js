import React from "react";
import { Navbar, Nav, Row, Col } from "react-bootstrap";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import All from "./All.js";

export default function Projects() {
  return (
    <BrowserRouter>
      <div className="container-fluid text-center">
        <Row className="justify-content-center">
          <Navbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
            className="projects-nav top-animation"
          >
            <NavLink to="/" className="navbar-brand">
              Projects :
            </NavLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <NavLink className="nav-link" to="/projects/all">
                  All
                </NavLink>
                <NavLink className="nav-link" to="/projects/frontend">
                  Front-End
                </NavLink>
                <NavLink className="nav-link" to="/projects/react">
                  React
                </NavLink>
                <NavLink className="nav-link" to="/projects/fullstack">
                  Full-Stack
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
        <Route exaxt path="/projects/all" component={All} />
        <Route exaxt path="/projects/frontent" />
        <Route exaxt path="/projects/react" />
        <Route exaxt path="/projects/fullstack" />
      </div>
    </BrowserRouter>
  );
}
