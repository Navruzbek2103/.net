import React from "react";
import "./style.scss"
import { NavLink, Link } from "react-router-dom";


const index = () => {
  return (
    <li className="interview__item">
      <Link  to="/" className="interview__item-link">Why are coding interviews so hard?</Link>
    </li>

  )
}

export default index