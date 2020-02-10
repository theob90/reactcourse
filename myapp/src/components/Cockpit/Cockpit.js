import React, {useEffect} from 'react';

import classes from './Cockpit.css';

const cockpit = ( props ) => {
  //ekteleite se kathe render
  useEffect(() =>{
    console.log('Cockpit.js useEffect');

    setTimeout(() =>{
      alert('Saved');
    }, 1000);
   
   // ginetai otan allazei t persons...einai parametros 
  // an thelw na treksei kathe fora pou allazi to person
  // tha vale  [props.persons]  
  //me t keno tha treksei mia fora
  return () =>{

    console.log('[Cockpit.js] cleanup in useEffect' );
  };
  }, []);



    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if ( props.personsLenght <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.perpersonsLenghtsons <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default React.memo(cockpit);
// kanei render otan exoume allagi st input