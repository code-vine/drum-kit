import './SliderBar.css';
import React from "react";

class SliderBar extends React.Component {
    constructor(props){
      super(props);
      
    }
    render(){
      return (
        <div className="SliderBar">
            <div className="slidecontainer">
                <input type="range" min="0" max="100" className="range" onChange={this.props.onChange}  />
            </div>
        </div>
      );
    }
  }
  
  export default SliderBar;