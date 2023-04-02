import './PadGroup.css';
import React from "react";
import Drumpad from './Drumpad';

class PadGroup extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
        <div className="PadGroup">
            <div className='row my-1'>
                <div className='col-4  gx-2'>
                    <Drumpad id="Heater-1" label="Q" volume={this.props.volume} power={this.props.power} src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"/>
                </div>
                <div  className='col-4 gx-2'>
                    <Drumpad id="Heater-2" label="W" volume={this.props.volume} power={this.props.power} src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" />
                </div>
                <div className='col-4 gx-2'>
                    <Drumpad id="Heater-3" label="E" volume={this.props.volume} power={this.props.power} src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" />
                </div>
            </div>
            <div className='row my-1'>
                <div  className='col-4 gx-2'>
                    <Drumpad id="Heater-4" label="A" volume={this.props.volume} power={this.props.power} src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" />
                </div>
                <div className='col-4 gx-2'>
                    <Drumpad id="Clap" label="S" volume={this.props.volume} power={this.props.power} src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"/>
                </div>
                <div className='col-4 gx-2'>
                    <Drumpad id="Open-HH" label="D" volume={this.props.volume} power={this.props.power} src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" />
                </div>
            </div>
            <div className='row my-1'>
                <div className='col-4 gx-2'>
                    <Drumpad id="Kick-n'-Hat" label="Z" volume={this.props.volume} power={this.props.power} src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" />
                </div>
                <div className='col-4 gx-2'>
                    <Drumpad id="Kick" label="X" volume={this.props.volume} power={this.props.power} src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"/>
                </div>
                <div className='col-4 gx-2'>
                    <Drumpad id="Closed-HH" label="C" volume={this.props.volume} power={this.props.power} src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"/>
                </div>
            </div>
            
        </div> 
        );
    }
}

export default PadGroup;