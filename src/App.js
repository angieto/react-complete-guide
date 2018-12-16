import React, { Component } from 'react';
import './App.css';
import Person from './components/Person/Person';

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
    // find the array index of the person with his/her id...
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    // select the person from the array with the index found
    const person = {
      ...this.state.persons[personIndex]
    };
    // assign the person's name as the target for the event handler
    person.name = event.target.value;
    // to avoid direct change, make a COPY of the original persons array
    const persons = [...this.state.persons];
    // and update the array persons once the selected person's name has changed
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
          { this.state.persons.map( (person, index) => {
              return <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        click={() => this.deletePersonHandler(index)}
                        changed = {(event) => this.nameChangeHandler(event, person.id)}  
                      />
            }) 
          }
        </div>
      )
    }
    return (
      <div className="App">
      {/* One way to "bind" this to the event handler: give it an arrow function! */}
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
