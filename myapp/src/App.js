import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  
  state ={

    persons:[
      {name: 'Theo', age:29},
      {name:'Jack', age:32},
      {name:'Mike', age: 22}
    ]
  }

  switchNameHandler = () =>{

    //console.log('clicked');
    //this.state.persons[0].name="theodoros";
  }
  render() { 
    return (

      <div className="App">
        <h1>
          Hi I'am a react app
        </h1>
        <p>This is really working</p>
        <button onClick = {this.switchNameHandler}>Switching name</button>
        <Person name = {this.state.persons[0].name} age ={this.state.persons[0].age}/>
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}>My hobbies racing</Person>
        <Person name ={this.state.persons[2].name}age = {this.state.persons[2].age}/>
      </div>

      );
  }
}
 
export  default App;
