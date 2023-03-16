import React from 'react';

export default class EmployeeListNormal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      empname: '',
      employees: [],
    };

    this.handleEmployeeInput = this.handleEmployeeInput.bind(this);
    this.addEmployee = this.addEmployee.bind(this);
  }

  handleEmployeeInput = (event) => {
    this.setState({ empname: event.target.value });
  };

  addEmployee = (name) => {
    this.setState((prestate) => {
      return { employees: [...prestate.employees, name] };
    });
  };

  render() {
    let employees = this.state.employees.map((empname, index) => (
      <li key={index}> {empname} </li>
    ));
    return (
      <>
        <h1>{this.props.heading} </h1>
        Employee Name
        <input
          value={this.state.empname}
          type="text"
          onChange={(e) => this.handleEmployeeInput(e)}
        />
        <br />
        <button
          onClick={() => this.addEmployee(this.state.empname)}
          name="Submit"
        >
          Click Me!{' '}
        </button>
        <p>{employees}</p>
      </>
    );
  }
}
