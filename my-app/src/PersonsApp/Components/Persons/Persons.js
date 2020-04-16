import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('Persons.js ShouldComponentUpdate');
  //   return nextProps.persons !== this.props.persons;
  // }

  componentDidUpdate() {
    console.log('Persons.js Component Did Update');
  }

  getSnapshotBeforeUpdate() {
    console.log('Persons.js getSnapshotBeforeUpdate');
    return { message: 'Snapshot!!' }
  }

  componentWillUnmount() {
    console.log('Persons.js componentWillUnmount');
  }

  render() {
    console.log('Persons.js Render');
    return this.props.persons.map((person, index) => {
      return <Person
        key={person.id}
        name={person.name}
        age={person.age}
        change={(event) => this.props.changed(event, person.id)}
        click={() => this.props.clicked(index)}>
      </Person>
    })
  }
};


export default Persons;