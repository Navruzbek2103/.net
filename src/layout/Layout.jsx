import React, { useState } from "react";
import "./style.scss";

const Layout = () => {
  const [load, setLoad] = useState(false);

  const loader = () => {
    window.addEventListener("load", () => {
      setLoad(true);
    });
  };
  loader();
  return (
    <div
      className={`layout d-flex position-fixed top-0 bottom-0 mx-auto z-index ${
        load ? "d-none" : " d-block"
      }`}
    >
      <span className="loader"></span>
    </div>
  );
};

export default Layout;
