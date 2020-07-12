import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    values: [],
  };

  async componentDidMount() {
    let {data: values} = await axios.get('http://localhost:5000/api/values');
    console.log(values);
    this.setState({ values });
  }

  render() {
    const { values } = this.state;
    return (
      <div>
        <h1>Dating App</h1>
        <ul>
          {values.map((value) => (
            <li key={value.id}>{value.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
