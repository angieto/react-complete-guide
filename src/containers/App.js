import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

// add a new context API for a global scope (optional)
// const AuthContext = React.createContext(false);

class App extends Component {
  state = {
    persons: [
      {id: 'unique1', name: 'Otter', age: 2},
      {id: 'unique2', name: 'Cat', age: 3}
    ],
    showPerson: false,
    toggleClicked: 0,
    authenticated: false
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
  // A better way to handle state update: use prevState in a callback function
  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState( ( prevState, props ) => { 
      return {
        showPerson: !doesShow,
        toggleClicked: prevState.toggleClicked + 1 // instead of this.state.toggledClicked + 1 
      }
    });
  }
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]; 
    persons.splice(personIndex, 1); 
    this.setState({ persons: persons })
  }
  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {

    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons} 
            clicked={this.deletePersonHandler} 
            changed={this.nameChangeHandler}
            isAuthenticated={this.state.authenticated} />
        </div>
      )
    }
    return (
      <div className="App">
        <button className="btn" onClick={() => {this.setState({showPerson: true})}}>Show Person</button>
        <Cockpit 
          toggle={this.togglePersonHandler}
          showPerson={this.state.showPerson}
          persons={this.state.persons}
          clicked={this.togglePersons}
          login={this.loginHandler} />
        { persons }
      </div>  
    );
  }
}

export default App;
