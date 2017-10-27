import React from "react";
export class Header extends React.Component{
  constructor(props)
  {
    super();
    this.state = {
      age: props.initialAge,
      status: 0,
      salary: props.initialSalary
    };
  // setTimeout(() => {
  //   this.setState({
  //     status: 1
  //   };
  // },3000));
  }

  onMakeOlder()
  {
    this.setState({
      age: this.state.age + 3,
      salary: this.state.salary - 1000,
      homeLink: "Changed Link"
    })
  }
  onChangeLink()
  {
    this.props.changeLink(this.state.homeLink);
  }
  render(){

    return(
      <div>
        <p> You are {this.state.age} Mr. {this.props.name} </p>
        <p>Status: {this.state.status}</p>
        <p>You salary is: {this.state.salary}</p>
        <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make mme older and cut my salary</button>
        <button className = " btn btn-success" onClick={this.props.greet} >Greet </button>
        <button className = " btn btn-primary" onClick={this.props.sayHello} >Greet Hello </button>
        <button className = " btn btn-warning" onClick={this.onChangeLink.bind(this)} >Change Header </button>

      </div>
    );
  }
}

// Header.propTypes= {
//   name: React.PropTypes.string,
//   initialAge: React.PropTypes.number,
//   user: React.PropTypes.object,
//   children: React.PropTypes.element.isRequired,
//   greet: React.PropTypes.func
// }
