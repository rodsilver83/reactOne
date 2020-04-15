import React, { Component } from 'react';
import css from './Person.module.css';

class Person extends Component {
    render() {
        console.log('Person.js Render');
        return (
            <div className={css.person}>
                <h2 onClick={this.props.click}>{this.props.name}</h2>
                <p>Age: {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.change} value={this.props.name} />
            </div>
        );
    }
}

export default Person;
