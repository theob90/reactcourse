import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  
  render() { 
    return (

      <div className="App">
        <h1>
          Hi I'am a react app
        </h1>
        <p>This is really working</p>
        <Person/>
      </div>

      );
  }
}
 
export  default App;
