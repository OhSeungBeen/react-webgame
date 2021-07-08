const React = require('react');
const ReactDOM = require('react-dom');

class ComponentEx extends React.Component {
  state = {
    value: 'Hello WebPack'
  }
  render() {
    return <h1>{this.state.value}</h1>
  }
}

module.exports = ComponentEx;

