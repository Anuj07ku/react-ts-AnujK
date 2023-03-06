import React from 'react';
import PropTypes from 'prop-types';

class StudentComp extends React.Component {
  render() {
    return (
      <>
        <p>Name {this.props.name}</p>
        <p>Project {this.props.project}</p>
        <p>Age {this.props.age}</p>
      </>
    );
  }
}

StudentComp.propTypes = {
  name: PropTypes.string.isRequired,
  project: PropTypes.array,
  age(props, propName) {
    if (props[propName] !== 'Number') {
      return new Error('Age must be in Numger');
    }

    if (props[propName] > 100) {
      return new Error(
        'Age enter is ' +
          props[propName] +
          ' It must be less then or equal to 100'
      );
    }
  },
};

StudentComp.defaltProps = {
  Name: 'Ram',
};

export default class App extends React.Component {
  render() {
    return (
      <>
        <StudentComp name={'Anuj'} project={['ReactPro']} age={22}></StudentComp>
      </>
    );
  }
}
