import React from "react"
class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count:1
        }
        console.log(this.props.name+' construtor called')
    }
    componentDidMount(){
        console.log(this.props.name+ ' child component didmount is called');
    }
    componentWillMount(){
        console.log(this.props.name+ ' child component will mount is called');
    }
    componentDidUpdate(){
        console.log(this.props.name+ 'child component didupdate is called');
    }
    componentWillUnmount(){
        console.log(this.props.name+ 'child component will unmount is called');
    }
    render(){
       console.log(this.props.name+'child rendor called');
        const {count} = this.state;
        return (
            <div className="user-card">
                <h1>Class Component</h1>
                <h2>{this.props.name}</h2>
                <button onClick={()=>{
                    this.setState({
                        count:count+1
                    })
                }}>Count Increase</button>
                <h2>Count from class {count}</h2>
            </div>
        )
    }
}

export default UserClass