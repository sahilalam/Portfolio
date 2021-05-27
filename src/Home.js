import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {
  Navbar,
  Nav,
  Jumbotron,
  Row,
  Col,
  OverlayTrigger,
  Tooltip
} from 'react-bootstrap';
import { Context } from './App.js';
export default function Home() {
  const context = React.useContext(Context);
  let theme = 'header' + context.theme;

  return (
    <div className="container-fluid" id="home">
      <ScrollAnimation animateIn="fadeIn" duration={2}>
        <Jumbotron className="m-0 p-4 jumbotron bg-transparent">
          <Row className={'align-items-center p-1 pt-5 header ' + theme}>
            <Col
              xs="12"
              md="6"
              className="text-center pb-0 mb-0 "
              onClick={() => {
                context.toggletheme();
              }}
            >
              <Row className="justify-content-center">
                <ScrollAnimation
                  className="width-50 border-50"
                  animateIn="zoomInRight"
                  duration={2}
                  delay={2000}
                >
                  <Col className="p-0 m-0 logo-container">
                    <img
                      className="logo  p-2"
                      src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/SA.png"
                    />
                  </Col>
                </ScrollAnimation>
              </Row>
            </Col>

            <Col xs="12" md="6" className="box-body">
              <Col xs="12" md="10" className=" pb-0 mb-0">
                <ScrollAnimation
                  animateIn="fadeInRight"
                  duration={2}
                  delay={1000}
                >
                  <h1 className="heading ">Sahil Alam</h1>
                </ScrollAnimation>
              </Col>

              <Col xs="12" md="7" className="text-center">
                <ScrollAnimation
                  animateIn="fadeInRight"
                  duration={2}
                  delay={2000}
                >
                  <p className="text-animation mb-0 pb-0" />

                  <br />
                  <br />
                </ScrollAnimation>
              </Col>
            </Col>

            <Col xs="12" className="m-0 mt-3 mb-3 p-0 box-body">
              <Row className="justify-content-center">
                <Col className="text-center ">
                  <ScrollAnimation
                    animateIn="bounceInLeft"
                    duration={2}
                    delay={2000}
                  >
                    Key_Skills :
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Bootstrap</Tooltip>}
                    >
                      <img
                        className="logo-md p-2 m-1"
                        src={"https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/b.png"}
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
                  </ScrollAnimation>
                </Col>
              </Row>
            </Col>
            <Col xs="12" className=" ">
             
            </Col>
          </Row>
        </Jumbotron>
      </ScrollAnimation>
    </div>
  );
}
