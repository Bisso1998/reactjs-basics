import React from "react";
import {render} from "react-dom";
import {Header} from "./components/Header.js";
import {Home} from "./components/Home.js";
import {Container} from "./components/Container.js";
import {Footer} from "./components/Footer.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      homeLink: "Home",
      title: "Welcomeeeeeeeeeeeeee"
    }
  }
  changeTitle(title)
  {
    this.setState({title: title});
  }
  onGreet()
  {
    alert("Hello");
  }
  sayHello()
  {
    alert("Say Hello Dear!");
  }
  onChangeLinkName(newName)
  {
    this.setState({
      homeLink: newName,
    });
  }
  render() {
    var myFriend = {
      name: "Paper",
      age: 200,
      lovemates: ["Priya", "Riya" , "Sia"]
    }
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
            <Home homeLink={this.state.homeLink}/>
              <Header name={"bobby"}
                  initialAge={27}
                  user={user}
                  initialSalary={50000}
                  greet={this.onGreet}
                  sayHello={this.sayHello}
                  changeLink={this.onChangeLinkName.bind(this)} >
              </Header>
          </div>
        </div>
        <div className = "row">
          <div className = "col-xs-4">
          </div>
        </div>
        <Container
          myName={"Rock"}
          myAge={100}
          myFriend = {myFriend}

        />
      <Footer name={"Boobs is love"} changeTitle={this.changeTitle.bind(this)} title = {this.state.title}/>
      </div>
    );
  }
}
render(<App/>,window.document.getElementById('app'));
