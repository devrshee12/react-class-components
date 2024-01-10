import {Component} from "react"

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 1,
        }
        this.handleIncrease = this.handleIncrease.bind(this); // do this in constructor to bind this
        this.handleDecrease = this.handleDecrease.bind(this);
    }

    componentDidMount(){
        
    }

    componentDidUpdate(){   
        console.log("component did update called in Counter components");
    }

    componentWillUnmount(){
        console.log("component will unmount called in counter components");
    }

    handleIncrease(){
        // console.log(this);
        this.setState(function(state, props){
            return{
                count: state.count + 1
            }
        })
    }

    handleDecrease(){
        // console.log(this);
        if(this.state.count - 1 < 0){
            alert("You can not decrease count");
        }
        else{
            // if you are updaing multiple states it will be async so do it like this 
            this.setState((state, props) => { // always use like this 
                return {
                    count: state.count - 1
                }
            })
        }
    }


    render() {
        // const handleIncrease = () => {
        //     this.setState({
        //         count: this.state.count + 1
        //     })
        // }
        // const handleDecrease = () => {
        //     if(this.state.count - 1 < 0){
        //         alert("you can not decrease");
        //     }
        //     else{
        //         this.setState({
        //             count: this.state.count - 1
        //         })
        //     }
        // }
        return (
            <>
                <div className="App-header">
                    <h3>{this.state.count}</h3>
                    <div className="btn-container">
                    <button className="btn" onClick={this.handleIncrease}>Increase</button>
                    <button className="btn" onClick={this.handleDecrease}>Decrease</button>
                    </div>
                </div>
            </>
        )
    }
}


export default Counter