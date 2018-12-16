import React from 'react';
import './Person.css';

const person = (props) => {
    const random = Math.random();
    if (random > 0.7) {
        throw new Error("Oops, somethings's wrong with random");
    }

    return (
        <div className="Person">
            <p onClick={props.click}>I'm { props.name } and I'm { props.age } years old</p>
            <p>{ props.children }</p>
            <input type="text" onChange={ props.changed } value={ props.name } /> 
        </div>
    );
};

export default person;