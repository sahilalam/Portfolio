import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import {
  Row,
  Col,
  ProgressBar,
  OverlayTrigger,
  Tooltip,
  Toast
} from "react-bootstrap";

function Skills() {
  let [show, useShow] = React.useState(true);
  return (
    <div className="container-fluid bg-trnsparent scroll" id="skills">
      <Row className="justify-content-center p-1">
        <Col
          xs="12"
          className="heading text-light text-shadow-dark mb-3 top-animation"
        >
          SKILLS
        </Col>
        <Toast
          show={show}
          className="bg-light"
          onClose={() => {
            useShow(false);
          }}
        >
          <Toast.Header className="bg-transparent text-dark text-small">
            Hover over any skill to see more.
          </Toast.Header>
        </Toast>
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
                    scrollableParentSelector=".scroll"
                  >
                    <Col
                      xs="12"
                      className="bg-transparent mb-4 p-2 text-align-right b-b"
                    >
                      <h3>Front-End</h3>
                    </Col>
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateIn="fadeInLeft"
                    animateOut="fadeOutLeft"
                    duraion={0}
                    scrollableParentSelector=".scroll"
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
                    scrollableParentSelector=".scroll"
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
                    scrollableParentSelector=".scroll"
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
                    scrollableParentSelector=".scroll"
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
                              src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/b.png"
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
                    scrollableParentSelector=".scroll"
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
                <Col
                  xs="12"
                  md="6"
                  className="align-self-center p-0 text-center "
                >
                  <Col xs="10" className="text-align-right p-md-5 pt-5 pb-5">
                    Few things about me..
                    <div className="text-align-left   text-small details p-3">
                      <b>Full Name</b>
                      : Sahil Alam
                      <br />
                      <b>Age</b>
                      : 22
                      <br />
                      <b>D.O.B</b>
                      : 1 Nov 1998
                      <br />
                      <b>Nationality</b>
                      : Indian
                      <br />
                      <b>Graduation Year</b>
                      : 2020
                      <br />
                      <b>Degree</b>
                      : B.tech( Computer Science )
                      <br />
                      <b>E-mail</b>
                      : alamsahil939@gmail.com
                      <br />
                      <b>Contact no</b>
                      : +91 7011498951
                      <br />
                      <b>Current Address</b>
                      : New Delhi,110037
                      <br />
                    </div>
                  </Col>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="justify-content-start  m-3 mt-0 p-0 mb-0 ">
            <Col xs="12" className="p-0 m-0">
              <Row className="justify-content-end m-0 p-0">
                <Col xs="12" md="6" className="align-self-end p-0  con-right ">
                  <Col xs="10" className="text-align-left p-md-5 pt-5 pb-5">
                    A little more about me..
                    <div className="text-align-left   text-small details p-3">
                      I am also an E.D.M producer, i generally make electronic
                      music using the F.L Studio Software for Windows. If you
                      want to check my music, click the below icon to go to my
                      youtube channel where i have uploaded my work, and i hope
                      i will not disappoint you :)
                      <a
                        href="https://www.youtube.com/channel/UCpnCMxPpFTzB5VsXi-5NRlw"
                        target="_blank"
                      >
                        <img
                          className="logo-md"
                          src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/SA.png"
                        />
                      </a>
                    </div>
                  </Col>
                </Col>
                <Col xs="12" md="6" className="con m-0 p-0">
                  <ScrollAnimation
                    animateIn="bounceInLeft"
                    animateOut="bounceOutLeft"
                    animatePreScroll={false}
                    duraion={0}
                    delay={0}
                    scrollableParentSelector=".scroll"
                  >
                    <Col xs="12" className="bg-transparent mb-4 p-2 b-b ">
                      <h3>Back-End</h3>
                    </Col>
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateIn="fadeInRight"
                    animateOut="fadeOutRight"
                    duraion={0}
                    scrollableParentSelector=".scroll"
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
                    scrollableParentSelector=".scroll"
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
                    scrollableParentSelector=".scroll"
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
                    scrollableParentSelector=".scroll"
                  >
                    <Col
                      xs="12"
                      className="bg-transparent b-b mb-4 p-2 text-align-right "
                    >
                      <h3>Programming</h3>
                    </Col>
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateIn="fadeInLeft"
                    animateOut="fadeOutLeft"
                    duraion={0}
                    scrollableParentSelector=".scroll"
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
                    scrollableParentSelector=".scroll"
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
                <Col xs="12" md="6" className="align-self-end p-0 text-center ">
                  <Col xs="10" className="text-align-right p-md-5 pt-5 pb-5">
                    Just a little more..
                    <div className="text-align-left   text-small details p-3">
                      Besides coding and making music, i spend most of my free
                      time playing and watching football. Yes i am a huge
                      football lover and a huge Messi fan too. If you are also
                      interested in football by any chance, then you should
                      surely contact me, so that we can debate who is the
                      G.O.A.T ,Messi or Ronaldo 😂
                    </div>
                  </Col>
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
