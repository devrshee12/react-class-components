import { Component } from "react";

class User extends Component{
    constructor(props){
        super(props);
    }

    componentDidUpdate(){
        console.log("component did update called in User component");
    }

    render(){
        const {name, username, email} = this.props.user
        return(
            <div>
                <h2>Name is : {name}</h2>
                <h2>Username is : {username}</h2>
                <h2>Email is : {email}</h2>
                <hr />
            </div>
        )   
    }
}

export default User