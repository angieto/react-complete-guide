import React, { Component } from 'react';
import './App.css';
import Person from './components/Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Otter', age: 2},
      {name: 'Cat', age: 3}
    ]
  }

  // method
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 2},
        {name: 'Cat', age: 3}
      ]
    });
  }
  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Otter', age: 2},
        {name: event.target.value, age: 3}
      ]
    })
  }

  render() {
    return (
      <div className="App">
      {/* One way to "bind" this to the event handler: give it an arrow function! */}
      <button onClick={() => this.switchNameHandler("Hallo~~~") }> Switch Name </button>
        <Person name={this.state.persons[0].name} 
                age={this.state.persons[0].age} 
                click={this.switchNameHandler.bind(this, "CHANGED!")} /> 
                {/* Pass the event handler to the Person component, using another "bind" method */}
                {/* As a result, when the user click this paragraph, its name property is changed */}
        <Person name={this.state.persons[1].name} 
                age={this.state.persons[1].age} 
                changed={this.nameChangeHandler} />
      </div>
    );
  }
}

export default App;
