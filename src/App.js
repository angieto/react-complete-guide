import React, { Component } from 'react';
import './App.css';
import Person from './components/Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Person name="Angie" />
        <Person name="Sea"> I am the props.children </Person>
        <Person name="Cattie" />
      </div>
    );
  }
}

export default App;
