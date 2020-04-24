import React, { Component } from 'react';

import './Courses.css';
import Course from '../Course/Course';
import { Route } from 'react-router';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    linkCourse = (course) => {
        console.log(this.props);
        this.props.history.push(`/courses/c?id=${course.id}&title=${course.title}`);
    }

    render() {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map(course => {
                            return <article onClick={() => this.linkCourse(course)} className="Course" key={course.id}>{course.title}</article>;
                        })
                    }
                </section>
                <Route path={this.props.match.url + '/c'} component={Course} />
            </div>
        );
    }
}

export default Courses;