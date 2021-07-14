// Component, Props
import React, { Component } from 'react';

class Step02Component extends Component {
  render() {
    return (
      <li key={this.props.number}> {this.props.value} {this.props.index}</li>
    );
  }
}

export default Step02Component;