import React, { Component } from 'react';
import CustomerList from './components/CustomerList';
import EmployeeList from './components/EmployeeList';
import Item from './components/Item';

export default class rendProps extends React.Component {
  render() {
    return (
      <>
        <Item
          render={(itemInput, items, handleitemInput, additem) => (
            <EmployeeList
              itemInput={itemInput}
              items={items}
              handleitemInput={handleitemInput}
              additem={additem}
              heading="EmployeeList using Reander Props"
            />
          )}
        ></Item>

        <Item
          render={(itemInput, items, handleitemInput, additem) => (
            <CustomerList
              itemInput={itemInput}
              items={items}
              handleitemInput={handleitemInput}
              additem={additem}
              heading="CustomerList using Reander Props"
            />
          )}
        ></Item>
      </>
    );
  }
}
