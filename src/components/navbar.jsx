import React, { Component } from "react";

//Stateless Function Component
//Shortcut to create this function is sfc
function NavBar({ totalCounters, totalCounts }) {
  return (
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Items in Cart:
        <span className="badge badge-pill badge-secondary m-1">
          {totalCounters}
        </span>
        <br />
        Total Items:
        <span className="badge badge-pill badge-secondary m-1">
          {totalCounts}
        </span>
      </a>
    </nav>
  );
}

export default NavBar;
