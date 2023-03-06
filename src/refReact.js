import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.refName = React.createRef();
    this.refLocation = React.createRef();
  }

  handleSubmit = () => {
    let Name = this.refName.current.value;
    let Location = this.refLocation.current.value;
    alert('Name = ${Name} and Location = ${Location}');
  };

  render() {
    return (
      <>
        <h1>React Ref </h1>
        Name
        <input ref={this.refName} type="text" />
        <br />
        Location
        <input ref={this.refLocation} type="text" />
        <br />
        <button type="Button" onClick={() => this.handleSubmit()}>
          Submit{' '}
        </button>
      </>
    );
  }
}
