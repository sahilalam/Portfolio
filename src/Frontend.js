import React from "react";
import { Row, Col } from "react-bootstrap";
export default function Frontend() {
  return (
    <Row className="justify-content-center p-3">
      <Col xs="12" md="6" className="p-5 bottom-animation">
        <Row className="justify-content-center">
          <Col xs="12" className="project-head p-2 mb-3">
            Spotify-Playlists
          </Col>
          <Col xs="11" className="bg-dark p-2 project-body">
            <a href="https://sahilalam.github.io/SpotifyPlaylist/">
              <img
                className="project-image mb-3"
                src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/spotify.PNG"
              />
            </a>
            <Col xs="12" className="bg-dark project-body p-3">
              A site where you can manage your spotify playlists.
            </Col>
          </Col>
        </Row>
      </Col>
      <Col xs="12" md="6" className="p-5 top-animation">
        <Row className="justify-content-center">
          <Col xs="12" className="project-head p-2 mb-3">
            Tv-Shows
          </Col>
          <Col xs="11" className="bg-dark p-2 project-body">
            <a href="https://sahilalam.github.io/TV-Shows/">
              <img
                className="project-image mb-3"
                src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/tv.PNG"
              />
            </a>
            <Col xs="12" className="bg-dark project-body p-3">
              A site where you can search the details of various famous tv shows
              and series.
            </Col>
          </Col>
        </Row>
      </Col>
      <Col xs="12" md="6" className="p-5 top-animation">
        <Row className="justify-content-center">
          <Col xs="12" className="project-head p-2 mb-3">
            Basic To-Do
          </Col>
          <Col xs="11" className="bg-dark p-2 project-body">
            <a href="https://todoreactappsa.herokuapp.com/">
              <img
                className="project-image mb-3"
                src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/todo.PNG"
              />
            </a>
            <Col xs="12" className="bg-dark project-body p-3">
              A website to add,edit,or delete your todods.
            </Col>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
