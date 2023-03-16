import React, { Comment } from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemInput: '',
      items: [],
    };

    this.handleitemInput = this.handleitemInput.bind(this);
    this.additem = this.additem.bind(this);
  }

  handleitemInput = (event) => {
    this.setState({ itemInput: event.target.value });
  };

  additem = (itemname) => {
    this.setState((prestate) => {
      return { items: [...prestate.items, itemname] };
    });
  };

  render() {
    return (
      <>
        {this.props.render(
          this.state.itemInput,
          this.state.items,
          this.handleitemInput,
          this.additem
        )}
      </>
    );
  }
}
