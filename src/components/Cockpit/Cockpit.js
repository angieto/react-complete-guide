import React from 'react';

const cockpit = (props) => {
    let color = props.showPerson ? 'btn btn-danger' : 'btn btn-success'
    return (
        <button className={color} 
                onClick={props.toggle}>
          { props.showPerson? "Hide":"Show" }
        </button>
    );
}

export default cockpit;