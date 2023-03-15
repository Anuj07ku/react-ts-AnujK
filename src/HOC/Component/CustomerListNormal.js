import React from 'react';

export default class CustomerListNormal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customername: '',
      Customers: [],
    };

    this.handleCustomerInput = this.handleCustomerInput.bind(this);
    this.addCustomer = this.addCustomer.bind(this);
  }

  handleCustomerInput = (event) => {
    this.setState({ customername: event.target.value });
  };

  addCustomer = (name) => {
    this.setState((prestate) => {
      return { Customers: [...prestate.Customers, name] };
    });
  };

  render() {
    let Customers = this.state.Customers.map((customername, index) => (
      <li key={index}> {customername} </li>
    ));
    return (
      <>
        <h1>{this.props.heading} </h1>
        Customer Name
        <input
          value={this.state.customername}
          type="text"
          onChange={(e) => this.handleCustomerInput(e)}
        />
        <br />
        <button
          onClick={() => this.addCustomer(this.state.customername)}
          name="Submit"
        >
          Click Me
        </button>
        <p>{Customers}</p>
      </>
    );
  }
}
