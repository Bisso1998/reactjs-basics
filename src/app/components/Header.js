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
  }
  onMakeOlder()
  {
    this.setState({
      age: this.state.age + 3,
      salary: this.state.salary - 1000
    })
  }
  render(){

    return(
      <div>
        <p> You are {this.state.age} Mr. {this.props.name} </p>
        <p>Status: {this.state.status}</p>
        <p>You salary is: {this.state.salary}</p>
        <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make mme older and cut my salary</button>
      </div>
    );
  }
}

Header.propTypes= {
  name: React.PropTypes.string,
  initialAge: React.PropTypes.number,
  user: React.PropTypes.object,
  children: React.PropTypes.element.isRequired
}
