import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import SiteLogo from "./../../assets/images/site-logo.jpg";
// import React, { useState } from 'react';
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

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
        {/* Modal registration */}
        {/* <div
          className="modal mt-5 fade"
          id="staticBackdropSignUp"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Registration window
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <h2 className="modal-body-title text-center">Sign up</h2>
                <input
                  type="text"
                  className="form-control mb-4 p-3"
                  placeholder="Username"
                />
                <input
                  type="password"
                  className="form-control mb-4 p-3"
                  placeholder="Password"
                />
                <input
                  type="email"
                  className="form-control mb-4 p-3"
                  placeholder="E-mail address"
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div> */}

        {/* Modal sign in */}
        {/* <div
          className="modal mt-5 fade"
          id="staticBackdropSignIn"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Sign in
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <h2 className="modal-body-title text-center">Sign in</h2>
                <input
                  type="text"
                  className="form-control mb-4 p-3"
                  placeholder="Username"
                />
                <input
                  type="password"
                  className="form-control mb-4 p-3"
                  placeholder="Password"
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div> */}
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
          <a href="./../../../index.html" className="nav__link">
            <img
              src={SiteLogo}
              title="Site logo"
              alt="site logo"
              className="nav__link-img"
            />
          </a>
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__item-link p-1">
                Explore
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/doc" className="nav__item-link p-2">
                Documentation
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/int" className="nav__item-link p-2">
                Interview
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/test" className="nav__item-link p-2">
                Test
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
