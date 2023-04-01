import './App.css';
import {React} from "react";

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <audio controls> <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" type="audio/mp3" /> </audio>
      </div>
    );
  }
}

export default App;
