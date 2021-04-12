import React from "react";
import { Row, Col, ProgressBar } from "react-bootstrap";

function Skills() {
  return (
    <div className="container-fluid bg-light top-animation" id="skills">
      <Row className="justify-content-center p-4">
        <Col
          xs="12"
          className="heading text-light text-shadow-dark mb-3 top-animation"
        >
          SKILLS
        </Col>
        <Col xs="12">
          <Row className="justify-content-start">
            <Col xs="12" md="6" className="mb-4 ">
              <Col xs="12" className="header2 box-head mb-4 p-2 top-animation">
                Front-End
              </Col>
              <Col xs="12" className="box-body mb-2 p-0 bottom-animation">
                <Col xs="12" className="card p-3">
                  <img
                    className="logo-md p-2"
                    src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/html1.png"
                  />
                  HTML
                  <ProgressBar variant="primary" now={80} className="bar" />
                </Col>
                <Col xs="12" className="card p-3">
                  <img
                    className="logo-md p-2"
                    src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/css.png"
                  />
                  CSS
                  <ProgressBar variant="primary" now={80} className="bar" />
                </Col>
                <Col xs="12" className="card p-3">
                  JAVASCRIPT
                  <img
                    className="logo-md p-2"
                    src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/js.png"
                  />
                  <ProgressBar variant="primary" now={70} className="bar" />
                </Col>
                <Col xs="12" className="card p-3">
                  <img
                    className="logo-md p-2"
                    src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/Bootstrap.png"
                  />
                  BOOTSTRAP
                  <ProgressBar variant="primary" now={80} className="bar" />
                </Col>
                <Col xs="12" className="card p-3">
                  <img
                    className="logo-md p-2"
                    src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/react.png"
                  />
                  REACT
                  <ProgressBar variant="primary" now={80} className="bar" />
                </Col>
              </Col>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs="12" md="6" className="mb-4 ">
              <Col xs="12" className="header2 box-head mb-4 p-2">
                Back-End
              </Col>
              <Col xs="12" className="box-body mb-2 p-0">
                <Col xs="12" className="card p-3">
                  <img
                    className="logo-md p-2"
                    src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/Node.png"
                  />
                  Node.js
                  <ProgressBar variant="primary" now={70} className="bar" />
                </Col>
                <Col xs="12" className="card p-3">
                  <img
                    className="logo-md p-2"
                    src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/express.png"
                  />
                  Express.js
                  <ProgressBar variant="primary" now={70} className="bar" />
                </Col>
                <Col xs="12" className="card p-3">
                  <img
                    className="logo-md p-2"
                    src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/mongodb.png"
                  />
                  MongoDB
                  <ProgressBar variant="primary" now={70} className="bar" />
                </Col>
              </Col>
            </Col>
          </Row>
          <Row className="justify-content-end">
            <Col xs="12" md="6" className="mb-4 ">
              <Col xs="12" className="header2 box-head mb-4 p-2">
                Programming
              </Col>
              <Col xs="12" className="box-body mb-2 p-0">
                <Col xs="12" className="card p-3">
                  <img
                    className="logo-md p-2"
                    src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/ds.png"
                  />
                  DS and Algo
                  <ProgressBar variant="primary" now={80} className="bar" />
                </Col>
                <Col xs="12" className="card p-3">
                  <img
                    className="logo-md p-2"
                    src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/c++.png"
                  />
                  C++
                  <ProgressBar variant="primary" now={70} className="bar" />
                </Col>
              </Col>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
export default Skills;
