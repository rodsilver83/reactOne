import React, {Component} from 'react';
import './Person.css';

class Person extends Component {
    render() {
        return (
            <div className="person">
                <h2>{this.props.name}</h2>
                <p>Age: {this.props.age}</p>
                <p>{this.props.children}</p>
            </div>
        );
    }
}

export default Person;
