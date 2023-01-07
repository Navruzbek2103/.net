import React from "react";
import "./style.scss";
import { NavLink, Link } from "react-router-dom";
import {BiBox} from "react-icons/bi"
import {TbGitFork} from "react-icons/tb"
import {FiDatabase} from "react-icons/fi"
import {FaDollarSign} from "react-icons/fa"


const index = () => {
  return (
    <section className="interview">
      <div className="container">
        <ul className="interview__category-list">
          <li className="interview__category-item">
            <NavLink to="/" className="interview__category-item-link">
              <BiBox color="black" />
              All Topics
            </NavLink>
          </li>
          <li className="interview__category-item">
            <NavLink to="/" className="interview__category-item-link">
              <TbGitFork size={`1.2em`} color="#FFA116" />
              Algorithms
            </NavLink>
          </li>
          <li className="interview__category-item">
            <NavLink to="/" className="interview__category-item-link">
              <FiDatabase color="#007AFF" />
              Database
            </NavLink>
          </li>
          <li className="interview__category-item">
            <NavLink to="/" className="interview__category-item-link">
              <FaDollarSign color="#2DB55D"/>
              Shell
            </NavLink>
          </li>
          <li className="interview__category-item">
            <NavLink to="/" className="interview__category-item-link">
            <span className="interview__category-item-span">S</span>
              Concurrency
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default index;
