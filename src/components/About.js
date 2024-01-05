import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
    constructor(props){
        super(props);
        console.log('parent constructor')
    }
    componentDidMount(){
        console.log('component didmount is called');
    }
    componentWillMount(){
        console.log('component will mount is called');
    }
    componentDidUpdate(){
        console.log('component didupdate is called');
    }
    componentWillUnmount(){
        console.log('component will unmount is called');
    }
render(){
    console.log('parent rendor called')
  return  (<div>
        <h1>About Class component</h1>
        <h2>This is about page</h2>
        <UserClass name={'Child 1'}/>
        <UserClass name={'Child 2'}/>
    </div>)
} 
}

export default About;