import React from "react";
import { Row, Col } from "react-bootstrap";
export default function All() {
  return (
    <Row className="justify-content-center p-1">
      <Col xs="12" md="6" className="p-5 bottom-animation">
        <Row className="justify-content-center">
          <Col xs="12" className="project-head p-2 mb-3">
            Blogger
          </Col>
          <Col xs="11" className="bg-dark p-2 project-body">
            <a href="https://blogger-app.vercel.app/">
              <img
                className="project-image mb-3"
                src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/Blogger.PNG"
              />
            </a>
            <Col xs="12" className="bg-dark project-body p-3">
              A site where you can share your thoughts by posting blogs and
              people can like and comment on your post to make it trending .
            </Col>
          </Col>
        </Row>
      </Col>
      <Col xs="12" md="6" className="p-5 bottom-animation project">
        <Row className="justify-content-center">
          <Col xs="12" className="project-head p-2 mb-3">
            URL-Shortener
          </Col>
          <Col xs="11" className="bg-dark p-2 project-body">
            <a href="http://url-shortener-lake.vercel.app/">
              <img
                className="project-image mb-3"
                src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/url.PNG"
              />
            </a>
            <Col xs="12" className="bg-dark project-body p-3">
              A site where you can shorten your long unmanagable urls to a short
              managable url in just one click.
            </Col>
          </Col>
        </Row>
      </Col>
      <Col xs="12" md="6" className="p-5 top-animation">
        <Row className="justify-content-center">
          <Col xs="12" className="project-head p-2 mb-3">
            Money-Manager
          </Col>
          <Col xs="11" className="bg-dark p-2 project-body">
            <a href="https://money-manager-seven.vercel.app/">
              <img
                className="project-image mb-3"
                src="https://raw.githubusercontent.com/sahilalam/SocialMediaProjectNodejs/master/src/public/Components/ICONS/Dashboard.PNG"
              />
            </a>
            <Col xs="12" className="bg-dark project-body p-3">
              A site where you can where you can manage your financial affairs .
            </Col>
          </Col>
        </Row>
      </Col>
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
