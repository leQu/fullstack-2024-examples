import React from "react";
import MySmartChild from "./MySmartChild";

class MySmartComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: this.props.initialCount };
    // this.incremenetCounter = this.incremenetCounter.bind(this);
  }

  handleResize = () => {};

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter !== this.state.counter) {
      if (this.state.counter > 200) {
        this.setState({ level: "Pro" });
      }
    }
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <MySmartChild count={this.state.counter} />
        <button
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default MySmartComponent;
