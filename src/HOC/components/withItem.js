import React, { Comment } from 'react';

const withItem = (WrappedContent) => {
  class WithItem extends React.Component {
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
        <WrappedContent
          itemInput={this.state.itemInput}
          items={this.state.items}
          handleitemInput={this.handleitemInput}
          additem={this.additem}
        />
      );
    }
  }
  return WithItem;
};
export default withItem;
