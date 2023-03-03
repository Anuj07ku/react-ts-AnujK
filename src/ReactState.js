import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      empname: 'Anuj',
      bmamanger: false,
    };

    this.handleText = this.handleText.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleText = (event) => {
    this.setState({ empname: event.target.value });
  };

  handleCheckbox = () => {
    this.setState((prestate) => ({ bmamanger: !prestate.bmamanger }));
  };

  render() {
    let role = this.state.bmamanger ? 'Manager' : 'employee';
    return (
      <>
        <h1>React State </h1>
        <input
          value={this.state.empname}
          type="text"
          onChange={(e) => this.handleText(e)}
        />

        <input
          type="checkbox"
          checked={this.state.bmamanger}
          onClick={() => this.handleCheckbox()}
        />
      </>
    );
  }
}
