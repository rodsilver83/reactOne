import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Rodrigo', age: 36 },
      { name: 'Mark', age: 35 },
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 36},
        {name: "Mark", age: 35}
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: "Jose Rodrigo", age: 36},
        {name: event.target.value, age: 35}
      ]
    });
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
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}/>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Jose Rods")}
            change={this.nameChangeHandler}>
            Hola Hobbies</Person>
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

