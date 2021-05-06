import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './style.css';
import Skills from './Skills.js';
import Home from './Home.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

export const Context = React.createContext();

export default function App() {
  let [theme, changeTheme] = React.useState('dark');
  let toggletheme = () => {
    changeTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <div className={'bg' + theme}>
      <BrowserRouter>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="transparent"
          variant="dark"
          className="nav-bar"
        >
          <NavLink to="/" className="navbar-brand navlink p-2">
            <img
              className="logo-sm"
              src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/SA.png"
            />
            _Sahil Alam
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavLink className="nav-link navlink" to="/skills">
                Skills
              </NavLink>
              <NavLink className="nav-link navlink" to="/projects">
                Projects
              </NavLink>
              <a
                className="nav-link navlink"
                href="https://drive.google.com/file/d/1W2DuL7rzLjXi1-lWKiHpUDHw6He432rq/view?usp=sharing"
                target="_blank"
              >
                RESUME
              </a>
            </Nav>

            <Nav>
              <button
                className="navbar-brand navlink buton"
                onClick={() => {
                  toggletheme();
                }}
              >
                {theme === 'dark' ? '💡 light' : '🌙 dark'}
              </button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Context.Provider value={{ theme, toggletheme }}>
          <Route exact path="/" component={Home} />
        </Context.Provider>
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
      </BrowserRouter>
    </div>
  );
}
