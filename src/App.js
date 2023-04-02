import './App.css';
import React from "react";
import PadGroup from './PadGroup';
import ToggleSwitch from './ToggleSwitch';
import SliderBar from './SliderBar';

const AUDIOLOOKUP = 
{'Q':"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
 'W':"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
 'E':"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
 'A':"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
 'S':"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
 'D':"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
 'Z':"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
 'X':"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
 'C':"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"};

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      power:true,
      kit:"Heater Kit",
      volume:0.5
    }
    this.volumeChange = this.volumeChange.bind(this);
    this.power = this.power.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  volumeChange(e){
    let display = document.getElementById("display");
    let volumeLevel = e.target.value;
    display.innerText = `Volume - ${volumeLevel}`;
    this.setState((prevState) =>
    ({
      power:prevState.power,
      kit:prevState.kit,
      volume:volumeLevel /100 
    }));
  }

  onKeyDown(e){
    if(this.state.power){
        let id = e.key.toUpperCase();
        let audioElement = document.getElementById(id);
        if(audioElement !== undefined && audioElement !== null){
          audioElement.parentElement.click();
    }
  }
  }

  power(e){
    let powerOn = !this.state.power;
    let display = document.getElementById("display");
    display.innerText = `Power ${powerOn ? "On" : "Off"}`;
    let audiokeys = Object.keys(AUDIOLOOKUP);
    
    
    this.setState((prevState) =>
    ({
      power:powerOn,
      kit:prevState.kit,
      volume:this.state.volume
    }));


  }

  render(){
    return (
      <div className="App" >
        <div id="drum-machine" className='DrumKit'>
            <PadGroup volume={this.state.volume} power={this.state.power} />
            <div className='controlPanel' >
                <ToggleSwitch label="Power" onChange={this.power} checked={this.state.power}/>
                <div id="display" className='display'>Hello</div>
                <SliderBar id="VolumeSlider" onChange={this.volumeChange} />
                {/*<ToggleSwitch label="Bank" />*/}
            </div>
            <div className='logo'>
              <div className='innerLogo'>Drumkit&nbsp;</div>
              <i className="bi bi-music-note-beamed"></i>
            </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);

  }
}

export default App;
