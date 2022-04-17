import React from "react";

class Home extends React.Component {
  constructor(props) {
    // since we're extending the react component class and a call has to be made to the base class constructor
    super(props);
    this.state = {
      count: 1,
    };
  }

  handleClick() {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
    console.log(this.state.count);
  }

  render() {
    return (
      <>
        <h1>i am class home</h1>
        <p>{this.state.count}</p>
        <button onClick={() => this.handleClick()}>+</button>
      </>
    );
  }
}

export default Home;
