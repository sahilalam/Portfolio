import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";
import Skills from "./Skills.js";
import Home from "./Home.js";
import Projects from "./Projects.js";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

export default function App() {
  return (
    <div id="home">
      <BrowserRouter>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="light"
          variant="light"
          className="nav-bar"
        >
          <NavLink to="/" className="navbar-brand">
            <img
              className="logo-sm"
              src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/SA.png"
            />
            _Sahil Alam
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavLink className="nav-link" to="/skills">
                Skills
              </NavLink>
              <NavLink className="nav-link" to="/projects">
                Projects
              </NavLink>
            </Nav>
            <Nav>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route exact path="/" component={Home} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/projects" component={Projects} />
      </BrowserRouter>
    </div>
  );
}
