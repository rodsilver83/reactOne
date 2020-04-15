import React, { useEffect } from 'react';
import classes from './cockpit.module.css';

const Cockpit = (props) => {
  useEffect(() => {
    console.log('Cockpit.js Use effect');
    setTimeout(() => {
      alert('Save data to cloud');
    }, 1000);
    return () => {
      console.log('cockpit.js cleanup');
    }
  }, []);

  useEffect(() => {
    console.log('Cockpit.js 2nd Use effect');
    return () => {
      console.log('cockpit.js cleanup 2');
    }
  }, );

  const buttonCss = [classes.Button];
  if (props.showPersons) {
    buttonCss.push(classes.toggleButton);
  }

  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.App}>
      <p className={assignedClasses.join(' ')}>My list of persons</p>
      <button className={buttonCss.join(' ')} onClick={props.clicked}>Toggle Content</button>
    </div>
  );
}

export default Cockpit;