// React Hooks
// useMemo, useCallback

// React Hooks 에서Coponent가 렌더링 될 때 내부에 선언되어 있던
// 표현식(변수, 함수 등)도 매번 다시 선언되어 사용된다
// Component는 자신의 state가 변경되거나, 부모에게서 받은 props가 변경되었을 때마다 리렌더링 된다.
import React, { Component, useState, useRef, useEffect, useMemo, useCallback } from 'react'

const Step05 = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const addCounter = () => {
    console.log('addCounter()');
    setCounter((prevCounter) => {
      return prevCounter + 1;
    });
  }

  const addCounter2 = () => {
    console.log('addCounter2()');
    setCounter2((prevCounter2) => {
      return prevCounter2 + 1;
    });
  }

  const onClickBtn = () => {
    console.log('onClickBtn()');
    addCounter();
  }

  const onClickBtn2 = () => {
    console.log('onClickBtn2()');
    addCounter2();
  }

  return (
    <>
      <div>
        <button onClick={onClickBtn}>Add Counter</button>
        <button onClick={onClickBtn2}>Add Counter2</button>
        <div>{counter}</div>
        <div>{counter2}</div>
      </div>
    </>
  );
}

export default Step05;