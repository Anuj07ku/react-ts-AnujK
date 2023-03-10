import React from 'react';

class WelcomeComp extends React.Component {
  render() {
    return (
      <p>
        <h3>Animal Name {this.props.children}</h3>
        Type {this.props.Type}
      </p>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <>
        <WelcomeComp Type="Wild">Tiger</WelcomeComp>
        <WelcomeComp Type="Pet">Dog</WelcomeComp>
      </>
    );
  }
}
