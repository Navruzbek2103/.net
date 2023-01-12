import React from "react";
import "./style.scss";
import { NavLink, Link } from "react-router-dom";
import SiteLogo from "./../../assets/images/site-logo.jpg";
// import React, { useState } from 'react';
import ExploreIcon from '@mui/icons-material/Explore';
import ArticleIcon from '@mui/icons-material/Article';
import InterestsIcon from '@mui/icons-material/Interests';
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Intro from "./../../components/Main/Intro";
const index = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [sign, setSign] = useState(false);

  const handleSign = () => setSign(false);
  const handleSignIn = () => setSign(true);
  return (
    <header className="header">
      <div className="container">
        <Modal className="mt-4 pt-5" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal registration</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Username</Form.Label>
                <Form.Control type="email" placeholder="@username" autoFocus />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Enter Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              ></Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        {/* sign in */}
        <Modal show={sign} className="mt-5 pt-5" onHide={handleSign}>
          <Modal.Header closeButton>
            <Modal.Title>Modal Sign in</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Username</Form.Label>
                <Form.Control type="email" placeholder="@username" autoFocus />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Enter Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSign}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <nav className="nav">
          <NavLink to="/explore" className="nav__link">
            <img
              src={SiteLogo}
              title="Site logo"
              alt="site logo"
              className="nav__link-img"
            />
          </NavLink>
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__item-link p-2">
                <ExploreIcon className="mobile_menu" />
                Explore
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/doc" className="nav__item-link p-2">
                <ArticleIcon className="mobile_menu" />
                Documentation
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/int" className="nav__item-link p-2">
                <InterestsIcon className="mobile_menu" />
                Interview
              </NavLink>
            </li>
          </ul>
          <div className="btnGroup">
            <Button variant="secondary" onClick={handleShow}>
              Sign up
            </Button>
            <Button variant="primary" onClick={handleSignIn}>
              Sign in
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default index;
