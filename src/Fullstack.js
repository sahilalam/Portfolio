import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
export default function Fullstack() {
  return (
    <Row className="justify-content-center p-1">
      <Col xs="12" md="4" className="p-2 m-3 ">
        <ScrollAnimation
          animateIn="fadeInLeft"
          animateOut="fadeOutLeft"
          duration={2}
        >
          <Row className="justify-content-center">
            <Col xs="11" className=" p-2">
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip className="bg-dark project-body p-3">
                    <Col xs="12" className="project-head p-2 mb-3">
                      URL-Shortener
                    </Col>
                    A site where you can shorten your long unmanagable urls to a
                    short managable url in just one click.
                  </Tooltip>
                }
              >
                <a href="http://url-shortener-lake.vercel.app/">
                  <img
                    className="project-image mb-3"
                    src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/url.PNG"
                  />
                </a>
              </OverlayTrigger>
            </Col>
          </Row>
        </ScrollAnimation>
      </Col>
      <Col xs="12" md="4" className="p-2 m-3">
        <ScrollAnimation
          animateIn="fadeInRight"
          animateOut="fadeOutRight"
          duration={2}
        >
          <Row className="justify-content-center">
            <Col xs="11" className=" p-2">
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip className="bg-dark project-body p-3">
                    <Col xs="12" className="project-head p-2 mb-3">
                      Money-Manager
                    </Col>
                    A site where you can where you can manage your financial
                    affairs .
                  </Tooltip>
                }
              >
                <a href="https://money-manager-seven.vercel.app/">
                  <img
                    className="project-image mb-3"
                    src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/Dashboard.PNG"
                  />
                </a>
              </OverlayTrigger>
            </Col>
          </Row>
        </ScrollAnimation>
      </Col>
      <Col xs="12" md="4" className="p-2 m-3">
        <ScrollAnimation
          animateIn="fadeInLeft"
          animateOut="fadeOutLeft"
          duration={2}
        >
          <Row className="justify-content-center">
            <Col xs="11" className=" p-2">
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip className="bg-dark project-body p-3">
                    <Col xs="12" className="project-head p-2 mb-3">
                      Blogger
                    </Col>
                    A site where you can share your thoughts by posting blogs
                    and people can like and comment on your post to make it
                    trending .
                  </Tooltip>
                }
              >
                <a href="https://blogger-app.vercel.app/">
                  <img
                    className="project-image mb-3"
                    src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/Blogger.PNG"
                  />
                </a>
              </OverlayTrigger>
            </Col>
          </Row>
        </ScrollAnimation>
      </Col>
    </Row>
  );
}
