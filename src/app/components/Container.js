import React from "react";
export class Container extends React.Component{
   constructor (props){
     super();
     this.state = {
       age : props.myAge,
       name: props.myName
     };
   }
   onAgeChange()
   {
     this.setState({
       age : this.state.age+3
     });
   }

  render(){
    return(
      <div>
        <h1>Hello world</h1>
        <p> I am {this.props.myName} and I am {this.state.age} and my friend is {this.props.myFriend.name}</p>
        <p> List of his gfs: </p>
        <ul>
            {this.props.myFriend.lovemates.map((hobby,i) => <li key={i}>{hobby}</li>)}
        </ul>
        <button onClick={() => this.onAgeChange()} > Let's Change</button>
      </div>
    );
  }
}
