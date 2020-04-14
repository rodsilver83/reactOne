import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

const StyleButton = styled.button`
  border: 2px solid #cde;
  color: #cde;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  background-color: ${props => props.alt ? 'red' : 'green'};
  cursor: pointer;

  &:hover {
    color: black;
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: 'aerg', name: 'Rodrigo', age: 36 },
      { id: 'tbre', name: 'Mark', age: 35 },
      { id: 'tbie', name: 'Marco', age: 25 },
    ],
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const index =  this.state.persons.findIndex(p => p.id === id);
    const person = {
      ...this.state.persons[index]
    }
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[index] = person;
    this.setState({
      persons: persons
    });
  }

  deletePersonHandler(index) {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  tooggleHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map( (person, index) => {
            return <Person
            key={person.id}
            name={person.name}
            age={person.age}
            change={(event) => this.nameChangeHandler(event, person.id)}
            click={() => this.deletePersonHandler(index)}></Person>
          })}
        </div>
      );
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
        <div className="App">
          <p className={classes.join(' ')}>My list of persons</p>
          <StyleButton alt={this.state.showPersons} onClick={this.tooggleHandler}>Toggle Content</StyleButton>
          {persons}
        </div>
    );
  }
}

export default App;

