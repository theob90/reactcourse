import React from 'react';

const person = (props) => {
    return (
    
    <div>
        <p onClick={props.click}>I am a {props.name} and i am {props.age} years old</p>
        <p>{props.children}</p>
        <input type ="text"onChange={props.changed}
        // tha exei san arxiki timi to onoma
        value={props.name}/>
    </div>
   
    )
};

export default person