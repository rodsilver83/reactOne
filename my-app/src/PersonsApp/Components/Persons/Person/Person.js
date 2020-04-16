import React, { Component } from 'react';
// import css from './Person.module.css';
import Aux from '../../../Hoc/Aux';

class Person extends Component {
    render() {
        console.log('Person.js Render');
        return (
            <Aux>
                <h2 onClick={this.props.click}>{this.props.name}</h2>
                <p>Age: {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.change} value={this.props.name} />
            </Aux>
        );
    }
}

export default Person;
