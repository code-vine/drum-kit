import './App.css';
import React from "react";
import PadGroup from './PadGroup';
import ToggleSwitch from './ToggleSwitch';
import SliderBar from './SliderBar';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      power:true,
      kit:"Heater Kit"
    }
  }
  render(){
    return (
      <div className="App">
        <div className='DrumKit'>
            <PadGroup />
            <div className='controlPanel' >
                <ToggleSwitch label="Power" />
                <div className='display'>Hello</div>
                <SliderBar id="VolumeSlider" />
                <ToggleSwitch label="Bank" />
            </div>
            <div className='logo'>
              <div className='innerLogo'>Drumkit&nbsp;</div>
              <i class="bi bi-music-note-beamed"></i>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
