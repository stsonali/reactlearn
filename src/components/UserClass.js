import React from "react"
class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                name:'Dummy',
                avatar_url:'dummy'
            }
        }
    }
    async componentDidMount(){
        const data =  await fetch('https://api.github.com/users/stsonali');
        const jsondata = await data.json();
        console.log(jsondata);
        this.setState({
            userInfo:jsondata
        })
    }
    render(){
        const {userInfo} = this.state;
        return (
            <div className="user-card">
                <h1>Class Component</h1>
                <h2>{this.props.name}</h2>
                <h2>{userInfo.html_url}</h2>
                <img src={userInfo.avatar_url}></img>
            </div>
        )
    }
}

export default UserClass