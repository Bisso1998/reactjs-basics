import React from "react";
export class Header extends React.Component{
  render(){
    console.log(this.props.age);
    console.log(this.props.name);
    console.log("For the user obj");
    // console.log({this.props.user});
    return(
      <div >
      <p> You are {this.props.age} Mr. {this.props.name} </p>
      <p>At home....</p>
      {this.props.user.name} is  {this.props.user.age} years old.
      <h3>Hobbies</h3>
      {this.props.user.hobbies.map((hobby,i) => <li key ={i}>{hobby}</li>)}

      <hr/>
      {this.props.children}
      </div>
    );
  }
}

Header.propTypes= {
  name: React.PropTypes.string,
  age: React.PropTypes.number,
  user: React.PropTypes.object,
  children: React.PropTypes.element.isRequired
}
