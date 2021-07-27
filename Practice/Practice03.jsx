// React Map, Props Practice
// NumberBaseBall Quiz

import React, { Component, createRef } from 'react'
import Practice03Component from './Practice03Component';

function getNumbers() {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for(let i = 0; i < 4; i++) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen)
  }
  return array;
}

class Practice03 extends Component {
  state = {
    result: '',
    inputNumber: '',
    answer: getNumbers(),
    tries: [],
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.inputNumber === this.state.answer.join('')) {
      this.setState({
        result: 'HomeRun!',
        // Array Copy한다. 이전state와 현재 state가 달라야 render함수가 실행된다.
        tries: [...this.state.tries, { try: this.state.inputNumber, result: 'HomeRun!'}], 
      })
      alert('Restart Game')
      this.setState({
        inputNumber: '',
        answer: getNumbers(),
        tries: [],
      });

    } else {
      const answerArray = this.state.inputNumber.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;

      if (this.state.tries.length >= 9) {
        this.setState({
          result: `tries Number 10. answer: ${this.state.answer.join(',')} !`
        })
        alert('Restart Game')
        this.setState({
          inputNumber: '',
          answer: getNumbers(),
          tries: [],
        });
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === this.state.answer[i]) {
            strike += 1;
          } else if (this.state.answer.includes(answerArray[i])) {
            ball += 1;
          }
        }

        this.setState((prevState) => {
          return {
            tries: [...prevState.tries, { try: this.state.inputNumber, result: `${strike} Strike, ${ball} Ball`}],
            inputNumber: '',
          };
        });
      }
    }
    this.inputRef.current.focus();
  }

  onChange = (e) => {
    console.log(this.state.answer);

    this.setState({
      inputNumber: e.target.value,
    })
  }

  inputRef = createRef();

  render() {
    const {result, inputNumber, tries} = this.state;
    return (
      <>
      <h1>{result}</h1>
      <form onSubmit={this.onSubmit}>
        <input ref={this.inputRef} maxLength={4} value={inputNumber} onChange={this.onChange}/>
        <button>Input</button>
      </form>
      <div> tries : {tries.length}</div>

      <ul>
        {tries.map((v, i) => {
          return (
            <Practice03Component key={v.try + v.result} tryInfo={v}/>
          );
        })}
      </ul>
      </>
    );
  }
}

export default Practice03;