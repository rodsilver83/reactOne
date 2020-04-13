import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id:'erg', name: 'Rodrigo', age: 36 },
      { id: 'tbre', name: 'Mark', age: 35 },
    ],
    showPersons: true
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
        <div className="App">
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

    return (
      <div className="App">
        <button onClick={this.tooggleHandler}>Toggle Content</button>
        {persons}
      </div>
    );
  }
}

export default App;

