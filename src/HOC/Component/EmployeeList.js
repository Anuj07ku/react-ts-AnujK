import React from 'react';
import Withitem from './withItem';

class EmployeeList extends React.Component {
  render() {
    const { itemInputed, items, handleitemInput, additem } = this.props;
    let Itemlist = items.map((item, index) => <li key={index}> {item} </li>);
    return (
      <>
        <h1>{this.props.heading} </h1>
        Employee Name
        <input
          value={itemInputed}
          type="text"
          onChange={(e) => handleitemInput(e)}
        />
        <br />
        <button onClick={() => additem(itemInputed)} name="Submit">
          Add Employee (HOC)
        </button>
        <p>{Itemlist}</p>
      </>
    );
  }
}

export default Withitem(EmployeeList);
