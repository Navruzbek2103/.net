import React from "react";
import "./style.scss"
import { NavLink, Link } from "react-router-dom";


let a = 0;
const index = ({item}) => {
  // console.log(a+=1);

  return (
    <li className="interview__item">
      <span className="interview__item-span">{a+=1}. </span><Link  to="/" className="interview__item-link">Why are coding interviews so hard?</Link>
    </li>

  )
}

export default index