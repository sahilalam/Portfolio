import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import {
  Row,
  Col,
  ProgressBar,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";

function Skills() {
  return (
    <div className="container-fluid bg-trnsparent" id="skills">
      <Row className="justify-content-center p-1">
        <Col
          xs="12"
          className="heading text-light text-shadow-dark mb-3 top-animation"
        >
          SKILLS
        </Col>
        <Col xs="10" className="p-0 m-0 pb-5  mb-5">
          <Row className="justify-content-start m-3 p-0 mb-0">
            <Col xs="12" className="m-0 p-0">
              <Row className="justify-content-start p-0 m-0">
                <Col xs="12" md="6" className="con-right p-0 m-0">
                  <ScrollAnimation
                    animateIn="bounceInRight"
                    animateOut="bounceOutRight"
                    animatePreScroll={true}
                    duraion={0}
                    delay={0}
                  >
                    <Col
                      xs="12"
                      className="bg-transparent mb-4 p-2 text-align-right "
                    >
                      <h3>Front-End</h3>
                    </Col>
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateIn="fadeInLeft"
                    animateOut="fadeOutLeft"
                    duraion={0}
                  >
                    <OverlayTrigger
                      placement="auto"
                      overlay={
                        <Tooltip className="box-head">
                          <div className="text">8 / 10</div>
                          <ProgressBar
                            variant="info"
                            className="bar"
                            now={80}
                          />
                          <br />
                          <div className="project-head">
                            Working on HTML since Jan 2020
                          </div>
                        </Tooltip>
                      }
                    >
                      <Col xs="12" className="card-right p-0">
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
                      </Col>
                    </OverlayTrigger>
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateIn="fadeInLeft"
                    animateOut="fadeOutLeft"
                    duraion={0}
                  >
                    <OverlayTrigger
                      placement="auto"
                      overlay={
                        <Tooltip className="box-head">
                          <div className="text">8 / 10</div>
                          <ProgressBar
                            variant="info"
                            className="bar"
                            now={80}
                          />
                          <br />
                          <div className="project-head">
                            Working on CSS since Jan 2020
                          </div>
                        </Tooltip>
                      }
                    >
                      <Col xs="12" className="card-right p-0">
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
                      </Col>
                    </OverlayTrigger>
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateIn="fadeInLeft"
                    animateOut="fadeOutLeft"
                    duraion={0}
                  >
                    <OverlayTrigger
                      placement="auto"
                      overlay={
                        <Tooltip className="box-head">
                          <div className="text">7 / 10</div>
                          <ProgressBar
                            variant="info"
                            className="bar"
                            now={70}
                          />
                          <br />
                          <div className="project-head">
                            Working on JavaScript since May 2020
                          </div>
                        </Tooltip>
                      }
                    >
                      <Col xs="12" className="card-right p-0">
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
                      </Col>
                    </OverlayTrigger>
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateIn="fadeInLeft"
                    animateOut="fadeOutLeft"
                    duraion={0}
                  >
                    <OverlayTrigger
                      placement="auto"
                      overlay={
                        <Tooltip className="box-head">
                          <div className="text">8 / 10</div>
                          <ProgressBar
                            variant="info"
                            className="bar"
                            now={80}
                          />
                          <br />
                          <div className="project-head">
                            Working on BootStrap since May 2020
                          </div>
                        </Tooltip>
                      }
                    >
                      <Col xs="12" className="card-right p-0">
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
                      </Col>
                    </OverlayTrigger>
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateIn="fadeInLeft"
                    animateOut="fadeOutLeft"
                    duraion={0}
                  >
                    <OverlayTrigger
                      placement="auto"
                      overlay={
                        <Tooltip className="box-head">
                          <div className="text">8 / 10</div>
                          <ProgressBar
                            variant="info"
                            className="bar"
                            now={80}
                          />
                          <br />
                          <div className="project-head">
                            Working on React since March 2021
                          </div>
                        </Tooltip>
                      }
                    >
                      <Col xs="12" className="card-right p-0">
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
                      </Col>
                    </OverlayTrigger>
                  </ScrollAnimation>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="justify-content-start  m-3 mt-0 p-0 mb-0 ">
            <Col xs="12" className="p-0 m-0">
              <Row className="justify-content-end m-0 p-0">
                <Col xs="6" className="con-right p-0 m-0" />
                <Col xs="12" md="6" className="con m-0 p-0">
                  <ScrollAnimation
                    animateIn="bounceInLeft"
                    animateOut="bounceOutLeft"
                    animatePreScroll={false}
                    duraion={0}
                    delay={0}
                  >
                    <Col xs="12" className="bg-transparent mb-4 p-2 ">
                      <h3>Back-End</h3>
                    </Col>
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateIn="fadeInRight"
                    animateOut="fadeOutRight"
                    duraion={0}
                  >
                    <OverlayTrigger
                      placement="auto"
                      overlay={
                        <Tooltip className="box-head">
                          <div className="text">7 / 10</div>
                          <ProgressBar
                            variant="info"
                            className="bar"
                            now={70}
                          />
                          <br />
                          <div className="project-head">
                            Working on Node.Js since May 2020
                          </div>
                        </Tooltip>
                      }
                    >
                      <Col xs="12" className="card p-0">
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
                      </Col>
                    </OverlayTrigger>
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateIn="fadeInRight"
                    animateOut="fadeOutRight"
                    duraion={0}
                  >
                    <OverlayTrigger
                      placement="auto"
                      overlay={
                        <Tooltip className="box-head">
                          <div className="text">7 / 10</div>
                          <ProgressBar
                            variant="info"
                            className="bar"
                            now={70}
                          />
                          <br />
                          <div className="project-head">
                            Working on Express.Js since May 2020
                          </div>
                        </Tooltip>
                      }
                    >
                      <Col xs="12" className="card p-0">
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
                      </Col>
                    </OverlayTrigger>
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateIn="fadeInRight"
                    animateOut="fadeOutRight"
                    duraion={0}
                  >
                    <OverlayTrigger
                      placement="auto"
                      overlay={
                        <Tooltip className="box-head">
                          <div className="text">7 / 10</div>
                          <ProgressBar
                            variant="info"
                            className="bar"
                            now={70}
                          />
                          <br />
                          <div className="project-head">
                            Working on MongoDB since March 2021
                          </div>
                        </Tooltip>
                      }
                    >
                      <Col xs="12" className="card p-0">
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
                      </Col>
                    </OverlayTrigger>
                  </ScrollAnimation>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="justify-content-start m-3 mt-0 p-0">
            <Col xs="12" className="p-0 m-0">
              <Row className="justify-content-start p-0 m-0">
                <Col xs="12" md="6" className="con-right p-0 m-0">
                  <ScrollAnimation
                    animateIn="bounceInRight"
                    animateOut="bounceOutRight"
                    animatePreScroll={false}
                    duraion={0}
                    delay={0}
                  >
                    <Col
                      xs="12"
                      className="bg-transparent mb-4 p-2 text-align-right "
                    >
                      <h3>Programming</h3>
                    </Col>
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateIn="fadeInLeft"
                    animateOut="fadeOutLeft"
                    duraion={0}
                  >
                    <OverlayTrigger
                      placement="auto"
                      overlay={
                        <Tooltip className="box-head">
                          <div className="text">8 / 10</div>
                          <ProgressBar
                            variant="info"
                            className="bar"
                            now={80}
                          />
                          <br />
                          <div className="project-head">
                            Working on Ds and Algo since March 2020
                          </div>
                        </Tooltip>
                      }
                    >
                      <Col xs="12" className="card-right p-0">
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
                      </Col>
                    </OverlayTrigger>
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateIn="fadeInLeft"
                    animateOut="fadeOutLeft"
                    duraion={0}
                  >
                    <OverlayTrigger
                      placement="auto"
                      overlay={
                        <Tooltip className="box-head">
                          <div className="text">7 / 10</div>
                          <ProgressBar
                            variant="info"
                            className="bar"
                            now={70}
                          />
                          <br />
                          <div className="project-head">
                            Working on C++ since Jan 2020
                          </div>
                        </Tooltip>
                      }
                    >
                      <Col xs="12" className="card-right p-0">
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
                      </Col>
                    </OverlayTrigger>
                  </ScrollAnimation>
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
