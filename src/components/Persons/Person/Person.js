import React, { Component } from 'react';
import './Person.css';
import PropTypes from 'prop-types'

class Person extends Component {
    componentDidMount () {
        console.log( '[Person.js] inside componentDidMount()' );
        if (this.props.position === 0) {
            this.inputElement.focus();
        }
    }

    render() {
        return (
            <div className="Person">
                { this.props.authenticated ? <p className="text-info">I'm authenticated!</p> : null }
                <p onClick={ this.props.click }>
                    I'm { this.props.name } and I'm { this.props.age } years old
                </p>
                <p>{ this.props.children }</p>
                <input
                    ref = { (input) => { this.inputElement = input } } 
                    type="text" 
                    onChange={ this.props.changed } 
                    value={ this.props.name } /> 
            </div>
        );
    }  
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default Person;