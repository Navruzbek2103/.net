import React from "react";
// import { BsPeopleFill } from "react-icons/bs";
import Logo from "./../../assets/images/site-logo.jpg";
import { IoLogoGameControllerB } from "react-icons/io";
import { BsPlusCircleFill } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";
import "./style.scss";
import Accord from "./../../UI/Accordion/index";
import { useState } from "react";

const index = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`sidebar card d-flex justify-between py-4 flex-column${
          open ? " open" : ""
        }`}
      >
        <button
          onClick={() => setOpen((e) => !e)}
          className="btn btn-warning position-fixed"
        >
          M
        </button>
        <div className="side_bar">
          <div className="sidebar-top w-100">
            <h2
              className="sidebar__link d-flex
              align-items-center"
            >
              {/* <BsPeopleFill className="img" /> */}
              <img src={Logo} alt="site logo" className="img" />
              <p className="logo">.NetDev</p>
            </h2>
          </div>
        </div>
        <div className="mt-5">
          <h5 className="doc__title">.NetDev Uzbekistan</h5>
        </div>
        <div className="w-100 d-flex flex-column accordion-menu">
          <Accord />
        </div>
        {/* <div className="add__page d-flex align-items-center justify-content-evenly bg-secondary w-100 rounded-1 py-1">
        <BsPlusCircleFill className="plus"/>
        <h3 className="text-black">
          Bo'lim Qo'shish
        </h3>
      </div> */}
      </div>
    </>
  );
};

export default index;
