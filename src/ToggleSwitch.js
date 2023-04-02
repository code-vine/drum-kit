import './ToggleSwitch.css';

import React from "react";

class ToggleSwitch extends React.Component {
    constructor(props){
      super(props);
      
    }
    render(){
      return (
        <div className="ToggleSwitch">
            <h3 className='toggleLabel'>{this.props.label}</h3>
            <label className="switch">
                <input type="checkbox" onChange={this.props.onChange} id={this.props.label} checked={this.props.checked}/>
                <span className="slider"></span>
            </label>
        </div>
      );
    }
  }
  
  export default ToggleSwitch;