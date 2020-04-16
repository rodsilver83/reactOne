import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/cockpit'
import withClass from '../Hoc/WithClass';
import Aux from '../Hoc/Aux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: 'aerg', name: 'Rodrigo', age: 36 },
        { id: 'tbre', name: 'Mark', age: 35 },
        { id: 'tbie', name: 'Marco', age: 25 },
      ],
      showPersons: false,
      showCockpit: true
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('App.js ShouldComponentUpdate');
    return true;
  }

  componentDidMount() {
    console.log('App.js Component did mount');
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

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  tooggleHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    console.log('App.js Render');

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          ></Persons>
        </div>
      );
    }

    return (
      <Aux>
        <button onClick={() => {
          this.setState({ showCockpit: false });
        }}>Remove Cockpit</button>
        { this.state.showCockpit ? 
        <Cockpit 
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.tooggleHandler}>
        </Cockpit>
        : null }
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);

