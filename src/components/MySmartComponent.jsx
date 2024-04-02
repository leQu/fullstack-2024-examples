import React from "react";
import MySmartChild from "./MySmartChild";

class MySmartComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: this.props.initialCount };
    // this.incremenetCounter = this.incremenetCounter.bind(this);
  }

  handleResize = () => {
    console.log("RESIZE");
  };

  componentDidMount() {
    console.log("COMPONENT DID MOUNT");
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    console.log("COMPONENT WILL UNMOUNT");
    window.removeEventListener("resize", this.handleResize);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter !== this.state.counter) {
      console.log("Counter has changed");
      if (this.state.counter > 200) {
        this.setState({ level: "Pro" });
      }
      console.log("COMPONENT DID UPDATE");
    }
  }

  render() {
    console.log("RENDER");
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
