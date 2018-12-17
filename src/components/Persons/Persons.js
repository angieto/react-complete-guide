import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent { 
    componentWillMount () {
        console.log( '[Persons.js] Inside componentWillMount()' );
    }

    componentDidMount () {
        console.log( '[Persons.js] Inside componentDidMount()' );
    }

    componentWillReceiveProps ( nextProps ) {
        console.log( '[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps );
    }

    // PureComponent will check this by default
    // only use PureComponent when updates are not required in that component to optimize run time...

    // shouldComponentUpdate ( nextProps, nextState ) {
    //     console.log( '[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState );
    //     return nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked;
    // }

    componentWillUpdate ( nextProps, nextState ) {
        console.log( '[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState );
    }

    componentDidUpdate () {
        console.log( '[UPDATE Persons.js] Inside componentDidUpdate' );
    }

    render() {
        return this.props.persons.map( (person, index) => {
            return (
                <Person 
                    position={index}
                    key={person.id}
                    name={person.name} 
                    age={person.age} 
                    click={() => this.props.clicked(index)}
                    changed = {(event) => this.props.changed(event, person.id)} 
                />) 
          }) 
    }
}

export default Persons;