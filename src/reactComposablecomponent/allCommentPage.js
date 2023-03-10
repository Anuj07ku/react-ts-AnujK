import React from 'react';

import CommentList from './commentList';
import commentApi from './data/commentApi';
// Server connection
//import commentApi from './data/commentApiServer';

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
  /*
  // Server connection
  componentDidMount() {
    commentApi.getAllComments(data => this.setState({ comments: data }));
  }
*/
  render() {
    return (
      <tr>
        <CommentList comments={this.state.comments} />
      </tr>
    );
  }
}
