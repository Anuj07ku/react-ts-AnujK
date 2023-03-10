import CommentData from './commentData';

export default class commentApi {
  static getAllComments() {
    return CommentData.comments;
  }
}
