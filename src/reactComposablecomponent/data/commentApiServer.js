import axios from './commentData';

export default class commentApiserver {
  static getAllComments(cb) {
    axios
      .get('http://localhost/comments')
      .then((Response) => cb(Response.data))
      .catch((Error) => {
        throw Error;
      });
  }
}
