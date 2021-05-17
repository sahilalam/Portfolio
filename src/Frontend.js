import React from "react";

import s from "./ICONS/spotify.PNG";
import t from "./ICONS/tv.PNG";
import to from "./ICONS/todo.PNG";
import ScrollAnimation from "react-animate-on-scroll";
import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
export default function Frontend() {
  return (
    <Row className="justify-content-center p-1 pt-2">
      <Col xs="12" md="6" className="p-5 m-0 scroll project-con">
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
                    href="https://sahilalam.github.io/SpotifyPlaylist/"
                    target="_blank"
                  >
                    <Col
                      xs="12"
                      className="pi p-0 m-0"
                      id="Spotify Playlists"
                      alt="A site where you can manage your spotify playlists."
                    >
                      <img
                        className="project-image m-0 p-0"
                        src={s}
                      />
                    </Col>
                  </a>
                </Col>
              </Row>
            </ScrollAnimation>
          </Col>
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
                    href="https://sahilalam.github.io/TV-Shows/"
                    target="_blank"
                  >
                    <Col
                      xs="12"
                      className="pi p-0 m-0"
                      id="Tv Shows"
                      alt=" A site where you can search the details of various
                        famous tv shows and series."
                    >
                      <img
                        className="project-image m-0 p-0"
                        src={t}
                      />
                    </Col>
                  </a>
                </Col>
              </Row>
            </ScrollAnimation>
          </Col>
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
                    href="https://todoreactappsa.herokuapp.com/"
                    target="_blank"
                  >
                    <Col
                      xs="12"
                      className="pi p-0 m-0"
                      id="Basic To Do"
                      alt=" A website to add,edit,or delete your todods."
                    >
                      <img
                        className="project-image m-0 p-0"
                        src={to}
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
