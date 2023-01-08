import React from "react";
import Sidebar from "./../../components/Sidebar/index";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiLink } from "react-icons/hi";
import "./stylee.scss";
import { useState } from "react";
import { useParams, Outlet } from "react-router-dom";
// import { Card } from "react-bootstrap";

const index = () => {
  const params = useParams();
  const { id } = params;
  const isInteger = /^-?[0-9]+$/.test(id + "");

  // const display = ()=>{

  // }

  return (
    <>
      <div className="documentation">
        <div className="container">
          <div className="document">
            <Sidebar />
            <div className="document__right col-8">
              <Outlet/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
