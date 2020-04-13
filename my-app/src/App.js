import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id:'erg', name: 'Rodrigo', age: 36 },
      { id: 'tbre', name: 'Mark', age: 35 },
      { id: 'tbre', name: 'Mark', age: 35 },
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
    const style = {
      border: '2px solid #cde',
      padding: '10px',
      margin: '10px',
      borderRadius: '10px',
      backgroundColor: 'green',
      cursor: 'pointer'
    }

    let persons = null;
    if (this.state.showPersons) {
      style.backgroundColor = 'red';

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
        <button style={style} onClick={this.tooggleHandler}>Toggle Content</button>
        {persons}
      </div>
    );
  }
}

export default App;

