import React from 'react';

class WelcomeComp extends React.Component {
  render() {
    return <h1>Welcome to Reusable Component</h1>;
  }
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <WelcomeComp />
      </div>
    );
  }
}
