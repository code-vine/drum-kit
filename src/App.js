import './App.css';
import React from "react";
import PadGroup from './PadGroup';
import ToggleSwitch
 from './ToggleSwitch';
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
                <ToggleSwitch label="Bank" />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
