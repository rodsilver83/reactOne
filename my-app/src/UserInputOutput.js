import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class UserInputOutputApp extends Component {
  state = {
    username: "Rods"
  };

  manipulateStateHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  };

  render() {
    return (
      <div>
        <UserInput change={this.manipulateStateHandler} username={this.state.username}></UserInput>
        <UserOutput username={this.state.username}></UserOutput>
        <UserOutput username="ositoBonito"></UserOutput>
      </div>
    );
  }
}

export default UserInputOutputApp;
