// React Hooks State Practice
// WordRelay Quiz
const React = require('react');
const ReactDOM = require('react-dom');
const { useState, useRef } = require('react');

const Practice02 = () => {
  const [word, setWord] = useState('오승빈');
  const [inputWord, setInputWord] = useState('');
  const [result, setResult] = useState('');
  const inputEl = useRef(null);

  const onChange = (e) => {
    setInputWord(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if(word[word.length - 1] === inputWord[0]){
      setWord(inputWord)
      setResult('correct');
      setInputWord('');
    }else{
      setResult('inCorrect');
      setInputWord('');
    }
    inputEl.current.focus();
  }

  return (
    <>
    <div>{word}</div>
    <form onSubmit={onSubmit}>
      <input ref={inputEl} value={inputWord} onChange={onChange}/>
      <button>Input</button>
    </form>
    <div>{result}</div>
    </>
  )
}

module.exports = Practice02;