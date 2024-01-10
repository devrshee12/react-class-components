import React, { Component, createRef } from "react";


class FocusInput extends Component{
    constructor(props){
        super(props);
        this.inputRef = createRef()
    }
    

    handleButton = () => {
       this.inputRef.current.focus(); 
    }


    render(){
        return(
            <div>
                <input ref={this.inputRef}/>
                <button onClick={this.handleButton}>Focus input</button>
            </div>
        )
    }
}


export default FocusInput