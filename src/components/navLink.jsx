import React from "react";
import { Link } from "react-router-dom";

import "../styles/navLink.scss";


function NavLink(props) {

  return(
    <li>
      <Link className="nav-link" onClick={props.onClick} to={props.to}>{props.label}
        <div className="underline"/>
      </Link>
    </li>
  );
}

export default NavLink;