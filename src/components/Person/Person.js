import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm { props.name } and I'm { props.age } years old</p>
            <p>{ props.children }</p>
            {/* becomes double binding by adding the value={} attribute */}
            {/* that means we can see the current state in the input field from the start */}
            <input type="text" onChange={ props.changed } value={ props.name } /> 
        </div>
    );
};

export default person;