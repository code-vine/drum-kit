import './App.css';
import React from "react";
import PadGroup from './PadGroup';
import ToggleSwitch from './ToggleSwitch';
import SliderBar from './SliderBar';

const AUDIOKEYS = ['Q', 'W','E','A','S','D','Z','X','C'];

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
    let id = e.key.toUpperCase();
    let audioElement = document.getElementById(id);
    console.log(audioElement);
    if(audioElement !== undefined && audioElement !== null){
      audioElement.parentElement.click();
    }
  }

  power(e){
    let powerOn = !this.state.power;
    let display = document.getElementById("display");
    display.innerText = `Power ${powerOn ? "On" : "Off"}`;
    
    this.setState((prevState) =>
    ({
      power:powerOn,
      kit:prevState.kit,
      volume:prevState.power
    }));


  }

  render(){
    return (
      <div className="App" >
        <div id="drum-machine" className='DrumKit'>
            <PadGroup volume={this.state.volume} />
            <div className='controlPanel' >
                <ToggleSwitch label="Power" onChange={this.power} checked={this.state.power}/>
                <div id="display" className='display'>Hello</div>
                <SliderBar id="VolumeSlider" onChange={this.volumeChange} />
                <ToggleSwitch label="Bank" />
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
