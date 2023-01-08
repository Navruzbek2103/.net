import React from "react";
import "./style.scss";
import { NavLink, Link, Outlet } from "react-router-dom";
import {BiBox} from "react-icons/bi"
import {TbGitFork} from "react-icons/tb"
import {FiDatabase} from "react-icons/fi"
import {SiCsharp} from "react-icons/si"
import {DiDotnet} from "react-icons/di"
// import Questions from "./../../UI/Questions"


const index = () => {

  return (
    <section className="interview">
      <div className="container">
        <ul className="interview__category-list">
          <li className="interview__category-item">
            <NavLink to="/int/allTopics" className="interview__category-item-link">
              <BiBox color="black" />
              All Topics
            </NavLink>
          </li>
          <li className="interview__category-item">
            <NavLink to="/int/algorithms" className="interview__category-item-link">
              <TbGitFork size={`1.2em`} color="#FFA116" />
              Algorithms
              <BiBox color="red" />
            </NavLink>
          </li>
          <li className="interview__category-item">
            <NavLink to="/int/database" className="interview__category-item-link">
              <FiDatabase color="#007AFF" />
              Database
            </NavLink>
          </li>
          <li className="interview__category-item">
            <NavLink to="/int/csharp" className="interview__category-item-link">
              <SiCsharp color="#1c5341" size={`1.2em`}/>
              C#
            </NavLink>
          </li>
          <li className="interview__category-item">
            <NavLink to="/int/dotnet" className="interview__category-item-link">
            <DiDotnet size={`1.5em`}/>
              .Net
            </NavLink>
          </li>
        </ul>
        <div className="interview__wrapper">
          <h2 className="interview__title">Questions</h2>
          {/* <ol className="interview__list" >
            {
              nums.map((item, i) => {
                return <Questions key={item} data={item} />
              })
            }
          </ol> */}

          <Outlet/>
        </div>
      </div>
    </section>
  );
};

export default index;
