import React, { Component } from 'react';
import './App.css';
import Person from './components/Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      {id: 'unique1', name: 'Otter', age: 2},
      {id: 'unique2', name: 'Cat', age: 3}
    ],
    showPerson: false
  }

  // methods
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }
  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  }
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]; // make a copy of the old array
    persons.splice(personIndex, 1); 
    this.setState({ persons: persons })
  }

  render() {

    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {/* .map() converts a JS array into an array of JSX elements */}
          {/* key always has to be on the outer element in a map method because it's what we replicate */}
          {/* only use ErrorBoundary when there's potential code that may fail & not have the whole app fail */}
          { this.state.persons.map( (person, index) => {
              return (
                <ErrorBoundary key={person.id}>
                  <Person 
                    name={person.name} 
                    age={person.age} 
                    click={() => this.deletePersonHandler(index)}
                    changed = {(event) => this.nameChangeHandler(event, person.id)} />
                </ErrorBoundary>
              ) 
            }) 
          }
        </div>
      )
    }
    return (
      <div className="App">
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
