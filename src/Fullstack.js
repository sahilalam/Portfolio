import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
export default function Fullstack() {
  return (
    <Row className="justify-content-center p-1 pt-2">
      <Col xs="12" md="6" className="p-5 m-0 project-con scroll">
        <Row className="justify-content-center p-1 pt-5 pb-5">
          <Col xs="10" className="p-0 m-1 ">
            <ScrollAnimation
              animateIn="zoom-in"
              animateOut="zoom-out"
              scrollableParentSelector=".scroll"
              offset={400}
            >
              <Row className="justify-content-center">
                <Col xs="11" className=" p-0">
                  <a
                    href="http://url-shortener-lake.vercel.app/"
                    target="_blank"
                  >
                    <Col
                      xs="12"
                      className="pi p-0 m-0"
                      id="Url-Shortener"
                      alt="A site where you can shorten your long unmanagable urls
                        to a short managable url in just one click."
                    >
                      <img
                        className="project-image m-0 p-0"
                        src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/url.PNG"
                      />
                    </Col>
                  </a>
                </Col>
              </Row>
            </ScrollAnimation>
          </Col>
          <Col xs="10" className="p-0 m-1">
            <ScrollAnimation
              animateIn="zoom-in"
              animateOut="zoom-out"
              scrollableParentSelector=".scroll"
              offset={400}
            >
              <Row className="justify-content-center">
                <Col xs="11" className=" p-0">
                  <a
                    href="https://money-manager-seven.vercel.app/"
                    target="_blank"
                  >
                    <Col
                      xs="12"
                      className="pi p-0 m-0"
                      id="Money Manager"
                      alt="A site where you can where you can manage your financial
                        affairs ."
                    >
                      <img
                        className="project-image m-0 p-0"
                        src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/Dashboard.PNG"
                      />
                    </Col>
                  </a>
                </Col>
              </Row>
            </ScrollAnimation>
          </Col>
          <Col xs="10" className="p-0 m-1">
            <ScrollAnimation
              animateIn="zoom-in"
              animateOut="zoom-out"
              scrollableParentSelector=".scroll"
              offset={400}
            >
              <Row className="justify-content-center">
                <Col xs="11" className=" p-0">
                  <a href="https://blogger-app.vercel.app/" target="_blank">
                    <Col
                      xs="12"
                      className="pi p-0 m-0"
                      id="Blogger"
                      alt="A site where you can share your thoughts by posting
                        blogs and people can like and comment on your post to
                        make it trending ."
                    >
                      <img
                        className="project-image p-0 m-0 "
                        src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/Blogger.PNG"
                      />
                    </Col>
                  </a>
                </Col>
              </Row>
            </ScrollAnimation>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
