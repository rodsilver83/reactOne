import React, { Component } from 'react';
import css from './Person.module.css';
import Aux from '../../../Hoc/Aux';
import withClass from '../../../Hoc/WithClass';
import PropTypes from 'prop-types';

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

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func
};

export default withClass(Person, css.person);
