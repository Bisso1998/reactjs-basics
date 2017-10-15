import React from "react";

export class Home extends React.Component{
  render()
  {
    console.log(this.props);
    return(
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <ul className="nav navbar-nav">
            <li><a href="#">Home</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}
