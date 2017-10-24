import React from "react";
import {render} from "react-dom";
import {Header} from "./components/Header.js";
import {Home} from "./components/Home.js";

class App extends React.Component {
  onGreet()
  {
    alert("Hello");
  }
  render() {
    var user = {
      name: "Sammy",
      age: 24,
      hobbies: ["Music", "Sports","Dance"]
    };
    let string = <p>BissoBoss</p>;
    return (
      <div className= "conatiner" >
        <div className = "row">
          <div className = "col-xs-4">
            <Home homeLink="HOME!"/>
              <Header name={"bobby"} initialAge={27} user={user} initialSalary={50000} greet={this.onGreet}>
              </Header>
          </div>
        </div>
        <div className = "row">
          <div className = "col-xs-4">
          </div>
        </div>
      </div>
    );
  }
}
render(<App/>,window.document.getElementById('app'));
