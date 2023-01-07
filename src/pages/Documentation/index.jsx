import React from "react";
import Sidebar from "./../../components/Sidebar/index";
import "./stylee.scss";

const index = () => {
  return (
    <>
      <div className="documentation">
        <div className="container">
          <div className="document">
            <Sidebar />
            <div className="document__right">
              <div className="document__right--top">
                <h3 className="fw-bold text-black">.NET Uzbekistan</h3>
                <p className="doc__text fw-bold text-secondary my-3">
                  Microsoft .NET platformasi bo'yicha O'zbekistonda ilk
                  dokumentatsiya
                </p>
                <div className="doc_read">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
