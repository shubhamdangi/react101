import React from "react";

class Boundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return <h1>there is an error</h1>;
    }
    return this.props.children;
  }
}

export default Boundary;
