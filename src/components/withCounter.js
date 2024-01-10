import React, { Component } from "react";

const withCounter = (WrapperComponent, increamentNumber) => {
    class WithCounter extends Component{
        constructor(props){
            super(props);

            this.state = {
                count: 0
            }
        }

        increamentCount = () => {
            this.setState((prevState) => {
                return {count:prevState.count + increamentNumber}
            })
        }

        render(){
            return(
                <WrapperComponent count={this.state.count} increamentCount={this.increamentCount} {...this.props.name}/>
            )
        }
    }


    return WithCounter;
}

export default withCounter;