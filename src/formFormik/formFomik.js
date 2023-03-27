import React, { Component } from 'react';
import CustomerList from './components/CustomerList';
import EmployeeList from './components/EmployeeList';

export default class Hoc extends React.Component {
  render() {
    return (
      <>
        <EmployeeList heading="Employee List (Higher Order Component)" />
        <CustomerList heading="Customer List (Higher Order Component)" />
      </>
    );
  }
}
