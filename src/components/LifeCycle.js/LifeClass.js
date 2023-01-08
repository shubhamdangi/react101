import React, { Component } from "react";

export default class LifeClass extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      count: 1,
    };
  }

  handleCount = () => {
    this.setState((prev) => {
      return { count: prev.count + 1 };
    });
  };

  tick = () => {
    this.setState((prev) => {
      return {
        count: prev.count + 1,
      };
    });
  };

  componentDidMount() {
    console.log("mounted successfully");
    document.title = ` count is: ${this.state.count}`;
    this.interval = setInterval(this.tick, 1000);
  }

  componentDidUpdate() {
    document.title = ` count is : ${this.state.count}`;
    console.log("updated successfully");
  }

  componentWillUnmount() {
    console.log("unmounted successfully bye");
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        LifeClass
        <br />
        <p>count is {this.state.count}</p>
        <button onClick={this.handleCount}> + </button>
      </div>
    );
  }
}
