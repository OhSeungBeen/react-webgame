// React Life Cycle

// 1. construtor
// 2. render
// 3. ref setting
// 4. componentDidMount
// 5. render (shoudComponent ture, state/props 변경 시)
// 6. componentDidUpdate
// 7. componentWiiMount (Component 제거 시)

import React, { Component } from 'react'

class Step05 extends Component {

  state = {
    counter: 0,
  }

  interval;

  componentDidMount() { // Component First Rendering, 비동기 요청을 많이 사용 한다.
    console.log('componentDidMount()');

    this.interval = setInterval(() => { // 한 번만 실행
      console.log('setInterVal()');
      this.setState((prevState) => {
        return {
          counter: prevState.counter + 1
        }
      });
    }, 1000);
  }
  componentDidUpdate() { // After Rerendering
    console.log('componentDidUpdate()');
  }

  componentWillUnMount() { // Before Compoent is removed, 비동기 요청을 많이 사용 한다.
    console.log('componentWillUnMount()');

    clearInterVal(this.interval) // InterVal Remove
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

export default Step05;