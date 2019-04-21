import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    quote: "I'm the first quote",
  }

  render() {
    return (
      <div className="App">
        <p className="StarWarsQuote">{this.state.quote}</p>
        <button onClick={this.generateQuote}>Generate!</button>
      </div>
    );
  }

  generateQuote = () => {
    this.setState({
      quote: "I'm the second quote",
    })
  }
}

export default App;
