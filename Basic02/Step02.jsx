// Map, Component, Props

import React, { Component } from 'react'
import Step02Component from './Step02Component';

class Step02 extends Component {
  state = {
  };

  render() {
    return (
      <>
        {/* Map */}
        <ul>
          {[
            ['사과', '1'],
            ['바나나', 2],
            ['포도', 3],
          ].map((v) => {
            return (
              <li>{v[0]}, {v[1]}</li>
            );
          })}
        </ul>

        <ul>
          {[
            { fruit: '사과', number: '1' },
            { fruit: '바나나', number: '2' },
            { fruit: '포도', number: '3' },
          ].map((v, i) => {
            return (
              // key 성능 최적화
              // key는 고유값이어야 한다.
              <li key={v.number}> {v.fruit}, {v.number} {i}</li>
            );
          })}
        </ul>

        {/* Component */}
        {/* props */}
        <ul>
          {[
            { fruit: '사과', number: '1' },
            { fruit: '바나나', number: '2' },
            { fruit: '포도', number: '3' },
          ].map((v, i) => {
            return (
              <Step02Component key={v.number} value={v.fruit} number={v.number} index={i} />
            );
          })}
        </ul>

      </>
    );
  }
}

export default Step02;