import React, {Component} from "react";
import ReactDOM from "react-dom";

class App extends Component{
  render(){
    return(
      <p>Now i can create React Component</p>
    )
  }
}

const root=document.querySelector("#root")
ReactDOM.render(<App/>,root);