import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";

const index = () => {
  return (
    <header className="header">
      <div className="container">
        {/* Modal registration */}
        <div
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
        </div>

        {/* Modal sign in */}
        <div
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
                {/* <input type="email" className="form-control mb-4 p-3" placeholder='E-mail address'/> */}
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
        </div>
        <nav className="nav">
          <a href="./../../../index.html" className="nav__link">
            <img
              src="https://via.placeholder.com/70x35"
              title="Site logo"
              alt="site logo"
              className="nav__link-img"
            />
          </a>
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__item-link">
                Explore
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/doc" className="nav__item-link">
                Documentation
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/int" className="nav__item-link">
                Interview
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/test" className="nav__item-link">
                Test
              </NavLink>
            </li>
          </ul>
          <div className="btnGroup">
            <button
              className="btn btn-light"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdropSignUp"
            >
              Sign up
            </button>
            <button
              className="btn btn-light"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdropSignIn"
            >
              Sign in
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default index;
