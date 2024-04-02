import React from "react";

class MySmartChild extends React.Component {
  constructor() {
    super();
    this.state = {
      level: "Noob",
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps);
    if (nextProps.count > 110) {
      return true;
    }
    return false;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.count !== this.props.count) {
      console.log("Count has changed");
      if (this.props.count > 110) {
        this.setState({ level: "Pro" });
      }
    }
  }

  render() {
    return <div>Din nuvarande cookie clicker nivå är: {this.state.level}</div>;
  }
}

export default MySmartChild;
