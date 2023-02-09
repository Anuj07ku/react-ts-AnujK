import React from 'react';
const WelcomeComp = (props) => {
  return (
    <p>
      <h3>Animal Name {props.children}</h3>
      Type {props.Type}
    </p>
  );
};

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
