import React from "react";

export const Home =  (props) => {
  {
    return(
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <ul className="nav navbar-nav">
            <li><a href="#">{props.homeLink}</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}
