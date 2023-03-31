import React from 'react';

export default class commentDetails extends React.Component {
  render() {
    return (
      <>
        <h1>Parms Pass = {this.props.match.params.id} </h1>
      </>
    );
  }
}
