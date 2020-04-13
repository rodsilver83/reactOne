import React from 'react';
import './Person.css';

const Person = props => {
    return (
        <div className="person">
            <h2 onClick={props.click}>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    );
}

export default Person;
