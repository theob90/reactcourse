import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  
  state ={

    persons:[
      {name: 'Theo', age:29},
      {name:'Jack', age:32},
      {name:'Mike', age: 22}
    ],
    //auto de t peirazei
    otherstate: 'some other state'

  }

  switchNameHandler = (newName) =>{

    //console.log('clicked');
    //this.state.persons[0].name="theodoros";
    this.setState({ 
      persons:[
      {name: newName, age:29},
      {name:'Jacky', age:32},
      {name:'Mikelele', age: 22}
    ] })
  }


  nameChangeHandler = (event) =>{
    
    this.setState({ 
      persons:[
      {name: 'theo', age:29},
      {name: event.target.value, age:32},
      {name:'Mikelele', age: 22}
    ] })

  }
  render() { 
    return (

      <div className="App">
        <h1>
          Hi I'am a react app
        </h1>
        <p>This is really working</p>
        <button onClick = {() => this.switchNameHandler('theodoros')}>Switching name</button>
        <Person
         name = {this.state.persons[0].name} 
         age ={this.state.persons[0].age}
         click={this.switchNameHandler}/>
        <Person
         name = {this.state.persons[1].name}
          age = {this.state.persons[1].age}
          changed={this.nameChangeHandler}
          >My hobbies racing</Person>
        <Person
         name ={this.state.persons[2].name}age = {this.state.persons[2].age}/>
      </div>

      );
  }
}
 
export  default App;
