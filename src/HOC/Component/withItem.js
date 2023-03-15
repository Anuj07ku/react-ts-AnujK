import React from 'react';

const withItem = (WrappedContent) => {
  class WithItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        itemInput: '',
        item: [],
      };

      this.handleitemInput = this.handleitemInput.bind(this);
      this.additem = this.additem.bind(this);
    }

    handleitemInput = (event) => {
      this.setState({ customername: event.target.value });
    };

    additem = (itemname) => {
      this.setState((prestate) => {
        return { Customers: [...prestate.Customers, itemname] };
      });
    };

    render() {
      return (
        <WrappedContent
          itemInput={this.state.itemInput}
          items={this.state.itemInput}
          handleitemInput={this.handleitemInput}
          additem={this.additem}
          {...this.props}
        />
      );
    }
  }
  return WithItem;
};
export default withItem;
