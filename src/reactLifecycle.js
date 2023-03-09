import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      empname: 'Anuj',
    };
    console.log('in constructer ');

    this.handleText = this.handleText.bind(this);
  }

  handleText = (event) => {
    this.setState({ empname: event.target.value });
  };

  UNSAFE_componentwillMount() {
    console.log('UNSAFE component did mount');
  }

  componentDidMount() {
    console.log('component did mount');
  }

  UNSAFE_componentWillUpdate() {
    console.log('UNSAFE component Will update');
  }
  componentDidUpdate() {
    console.log('component Did Update');
  }

  render() {
    console.log('Inside reander methord');
    return (
      <>
        <h1>React Lifecycle </h1>
        <input
          value={this.state.empname}
          type="text"
          onChange={(e) => this.handleText(e)}
        />
      </>
    );
  }
}
