import React from "react";
import {render} from "react-dom";
import {Header} from "./components/Header.js";
import {Home} from "./components/Home.js";

class App extends React.Component {
  render() {
    var user = {
      name: "Sammy",
      age: 24
    };
    let string = <p>BissoBoss</p>;
    return (
      <div className="conatiner" >
        <div className = "row">
          <div className = "col-xs-4">
            <Home name={"bobby"} age={27} user={user}/>
            <Home/>
            <Home/>
          </div>
        </div>
        <div className = "row">
          <div className = "col-xs-4">
            <Header/> {string} from {5+4} pm
          </div>
        </div>
      </div>
    );
  }
}


render(<App/>,window.document.getElementById('app'));
