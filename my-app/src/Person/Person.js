import React from 'react';
import './Person.css';

const Person = props => {
    return (
        <div onClick={props.click} className="person">
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    );
}

export default Person;
