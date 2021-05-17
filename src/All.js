import React from 'react';
import v from "./ICONS/v.PNG";
import u from "./ICONS/url.PNG";
import d from "./ICONS/Dashboard.PNG";
import b from "./ICONS/Blogger.PNG";
import s from "./ICONS/spotify.PNG";
import t from "./ICONS/tv.PNG";
import to from "./ICONS/todo.PNG";
import ScrollAnimation from 'react-animate-on-scroll';
import { Row, Col } from 'react-bootstrap';
export default function All() {
  return (
    <Row className="justify-content-center p-1 pt-2  ">
      <Col xs="12" md="6" className="p-5 m-0 scroll project-con">
        <Row className="justify-content-center p-1 pt-5 pb-5">
          <Col xs="10" className="p-0 m-1">
            <ScrollAnimation
              animateIn="zoom-in"
              animateOut="zoom-out"
              scrollableParentSelector=".scroll"
              offset={400}
            >
              <Row className="justify-content-center">
                <Col xs="11" className=" p-0">
                  <a href="https://v-tube.vercel.app/" target="_blank">
                    <Col
                      xs="12"
                      className="pi p-0 m-0"
                      id="V-Tube"
                      alt="A site where you can share short videos to get views ,likes and comments."
                    >
                      <img
                        className="project-image p-0 m-0 "
                        src={v}
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
                        src={u}
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
                        src={d}
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
                        src={b}
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
