import React, { Component } from 'react';
import './App.css';
import Todolist from "./components/todolist";

class App extends Component {
  state={
    count:0
  };
  increment = ()=>{
    this.setState({
      count: this.state.count + 1
    });
  };
  decrease=()=>{
    this.setState({
      count: this.state.count -1
    });
  };
  render() {
    return (
      <div className="App">
      <Todolist />
      </div>
    );
  }
}

export default App;
