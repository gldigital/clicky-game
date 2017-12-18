import React from "react";
import "./Nav.css";
const Nav = props => (
  /* <h1 className="title">{props.children}</h1>; */

<nav className="navbar navbar-default" role="navigation">

<div class="container">
  <div className="navbar-header">
    <a className="navbar-brand" href="#">Clicky Game</a>
  </div>

  <div className="collapse navbar-collapse navbar-ex1-collapse">
    <ul className="nav navbar-nav navbar-right">
      <li><span>Clicks: &nbsp; {props.numClicks} | &nbsp; Top Score: &nbsp; {props.topscore} &nbsp;</span></li>
    </ul>
  </div>
  </div>
</nav>

  
);


export default Nav;