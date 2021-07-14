// React Performance Improvement
// PureComponent

import React, { Component, PureComponent } from 'react'

class Step04 extends PureComponent {
  state = {
    string: 'example',
    number: 1,
    boolean: true,
    object: {},
    array: [],
  }

  // PureComponenet를 사용하면 state가 바뀌었는지 자동으로 확인하여 Rendering해주지만 object와 Array를 사용 할 경우 주의 하여야 한다.
  onClick = () => {
    const array = [...this.state.array, 4]; // 새로운 객체 또는 배열을 만들어서 사용해야 한다.

    this.setState({
      array: array,

    });
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


export default Step04;