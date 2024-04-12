import { useEffect, useState, useContext } from "react";
import { CounterContext } from "../App";

function UntrackedComponent({ simpleFunction }) {
  const canIFunc = () => {
    console.log("UntrackedComponent mounted");
    return () => {
      console.log("UntrackedComponent unmounted");
    };
  };

  const globalCounter = useContext(CounterContext);
  const [count, setCount] = useState(globalCounter);

  useEffect(canIFunc, [count]);

  return (
    <div>
      <p>Du klickade {count} gånger</p>
      <button
        onClick={() => {
          simpleFunction();
          setCount(count + 1);
        }}
      >
        Klicka mig
      </button>
    </div>
  );
}

export default UntrackedComponent;
