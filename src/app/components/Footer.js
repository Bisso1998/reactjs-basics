import React from "react";
export class Footer extends React.Component{
  // constructor(props)
  // {
  //   super();
  //   this.state = {
  //     age: props.initialAge,
  //     status: 0,
  //     salary: props.initialSalary
  //   };
  // setTimeout(() => {
  //   this.setState({
  //     status: 1
  //   };
  // },3000));
  // }
handleChange(e) {
  const title = e.target.value;
  this.props.changeTitle(title);
}
  render(){
    return(
      <div>
        Hello {this.props.name}
        Hello My babe!!!!
        <hr/>
        <hr/>
        {this.props.title}
        <br/>
        <input value={this.props.title} onChange={this.handleChange.bind(this)}></input>
      </div>
    );
  }
}
