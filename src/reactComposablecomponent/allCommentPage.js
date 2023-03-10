import React from 'react';

import CommentList from './commentList';
import commentApi from './data/commentApi';

export default class Allcommentpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    this.setState({
      comments: commentApi.getAllComments(),
    });
  }

  render() {
    return (
      <tr>
        <CommentList comments={this.state.comments} />
      </tr>
    );
  }
}
