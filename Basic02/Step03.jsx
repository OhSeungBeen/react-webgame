// React Performance Improvement
// shouldComponentUpdate

import React, { Component } from 'react'

class Step03 extends Component {
  state = {
    counter: 0,
  }

  onClick = () => {
    //this.setState({}); // No Rendering
    this.setState((prevState) => { // Renering
      return {
        counter: prevState.counter + 1
      }
    });
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log(this.state.counter, nextState.counter);
    if (this.state.counter !== nextState.counter) {
      return true; // Rendering
    }

    return false; // No Rendering
  }

  render() {
    console.log('rendering', this.state.counter);
    return (
      <>
        <div>
          <button onClick={this.onClick}>Click</button>
        </div>
      </>
    );
  }
}


export default Step03;