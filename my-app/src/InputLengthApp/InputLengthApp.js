import React, { Component } from "react";

class InputLengthApp extends Component {
  state = {
    length: 0,
    text: ''
  }

  changeHandler = (event) => {
    const length = event.target.value.length;
    this.setState({length: length, text: event.target.value});
  }

  deleteCharHandler = (index) => {
    const text = this.state.text;
    const deletedArr = text.split('');
    deletedArr.splice(index, 1);
    const deletedText = deletedArr.join('');
    this.setState({length: deletedText.length, text: deletedText});
  }

  render() {
    const text = this.state.text.split('');
    const chars = (
      <div>
        {text.map( (char, index) => {
          return (
            <Char char={char} click={() => this.deleteCharHandler(index)}></Char>
          )
        })}
      </div>
    );

    return (
      <div>
        <input type="text" onChange={this.changeHandler} value={this.state.text}></input>
        <p>Length: {this.state.length}</p>
        <Validation length={this.state.length}></Validation>
        {chars}
      </div>
    );
  }
}

class Validation extends Component {
  render() {
    let length = null;
    if (this.props.length < 5) {
      length = (
        <p>Text too short</p>
      )
    } else {
      length = (
        <p>Text long enough</p>
      )
    }

    return (
      <div>
        {length}
      </div>
    );
  }
}

function Char(props) {
  const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black'
  }

  return (
    <span style={style} onClick={props.click}>{props.char}</span>
  )
}

export default InputLengthApp;