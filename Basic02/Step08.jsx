// React Redux

import React, { Component } from 'react';

// action
// 상태에 어떤 변화가 필요하면 Action 발생
// 객체로 표현된다.
// {
//     type: 'ADD_TODO', // Action Name
//     data:{
//         id: 1,
//         text: 'Hello',
//     }
// }

// action Create Function
function addTodo(data) {
  return {
    type: 'ADD_TODO',
    data,
  };
}
// action Create Arrow Function
const addTodo2 = (data) => {
  {
    type: 'ADD_TODO2', data;
  }
};

// reducer
// 변화를 일으키는 함수이다.
// 액션을 만들어서 발생시키면 리듀서가 현재state와 전달받은 액션 객체를 파라미터로 받아온다.
// 두값을 참고하여 새로운 state를 생성하여 반환한다.
const initialState = {
  counter: 1,
};

function reducer(state = initialState, action) {
  const ADD_TODO = 'ADD_TODO';
  switch (action.type) {
    case ADD_TODO:
      return {
        counter: state.counter + 1,
      };
    default:
      return state;
  }
}

// store
// 프로젝트에 리덕스를 적용하기 위해 store를 만든다.
// 한 개의 프로젝트는 단 하나의 스토어만 가질 수 있다.
// 스토어안에는 state, reducer 내장함수를 가지고 있다.`

// dispatch
// Action을 발생시킨다.
// dispatch(action);과 같은 형태로 액션 객체를 파라미터로 넣어 호출한다.
// 함수가 호출되면 스토어는 reducer 함수가 실행되어 새로운 state를 만들어준다.

// subscribe
// store의 내장 함수 중 하나이다.
// subscribe 함수 안에 리스너 함수를 파라미터로 넣어 호출하면
// 리스너 함수가 액션이 디스패치되어 상태가 업데이트 될때마다 호출된다.

const Step01 = () => {
  return {};
};

export default Step01;
