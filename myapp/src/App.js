import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  
  state ={

    persons:[
      {id:'fsdf',name: 'Theo', age:29},
      {id:'ewrew',name:'Jack', age:32},
      {id:'lknlk',name:'Mike', age: 22}
    ],
    //auto de t peirazei
    otherstate: 'some other state',
    showPersons: false

  }

  deletePersonHandler = (personIndex) =>{
    //const persons = this.state.persons.slice();
    // ftiaaxnoume ena antigrafo tou pinaka me to slice
    
    //episis ftiacnei antigrafo t palio pinaka
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    //kai ftiaxnoume ena neo state
    this.setState({persons: persons})
  }

  // switchNameHandler = (newName) =>{

  //   //console.log('clicked');
  //   //this.state.persons[0].name="theodoros";
  //   this.setState({ 
  //     persons:[
  //     {name: newName, age:29},
  //     {name:'Jacky', age:32},
  //     {name:'Mikelele', age: 22}
  //   ] })
  // }


  nameChangeHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id ===id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name =event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState({persons: persons })

  }

  togglePersonHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  render() { 

    const style ={
      backgroundColor:'white',
      font:'inherit',
      border: '1px solid blue',
      padding:'8px',
      cursor: 'pointer'

    };

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() =>this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) =>this.nameChangeHandler(event,person.id)} />
          })}
        {/* <Person
         name = {this.state.persons[0].name} 
         age ={this.state.persons[0].age}
         click={this.switchNameHandler}/>
        <Person
         name = {this.state.persons[1].name}
          age = {this.state.persons[1].age}
          changed={this.nameChangeHandler}
          >My hobbies racing</Person>
        <Person
         name ={this.state.persons[2].name}age = {this.state.persons[2].age}/> */}
      </div> 


      );
    }


    return (

      <div className="App">
        <h1>
          Hi I'am a react app
        </h1>
        <p>This is really working</p>
        <button 
        style={style}
        onClick = {this.togglePersonHandler}>Switching name</button>
        {persons}
        {/* anaferetai st ket persons */}
      </div>

      );
  }
}
 
export  default App;
