import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
export default function Frontend() {
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
                      Spotify-Playlists
                    </Col>
                    A site where you can manage your spotify playlists.
                  </Tooltip>
                }
              >
                <a href="https://sahilalam.github.io/SpotifyPlaylist/">
                  <img
                    className="project-image mb-3"
                    src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/spotify.PNG"
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
                      Tv-Shows
                    </Col>
                    A site where you can search the details of various famous tv
                    shows and series.
                  </Tooltip>
                }
              >
                <a href="https://sahilalam.github.io/TV-Shows/">
                  <img
                    className="project-image mb-3"
                    src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/tv.PNG"
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
                      Basic To-Do
                    </Col>
                    A website to add,edit,or delete your todods.
                  </Tooltip>
                }
              >
                <a href="https://todoreactappsa.herokuapp.com/">
                  <img
                    className="project-image mb-3"
                    src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/todo.PNG"
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
