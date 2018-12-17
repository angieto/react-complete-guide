import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      {id: 'unique1', name: 'Otter', age: 2},
      {id: 'unique2', name: 'Cat', age: 3}
    ],
    showPerson: false
  }

  componentWillMount () {
    console.log( '[App.js] Inside componentWillMount()' );
  }

  componentDidMount () {
    console.log( '[App.js] Inside componentDidMount()' );
  }

  shouldComponentUpdate ( nextProps, nextState ) {
    console.log( '[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState );
    return true;
  }

  componentWillUpdate ( nextProps, nextState ) {
    console.log( '[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState );
  }

  componentDidUpdate () {
    console.log( '[UPDATE App.js] Inside componentDidUpdate' );
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
    const persons = [...this.state.persons]; 
    persons.splice(personIndex, 1); 
    this.setState({ persons: persons })
  }

  render() {

    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons} 
            clicked={this.deletePersonHandler} 
            changed={this.nameChangeHandler}/>
        </div>
      )
    }
    return (
      <div className="App">
        <button onClick={() => {this.setState({showPerson: true})}}>Show Person</button>
        <Cockpit 
          toggle={this.togglePersonHandler}
          showPerson={this.state.showPerson} />
        { persons }
      </div>  
    );
  }
}

export default App;
