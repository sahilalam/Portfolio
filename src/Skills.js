import React from "react";
import { Row, Col, ProgressBar } from "react-bootstrap";

function Skills() {
  return (
    <div className="container-fluid bg-dark" id="skills">
      <Row className="justify-content-center p-5">
        <Col xs="12" className="heading text-light text-shadow-dark mb-3">
          SKILLS
        </Col>
        <Col xs="12">
          <Row className="justify-content-center">
            <Col xs="12" md="4" className="mb-4 ">
              <Col xs="12" className="header2 box-head mb-4 p-2">
                Front-End
              </Col>
              <Col xs="12" className="box-body bg-dark mb-2 p-0">
                <Col xs="12" className="card p-3 mb-2">
                  HTML
                  <ProgressBar striped variant="info" now={80} />
                </Col>
                <Col xs="12" className="card p-3 mb-2">
                  CSS
                  <ProgressBar striped variant="info" now={80} />
                </Col>
                <Col xs="12" className="card p-3 mb-2">
                  JAVASCRIPT
                  <ProgressBar striped variant="info" now={70} />
                </Col>
                <Col xs="12" className="card p-3 mb-2">
                  BOOTSTRAP
                  <ProgressBar striped variant="info" now={80} />
                </Col>
                <Col xs="12" className="card p-3 mb-2">
                  REACT
                  <ProgressBar striped variant="info" now={80} />
                </Col>
              </Col>
            </Col>
            <Col xs="12" md="4" className="mb-4 ">
              <Col xs="12" className="header2 box-head mb-4 p-2">
                Back-End
              </Col>
              <Col xs="12" className="box-body bg-dark mb-2 p-0">
                <Col xs="12" className="card p-3 mb-2">
                  Node.js
                  <ProgressBar striped variant="info" now={70} />
                </Col>
                <Col xs="12" className="card p-3 mb-2">
                  Express.js
                  <ProgressBar striped variant="info" now={70} />
                </Col>
                <Col xs="12" className="card p-3 mb-2">
                  MongoDB
                  <ProgressBar striped variant="info" now={70} />
                </Col>
              </Col>
            </Col>
            <Col xs="12" md="4" className="mb-4 ">
              <Col xs="12" className="header2 box-head mb-4 p-2">
                Programming
              </Col>
              <Col xs="12" className="box-body bg-dark mb-2 p-0">
                <Col xs="12" className="card p-3 mb-2">
                  DS and Algo
                  <ProgressBar striped variant="info" now={80} />
                </Col>
                <Col xs="12" className="card p-3 mb-2">
                  C++
                  <ProgressBar striped variant="info" now={70} />
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
