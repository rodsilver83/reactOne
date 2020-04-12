import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: "Rodrigo", age: 36},
      {name: "Marco", age: 35}
    ]
  });

  const switchNameHandler = () => {
    let newState = {...personsState};
    newState.persons[0].name = "Jose Rodrigo";
    setPersonsState(newState);
  }

  return (
    <div>
      <button onClick={switchNameHandler}>Switch Me</button>
      <div className="App">
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>Hola Hobbies</Person>
      </div>
    </div>
  );
  
}

export default App;

