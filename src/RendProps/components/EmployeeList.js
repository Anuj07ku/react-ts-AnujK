import React, { Component } from 'react';

export default class EmployeeList extends React.Component {
  render() {
    const { itemInput, items, handleitemInput, additem } = this.props;
    let Itemlist = items.map((item, index) => <li key={index}> {item} </li>);
    return (
      <>
        <h1>{this.props.heading} </h1>
        Employee Name
        <input
          value={itemInput}
          type="text"
          onChange={(e) => handleitemInput(e)}
        />
        <br />
        <button onClick={() => additem(itemInput)} name="Submit">
          Add Employee (HOC)
        </button>
        <p>{Itemlist}</p>
      </>
    );
  }
}
