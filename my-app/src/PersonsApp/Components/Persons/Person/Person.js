import React from 'react';
import css from './Person.module.css';

const Person = props => {
    return (
        <div className={css.person}>
            <h2 onClick={props.click}>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    );
}

export default Person;
