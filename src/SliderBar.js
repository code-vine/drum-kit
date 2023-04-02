import './SliderBar.css';
import React from "react";

class SliderBar extends React.Component {
    constructor(props){
      super(props);
      
    }
    render(){
      return (
        <div className="SliderBar">
            <div class="slidecontainer">
                <input type="range" min="0" max="100" class="range"  />
            </div>
        </div>
      );
    }
  }
  
  export default SliderBar;