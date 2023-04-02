import './Drumpad.css';
import React from "react";

class Drumpad extends React.Component {
    constructor(props){
        super(props);
    }

    
   render(){
     return (
        <div className="Drumpad" onClick={this.props.onClick}>
            {this.props.label}
        </div>
        );
    }
}

export default Drumpad;