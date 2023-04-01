import './Drumpad.css';
import React from "react";

class Drumpad extends React.Component {
    constructor(props){
        super(props);
    }
  render(){
    return (
      <div className="Drumpad">
        <p>{this.props.label}</p>
      </div>
    );
  }
}

export default Drumpad;