import React from "react";
// import { BsPeopleFill } from "react-icons/bs";
import Logo from "./../../assets/images/site-logo.jpg"
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
          <div className="sidebar__input my-3 w-100">
            <input type="search" className="form-control search-bar" />
          </div>
        </div>

        <div className="w-100 d-flex flex-column mt-4 accordion-menu">
          <h5 className="doc__title">.NetDev Uzbekistan</h5>
          <Accord />
        </div>
        <div className="sidebar__bottom shadow d-flex align-items-center ">
          <IoLogoGameControllerB className="logo__bottom"/>
          <h6>Powered by OneTeam</h6>
        </div>
      </div>
    </>
  );
};

export default index;
