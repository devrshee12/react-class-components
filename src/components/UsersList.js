import { Component } from "react";
import axios from "axios"
import User from "./User";

class UsersList extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }

    async componentDidMount(){
        try{
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");
            this.setState({
                users:res.data
            })
        }
        catch(err){
            console.log(err);
        }
    }

    componentDidUpdate(){
        console.log("component did update called in userList");
    }

    render() {
        const users = this.state.users;
        return(
            <div className="App-header">
                <h1>User's list</h1>
                <div>
                    {
                        users ?
                        users.map((user) => {
                            return(
                                <User key={user?.id} user={user}/>
                            )
                        }) : <div>Loading ... </div>
                    }
                </div>
            </div>
        )
    }
}


export default UsersList;