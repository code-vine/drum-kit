import './App.css';
import React from "react";
import PadGroup from './PadGroup';

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
        </div>
      </div>
    );
  }
}

export default App;
