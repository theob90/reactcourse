import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import classes from './Person.css';
import PropTypes from 'prop-types';

class Person extends Component {
  componentDidMount(){
    this.inputElement.focus();
  }
  render() {
    console.log('[Person.js] rendering...');
    return (
    <Auxiliary>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input key="i3"
          //kanw focus st 3o keli
          ref={(inputEl) => {this.inputElement=inputEl}}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Auxiliary>
    );
  }
}

//elenxos an pername swsta props
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func
};

export default Person;
