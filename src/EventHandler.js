import React from 'react';

export default class App extends React.Component {
  handleText(event) {
    console.log(event.target.value);
  }

  add() {
    alert('Handle add');
  }

  edit() {
    alert('Handle edit');
  }

  delete() {
    alert('Handle delete');
  }

  render() {
    return (
      <>
        <h1>Event handling In React </h1>
        <input type="text" onChange={(e) => this.handleText(e)} />
        <input type="button" value="Add"  name="Add"  onClick={() => this.add()} />
        <input type="button" value="Edit"  name="Edit"  onClick={() => this.edit()} />
        <input type="button" value="Delete" name="Delete" onClick={() =>this.delete()} />
      </>
    );
  }
}
