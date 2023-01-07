import React from "react";
import "./style.scss";
import { NavLink, Link } from "react-router-dom";
import {BiBox} from "react-icons/bi"
import {TbGitFork} from "react-icons/tb"
import {FiDatabase} from "react-icons/fi"
import {FaDollarSign} from "react-icons/fa"
import Questions from "./../../UI/Questions"


const index = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

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
              <BiBox color="red" />
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
        <div className="interview__wrapper">
          <h2 className="interview__title">Questions</h2>
          <ol className="interview__list" >
            {
              nums.map((item, i) => {
                return <Questions key={item} data={item} />
              })
            }
          </ol>
        </div>
      </div>
    </section>
  );
};

export default index;
