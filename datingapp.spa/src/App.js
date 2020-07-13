import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    value: '',
  };

  async componentDidMount() {
    let { data } = await axios.get('http://localhost:5000/api/values/1');
    console.log(data);
  }

  render() {
    
    return (
      <div>
        <h1>Dating App</h1>
        <div>Good</div>
      </div>
    );
  }
}

export default App;
