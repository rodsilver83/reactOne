import React, { Component } from 'react';
import queryString from 'query-string';

class Course extends Component {
    state = {
        id: null,
        title: null
    }
    componentDidMount = () => {
        this.loadData();
    }

    componentDidUpdate = () => {
        // this.loadData();
    }

    loadData = () => {
        if (this.props.location) {
            const values = queryString.parse(this.props.location.search)
            console.log(this.props.location);
            console.log(values);
            this.setState({ ...values });
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.state.id}</p>
            </div>
        );
    }
}

export default Course;