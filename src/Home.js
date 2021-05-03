import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import {
  Navbar,
  Nav,
  Jumbotron,
  Row,
  Col,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";

export default function Home() {
  return (
    <div className="container-fluid">
      <ScrollAnimation animateIn="fadeInLeft" duration={1}>
        <Jumbotron className="m-0 p-4 jumbotron bg-transparent">
          <Row className="align-items-center p-1 pt-5 header">
            <Col
              xs="12"
              md="6"
              className="text-center top-animation pb-0 mb-0 "
            >
              <img
                className="logo p-2"
                src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/SA.png"
              />
            </Col>

            <Col xs="12" md="6" className="box-body">
              <Col xs="12" md="10" className="top-animation pb-0 mb-0">
                <h1 className="heading">Sahil Alam</h1>
              </Col>

              <Col xs="12" md="7" className="text-center bottom-animation">
                <p className="text-animation mb-0 pb-0" />

                <br />
                <br />
              </Col>
            </Col>

            <Col className="m-0 mt-3 mb-3 p-3 ">
              <ScrollAnimation animateIn="bounceInRight" duration={2} delay={1}>
                <Row>
                  <Col className="text-center box-body">
                    Key_Skills :
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Bootstrap</Tooltip>}
                    >
                      <img
                        className="logo-md p-2 m-1"
                        src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/Bootstrap.png"
                      />
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={<Tooltip>HTML</Tooltip>}
                    >
                      <img
                        className="logo-md p-2 m-1"
                        src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/html1.png"
                      />
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>CSS</Tooltip>}
                    >
                      <img
                        className="logo-md p-2 m-1"
                        src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/css.png"
                      />
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={<Tooltip>React</Tooltip>}
                    >
                      <img
                        className="logo-md p-2 m-1"
                        src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/react.png"
                      />
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Node.JS</Tooltip>}
                    >
                      <img
                        className="logo-md p-2 m-1"
                        src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/Node.png"
                      />
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={<Tooltip>MongoDB</Tooltip>}
                    >
                      <img
                        className="logo-md p-2 m-1"
                        src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/mongodb.png"
                      />
                    </OverlayTrigger>
                  </Col>
                </Row>
              </ScrollAnimation>
            </Col>
          </Row>

          <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
            <Navbar.Brand href="#home">Profiles</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="https://www.codechef.com/users/sahilalam">
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>CodeChef</Tooltip>}
                  >
                    <img
                      className="logo-md p-2 box-shadow-dark"
                      src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/codechef.jpg"
                    />
                  </OverlayTrigger>
                </Nav.Link>
                <Nav.Link href="https://leetcode.com/alamsahil939/">
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>LeetCode</Tooltip>}
                  >
                    <img
                      className="logo-md p-2 box-shadow-dark"
                      src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/leetcode.png"
                    />
                  </OverlayTrigger>
                </Nav.Link>
                <Nav.Link href="https://github.com/sahilalam">
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>github</Tooltip>}
                  >
                    <img
                      className="logo-md p-2 box-shadow-dark"
                      src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/github.png"
                    />
                  </OverlayTrigger>
                </Nav.Link>
              </Nav>
              <Navbar.Brand href="#home">Contact Me</Navbar.Brand>
              <Nav>
                <Nav.Link href="https://www.linkedin.com/in/sahil-alam-1b3024179/">
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>LinkedIn</Tooltip>}
                  >
                    <img
                      className="logo-md p-2 box-shadow-dark"
                      src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/LI.png"
                    />
                  </OverlayTrigger>
                </Nav.Link>
                <Nav.Link href="mailto:alamsahil939@gmail.com">
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>alamsahil939@gmail.com</Tooltip>}
                  >
                    <img
                      className="logo-md p-2 box-shadow-dark"
                      src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/gmail.png"
                    />
                  </OverlayTrigger>
                </Nav.Link>
                <Nav.Link href="https://api.whatsapp.com/send?phone=+917011498951">
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>+91 7011498951</Tooltip>}
                  >
                    <img
                      className="logo-md p-2 box-shadow-dark"
                      src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/whatsapp.png"
                    />
                  </OverlayTrigger>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Jumbotron>
      </ScrollAnimation>
    </div>
  );
}
