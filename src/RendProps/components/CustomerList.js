import React from 'react';

class CustomerList extends React.Component {
  render() {
    const { itemInput, items, handleitemInput, additem } = this.props;
    let Itemlist = items.map((item, index) => <li key={index}> {item} </li>);
    return (
      <>
        <h1>{this.props.heading} </h1>
        Customer Name
        <input
          value={itemInput}
          type="text"
          onChange={(e) => handleitemInput(e)}
        />
        <br />
        <button onClick={() => additem(itemInput)} name="Submit">
          Add Customer (HOC)
        </button>
        <p>{Itemlist}</p>
      </>
    );
  }
}

export default Withitem(CustomerList);
