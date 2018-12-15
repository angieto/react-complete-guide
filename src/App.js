import React, { Component } from 'react';
import './App.css';
import Person from './components/Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Otter', age: 2},
      {name: 'Cat', age: 3}
    ],
    showPerson: false
  }

  // methods
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
  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  }

  render() {
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {/* .map() converts a JS array into an array of JSX */}
          { this.state.persons.map(person => {
              return <Person name={person.name} age={person.age} />
          }) }
        </div>
      )
    }
    return (
      <div className="App">
      {/* One way to "bind" this to the event handler: give it an arrow function! */}
        <button className="btn btn-info" 
                onClick={() => this.switchNameHandler("Hallo~~~") }> 
          Switch Name 
        </button>
        <button className="btn btn-danger"
                onClick={this.togglePersonHandler}>
          { this.state.showPerson? "Hide":"Show" }
        </button>
        { persons }
      </div>
    );
  }
}

export default App;
