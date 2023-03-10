import React from 'react';
import Comment from './comment';
export default class CommentList extends React.Component {
  render() {
    let commentNodes = this.props.comments.map((comment) => (
      <Comment key={comment.id} author={comment.author}>
        {comment.city}
      </Comment>
    ));
    return (
      <>
        <table border="1">
          <thead>
            <tr>
              <th>Auther</th>
              <th>Cith</th>
            </tr>
          </thead>
          <tbody>{commentNodes}</tbody>
        </table>
      </>
    );
  }
}
