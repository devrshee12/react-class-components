import { Component, Suspense, lazy } from "react";
import axios from "axios"
// import User from "./User";
const User = lazy(() => import("./User"));

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
                    <Suspense fallback="Loading..."> 
                    {
                        users ?
                        users.map((user) => {
                            return(
                                    <User key={user?.id} user={user}/>

                                    )
                                }) : <div>Loading ... </div>
                    }
                    </Suspense>
                </div>
            </div>
        )
    }
}


export default UsersList;