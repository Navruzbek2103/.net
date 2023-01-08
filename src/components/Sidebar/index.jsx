import React from "react";
// import { BsPeopleFill } from "react-icons/bs";
import Logo from "./../../assets/images/site-logo.jpg";
import { IoLogoGameControllerB } from "react-icons/io";
import "./style.scss";
import Accord from "./../../UI/Accordion/index";

const index = () => {
  return (
    <>
      <div className="sidebar card d-flex justify-between py-4 flex-column ">
        <div className="side_bar">
          <div className="sidebar-top w-100">
            <a
              className="sidebar__link d-flex
              align-items-center"
              href="./"
            >
              {/* <BsPeopleFill className="img" /> */}
              <img src={Logo} alt="site logo" className="img" />
              <h1 className="logo">.NetDev</h1>
            </a>
          </div>
        </div>
        <div className="mt-5">
          <h5 className="doc__title">.NetDev Uzbekistan</h5>
        </div>
        <div className="w-100 d-flex flex-column accordion-menu">
          <Accord />
        </div>
      </div>
    </>
  );
};

export default index;
