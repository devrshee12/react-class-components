import React, { Component } from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";


class HocApp extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div className="App-header">
                <ClickCounter/>
                <HoverCounter/>
            </div>
        )
    }

}

export default HocApp;