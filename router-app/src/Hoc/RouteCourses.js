import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Users from '../containers/Users/Users';
import Courses from '../containers/Courses/Courses';

class RouteCourses extends Component {
  render() {
    return (
      <Switch>
        <Route path="/users" component={Users} />
        <Route path="/courses" component={Courses} />
      </Switch>
    )
  }
}

export default RouteCourses;