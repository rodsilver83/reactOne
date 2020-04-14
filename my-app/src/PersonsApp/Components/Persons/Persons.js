import React from 'react';
import Person from './Person/Person';

const Persons = (props) => (
  props.persons.map( (person, index) => {
    return <Person
    key={person.id}
    name={person.name}
    age={person.age}
    change={(event) => props.changed(event, person.id)}
    click={() => props.clicked(index)}>
    </Person>
  })
);


export default Persons;