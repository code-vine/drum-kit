import './Drumpad.css';
import React from "react";

class Drumpad extends React.Component {
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick(e){
        e.preventDefault();
        console.log(e.target.classList)

        if(this.props.power)
        {
            e.target.classList.add("flash-animation");
            e.target.addEventListener("animationend",function(){e.target.classList.remove("flash-animation")});

            let display = document.getElementById("display");
            let audio = document.getElementById(this.props.label);
            let reg = /-/g;
            let text= this.props.id.replace(reg, " ");
            display.innerText = text;
            audio.volume = this.props.volume;
            audio.play();
        }
    }
   render(){
     return (
        <div className="drum-pad" id={this.props.id} onClick={this.onClick}>
            {this.props.label}
            <audio id={this.props.label} className='clip' src={this.props.src}/>
        </div>
        );
    }
}

export default Drumpad;