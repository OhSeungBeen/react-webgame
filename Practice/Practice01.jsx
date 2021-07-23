// React State Practice
// WordRelay Quiz
const React = require('react');
const ReactDOM = require('react-dom');

class Practice01 extends React.Component {
  state = {
    word: '오승빈',
    inputWord: '',
    result: '',
  }

  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.word[this.state.word.length - 1] === this.state.inputWord[0]){
      this.setState((prevState) =>{ 
        return {
        result: 'correct',
        word: prevState.inputWord,
        inputWord: ''
        }
      });
    }else{
      this.setState({
        result: 'inCorrect',
        inputWord: '',
      });
    }

    this.input.focus();
  }

  input;

  onRefInput = (c) => {
    this.input = c;
  }
  
  onChange = (e) => {
    this.setState({ inputWord : e.target.value});
  }


  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmit}>
          <input ref ={this.onRefInput} value= {this.state.inputWord} onChange={ this.onChange }/>
          <button>Input</button>
        </form>
        <div>{this.state.result}</div>
      </>
    )
  }
}

module.exports = Practice01;

