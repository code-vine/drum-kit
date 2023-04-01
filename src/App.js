import './App.css';
import React from "react";
import Drumpad from './Drumpad';

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
        
      </div>
    );
  }
}

export default App;
