import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'm { props.name } and I'm { Math.floor(Math.random() * 30)} years old</p>
            <p>{ props.children }</p>
        </div>
    );
};

export default person;