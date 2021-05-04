import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
export default function All() {
  return (
    <Row className="justify-content-center p-1 pt-5 ">
      <Col xs="12" md="4" className="p-2 m-3">
        <Row className="justify-content-center p-1 pt-5">
          <Col xs="12" className="p-2 m-3">
            <ScrollAnimation
              animateIn="fadeInLeft"
              animateOut="fadeOutLeft"
              duration={2}
            >
              <Row className="justify-content-center">
                <Col xs="11" className=" p-2">
                  <OverlayTrigger
                    placement="auto"
                    overlay={
                      <Tooltip className="bg-dark project-body p-3">
                        <Col xs="12" className="project-head p-2 mb-3">
                          Blogger
                        </Col>
                        A site where you can share your thoughts by posting
                        blogs and people can like and comment on your post to
                        make it trending .
                      </Tooltip>
                    }
                  >
                    <a href="https://blogger-app.vercel.app/">
                      <Col xs="12" className="pi p-0 m-0" title="Blogger">
                        <img
                          className="project-image p-0 m-0 mb-3"
                          src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/Blogger.PNG"
                        />
                      </Col>
                    </a>
                  </OverlayTrigger>
                </Col>
              </Row>
            </ScrollAnimation>
          </Col>

          <Col xs="12" className="p-2 m-3 ">
            <ScrollAnimation
              animateIn="fadeInRight"
              animateOut="fadeOutRight"
              duration={2}
            >
              <Row className="justify-content-center">
                <Col xs="11" className=" p-2">
                  <OverlayTrigger
                    placement="auto"
                    overlay={
                      <Tooltip className="bg-dark project-body p-3">
                        <Col xs="12" className="project-head p-2 mb-3">
                          URL-Shortener
                        </Col>
                        A site where you can shorten your long unmanagable urls
                        to a short managable url in just one click.
                      </Tooltip>
                    }
                  >
                    <a href="http://url-shortener-lake.vercel.app/">
                      <Col xs="12" className="pi p-0 m-0" title="Url-Shortener">
                        <img
                          className="project-image mb-3"
                          src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/url.PNG"
                        />
                      </Col>
                    </a>
                  </OverlayTrigger>
                </Col>
              </Row>
            </ScrollAnimation>
          </Col>
          <Col xs="12" className="p-2 m-3">
            <ScrollAnimation
              animateIn="fadeInLeft"
              animateOut="fadeOutLeft"
              duration={2}
            >
              <Row className="justify-content-center">
                <Col xs="11" className=" p-2">
                  <OverlayTrigger
                    placement="auto"
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
                      <Col xs="12" className="pi p-0 m-0" title="Money Manager">
                        <img
                          className="project-image mb-3"
                          src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/Dashboard.PNG"
                        />
                      </Col>
                    </a>
                  </OverlayTrigger>
                </Col>
              </Row>
            </ScrollAnimation>
          </Col>
          <Col xs="12" className="p-2 m-3 ">
            <ScrollAnimation
              animateIn="fadeInRight"
              animateOut="fadeOutRight"
              duration={2}
            >
              <Row className="justify-content-center">
                <Col xs="11" className=" p-2">
                  <OverlayTrigger
                    placement="auto"
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
                      <Col
                        xs="12"
                        className="pi p-0 m-0"
                        title="Spotify Playlists"
                      >
                        <img
                          className="project-image mb-3"
                          src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/spotify.PNG"
                        />
                      </Col>
                    </a>
                  </OverlayTrigger>
                </Col>
              </Row>
            </ScrollAnimation>
          </Col>
          <Col xs="12" className="p-2 m-3 ">
            <ScrollAnimation
              animateIn="fadeInLeft"
              animateOut="fadeOutLeft"
              duration={2}
            >
              <Row className="justify-content-center">
                <Col xs="11" className=" p-2">
                  <OverlayTrigger
                    placement="auto"
                    overlay={
                      <Tooltip className="bg-dark project-body p-3">
                        <Col xs="12" className="project-head p-2 mb-3">
                          Tv-Shows
                        </Col>
                        A site where you can search the details of various
                        famous tv shows and series.
                      </Tooltip>
                    }
                  >
                    <a href="https://sahilalam.github.io/TV-Shows/">
                      <Col xs="12" className="pi p-0 m-0" title="Tv Shows">
                        <img
                          className="project-image mb-3"
                          src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/tv.PNG"
                        />
                      </Col>
                    </a>
                  </OverlayTrigger>
                </Col>
              </Row>
            </ScrollAnimation>
          </Col>
          <Col xs="12" className="p-2 m-3 ">
            <ScrollAnimation
              animateIn="fadeInRight"
              animateOut="fadeOutRight"
              duration={2}
            >
              <Row className="justify-content-center">
                <Col xs="11" className=" p-2">
                  <OverlayTrigger
                    placement="auto"
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
                      <Col xs="12" className="pi p-0 m-0" title="Basic To Do">
                        <img
                          className="project-image mb-3"
                          src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/todo.PNG"
                        />
                      </Col>
                    </a>
                  </OverlayTrigger>
                </Col>
              </Row>
            </ScrollAnimation>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
