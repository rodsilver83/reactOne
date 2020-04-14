import React from 'react';
// import './Person.css';
import styled from 'styled-components';

const StyleDiv = styled.div`
    display: inline-block;
    border: 1px solid #eeeeee;
    box-shadow: 0 2px 2px #cccccc;
    width: 150px;
    margin: 10px;
    padding: 20px;
`;

const Person = props => {
    return (
        <StyleDiv>
            <h2 onClick={props.click}>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </StyleDiv>
    );
}

export default Person;
