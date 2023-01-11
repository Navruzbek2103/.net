import React, { useState } from "react";
import "./style.scss";

const Layout = () => {
  const [load, setLoad] = useState(true);

  window.addEventListener("load", () => {
    setLoad(false);
  });
  return (
    <div
      className={`layout d-flex position-fixed top-0 bottom-0 mx-auto z-index ${
        load ? "d-block" : " d-none"
      }`}
    >
      <span class="loader"></span>
    </div>
  );
};

export default Layout;
