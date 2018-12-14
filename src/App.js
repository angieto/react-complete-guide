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
  switchNameHandler = () => {
    console.log("Was clicked");
  }

  render() {
    return (
      <div className="App">
      <button onClick={ this.switchNameHandler }> Switch Name </button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      </div>
    );
  }
}

export default App;
