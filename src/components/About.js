import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
    constructor(props){
        super(props);
    }

render(){
  return  (<div>
        <h1>About Class component</h1>
        <h2>This is about page</h2>
        <UserClass name={'Child 1'}/>
    </div>)
} 
}

export default About;