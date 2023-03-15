import React from 'react';
import Withitem from './withItem';

class CustomerList extends React.Component {
  render() {
    const { itemInputed, items, handleitemInput, additem } = this.props;
    let Itemlist = items.map((item, index) => <li key={index}> {item} </li>);
    return (
      <>
        <h1>{this.props.heading} </h1>
        Customer Name
        <input
          value={itemInputed}
          type="text"
          onChange={(e) => handleitemInput(e)}
        />
        <br />
        <button onClick={() => additem(itemInputed)} name="Submit">
          Add Customer (HOC)
        </button>
        <p>{Itemlist}</p>
      </>
    );
  }
}

export default Withitem(CustomerList);
