import React from "react";
import {
  Row,
  Col,
  ProgressBar,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";

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
              <Row className="justify-content-center">
                <Col
                  xs="12"
                  className="header2 box-head mb-4 p-2 top-animation"
                >
                  Front-End
                </Col>
                <Col xs="10" className="box-body mb-2 p-0 bottom-animation">
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Working on HTML since Jan 2020</Tooltip>}
                  >
                    <Col xs="12" className="card p-3">
                      <Row className="justify-content-center p-1">
                        <Col xs="6" className="text-align-right">
                          <img
                            className="logo-md p-0"
                            src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/html1.png"
                          />
                        </Col>
                        <Col xs="6" className="p-2">
                          HTML
                        </Col>
                      </Row>
                      <ProgressBar variant="primary" now={80} className="bar" />
                    </Col>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Working on CSS since Jan 2020</Tooltip>}
                  >
                    <Col xs="12" className="card p-3">
                      <Row className="justify-content-center p-1">
                        <Col xs="6" className="text-align-right">
                          <img
                            className="logo-md p-2"
                            src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/css.png"
                          />
                        </Col>
                        <Col xs="6" className="p-2">
                          CSS
                        </Col>
                      </Row>
                      <ProgressBar variant="primary" now={80} className="bar" />
                    </Col>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="right"
                    overlay={
                      <Tooltip>Working on JavaScript since May 2020</Tooltip>
                    }
                  >
                    <Col xs="12" className="card p-3">
                      <Row className="justify-content-center p-1">
                        <Col xs="6" className="text-align-right">
                          <img
                            className="logo-md p-2"
                            src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/js.png"
                          />
                        </Col>
                        <Col xs="6" className="p-2">
                          JAVASCRIPT
                        </Col>
                      </Row>
                      <ProgressBar variant="primary" now={70} className="bar" />
                    </Col>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="right"
                    overlay={
                      <Tooltip>Working on BootStrap since May 2020</Tooltip>
                    }
                  >
                    <Col xs="12" className="card p-3">
                      <Row className="justify-content-center p-1">
                        <Col xs="6" className="text-align-right">
                          <img
                            className="logo-md p-2"
                            src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/Bootstrap.png"
                          />
                        </Col>
                        <Col xs="6" className="p-2">
                          BOOTSTRAP
                        </Col>
                      </Row>
                      <ProgressBar variant="primary" now={80} className="bar" />
                    </Col>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="right"
                    overlay={
                      <Tooltip>Working on React since March 2021</Tooltip>
                    }
                  >
                    <Col xs="12" className="card p-3">
                      <Row className="justify-content-center p-1">
                        <Col xs="6" className="text-align-right">
                          <img
                            className="logo-md p-2"
                            src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/react.png"
                          />
                        </Col>
                        <Col xs="6" className="p-2">
                          REACT
                        </Col>
                      </Row>
                      <ProgressBar variant="primary" now={80} className="bar" />
                    </Col>
                  </OverlayTrigger>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs="12" md="6" className="mb-4 ">
              <Row className="justify-content-center">
                <Col xs="12" className="header2 box-head mb-4 p-2">
                  Back-End
                </Col>
                <Col xs="10" className="box-body mb-2 p-0">
                  <OverlayTrigger
                    placement="right"
                    overlay={
                      <Tooltip>Working on Node.Js since May 2020</Tooltip>
                    }
                  >
                    <Col xs="12" className="card p-3">
                      <Row className="justify-content-center p-1">
                        <Col xs="6" className="text-align-right">
                          <img
                            className="logo-md p-2"
                            src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/Node.png"
                          />
                        </Col>
                        <Col xs="6" className="p-2">
                          Node.js
                        </Col>
                      </Row>
                      <ProgressBar variant="primary" now={70} className="bar" />
                    </Col>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="right"
                    overlay={
                      <Tooltip>Working on Express.Js since May 2020</Tooltip>
                    }
                  >
                    <Col xs="12" className="card p-3">
                      <Row className="justify-content-center p-1">
                        <Col xs="6" className="text-align-right">
                          <img
                            className="logo-md p-2"
                            src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/express.png"
                          />
                        </Col>
                        <Col xs="6" className="p-2">
                          Express.js
                        </Col>
                      </Row>
                      <ProgressBar variant="primary" now={70} className="bar" />
                    </Col>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="left"
                    overlay={
                      <Tooltip>Working on MongoDB since March 2021</Tooltip>
                    }
                  >
                    <Col xs="12" className="card p-3">
                      <Row className="justify-content-center p-1">
                        <Col xs="6" className="text-align-right">
                          <img
                            className="logo-md p-2"
                            src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/mongodb.png"
                          />
                        </Col>
                        <Col xs="6" className="p-2">
                          MongoDB
                        </Col>
                      </Row>
                      <ProgressBar variant="primary" now={70} className="bar" />
                    </Col>
                  </OverlayTrigger>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-end">
            <Col xs="12" md="6" className="mb-4 ">
              <Row className="justify-content-center">
                <Col xs="12" className="header2 box-head mb-4 p-2">
                  Programming
                </Col>
                <Col xs="10" className="box-body mb-2 p-0">
                  <OverlayTrigger
                    placement="left"
                    overlay={
                      <Tooltip>Working on Ds and Algo since March 2020</Tooltip>
                    }
                  >
                    <Col xs="12" className="card p-3">
                      <Row className="justify-content-center p-1">
                        <Col xs="6" className="text-align-right">
                          <img
                            className="logo-md p-2"
                            src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/ds.png"
                          />
                        </Col>
                        <Col xs="6" className="p-2">
                          DS and Algo
                        </Col>
                      </Row>
                      <ProgressBar variant="primary" now={80} className="bar" />
                    </Col>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="left"
                    overlay={<Tooltip>Working on C++ since Jan 2020</Tooltip>}
                  >
                    <Col xs="12" className="card p-3">
                      <Row className="justify-content-center p-1">
                        <Col xs="6" className="text-align-right">
                          <img
                            className="logo-md p-2"
                            src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/c++.png"
                          />
                        </Col>
                        <Col xs="6" className="p-2">
                          C++
                        </Col>
                      </Row>
                      <ProgressBar variant="primary" now={70} className="bar" />
                    </Col>
                  </OverlayTrigger>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
export default Skills;
