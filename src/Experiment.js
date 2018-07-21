import React, { Component } from 'react';

class Experiment extends Component {

  componentWillMount() {
    console.log('Compponent Will Mount');
  }

  componentDidMount() {
    console.log('Component Did Mount');
  }

  componentWillUnmount() {
    console.log('Component Will Unmount');
  }

  render() {
    return (<p></p>);
  }
}

export default Experiment;