import React from 'react';

class WelcomeComp extends React.Component {
  render() {
    return <h1>Animal name {this.props.childern} and Type {this.props.Type}</h1>;
  }
}

export default class App extends React.Component {
  render() {
    return (
      <>
        <WelcomeComp Type = "Wild" />Tiger</WelcomeComp>
      </>
    );
  }
}
