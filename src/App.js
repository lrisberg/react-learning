import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

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
    axios.get("http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote")
      .then((response) => {
        this.setState({
          quote: response.data.starWarsQuote,
        })
      })
  }
}

export default App;
