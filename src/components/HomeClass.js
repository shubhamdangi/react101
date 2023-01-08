import React from "react";

class Home extends React.Component {
  constructor(props) {
    // since we're extending the react component class and a call has
    // to be made to the base class constructor
    super(props);
    this.state = {
      count: 1,
      message: "Good morning!",
      greet: "",
      skill: "",
    };
  }

  handleClick() {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
    console.log(this.state.count);
  }

  Shift() {
    this.setState({
      message: "Good afternoon !",
    });
  }

  handleMessageChange = (e) => {
    this.setState({
      greet: e.target.value,
    });
    console.log(this.state.greet);
  };

  handleChoice = (e) => {
    this.setState({
      skill: e.target.value,
    });
  };

  handleSubmit = () => {
    alert(`my message is ${this.state.message} and i love ${this.state.skill}`);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h1>i am class home</h1>
          <label>Message</label>
          <input
            type="text"
            value={this.state.greet}
            onChange={this.handleMessageChange}
          />
          <h1>{this.state.greet}</h1>
          <select onChange={this.handleChoice}>
            <option value="react">React</option>
            <option value="vue">Vue.js</option>
            <option value="angular">Angular</option>
          </select>
          <button type="submit">Submit OK</button>
        </form>
      </>
    );
  }
}

export default Home;
