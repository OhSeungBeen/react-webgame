// React Hooks
// useEffect

import React, { Component, useState, useRef, useEffect } from 'react'

const Step05 = () => {

  const interval = useRef(null);

  // componentDidMount // Component First Rendering, 비동기 요청을 많이 사용 한다.
  // componentWillUnMount // Before Compoent is removed, 비동기 요청을 많이 사용 한다.
  // componentDidUpdate // After Rerendering

  // componentDidMount, componentDidUpdate 역할
  useEffect(() => { 
    console.log('실행');
    interval.current = setInterval(() => {
      console.log('setInterVal()');
    }, 1000);
    return () => { // componentWillUnmount 역할
      console.log('종료');
      clearInterVal(interval.current);
    }
  }, []); // 두 번째 파라미터 배열에 넣은 값이 바뀔 때 useEffect가 계속 실행된다. ComopenetDidUpdate
          // 넣지 않으면 한번 만 실행된다. ComponentDidMount

  useEffect(() => { }, []); // useEffct() 여러번 호출하여 사용이 가능하다.       

  return (
    <>
      <div>
      </div>
    </>
  );
}

export default Step05;