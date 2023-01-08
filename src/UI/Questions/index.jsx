import React, {useEffect} from "react";
import "./style.scss"
import { NavLink, Link, useNavigate } from "react-router-dom";

let a = 0;
const index = ({item}) => {

  const count = useNavigate();
  useEffect(() => {
    a = 0
  }, [count])

  return (
    <li className="interview__item">
      <span className="interview__item-span">{a+=1}. </span><Link  to="/" className="interview__item-link">Why are coding interviews so hard?</Link>
    </li>

  )
}

export default index