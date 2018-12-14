import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'm { props.name } and I'm { Math.floor(Math.random() * 30)} years old</p>
            <p>{ props.children }</p>
            {/* becomes double binding by adding the value={} attribute */}
            {/* that means we can see the current state in the input field from the start */}
            <input type="text" onChange={ props.changed } value={ props.name } /> 
        </div>
    );
};

export default person;