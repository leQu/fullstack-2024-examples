import React, { useReducer } from "react";

// Step 1: Define a reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      const lvl = state.level === "Noob" && state.count > 10 ? "Pro" : "Noob";
      return { count: state.count + 1, level: lvl };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

// Step 3: Create component using useReducer
function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0, level: "Noob" });

  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </>
  );
}

export default Counter;
