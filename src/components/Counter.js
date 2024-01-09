import {Component} from "react"

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 1,
        }
    }

    componentDidMount(){
        
    }

    componentDidUpdate(){   
        console.log("component did update called in Counter components");
    }

    componentWillUnmount(){
        console.log("component will unmount called in counter components");
    }
    render() {
        const handleIncrease = () => {
            this.setState({
                count: this.state.count + 1
            })
        }
        const handleDecrease = () => {
            if(this.state.count - 1 < 0){
                alert("you can not decrease");
            }
            else{
                this.setState({
                    count: this.state.count - 1
                })
            }
        }
        return (
            <>
                <div className="App-header">
                    <h3>{this.state.count}</h3>
                    <div className="btn-container">
                    <button className="btn" onClick={handleIncrease}>Increase</button>
                    <button className="btn" onClick={handleDecrease}>Decrease</button>
                    </div>
                </div>
            </>
        )
    }
}


export default Counter