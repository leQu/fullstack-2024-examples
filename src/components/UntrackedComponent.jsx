import { useEffect, useState, useContext } from "react";
import { CounterContext } from "../App";

function UntrackedComponent() {
  useEffect(() => {
    console.log("UntrackedComponent mounted");
    return () => {
      console.log("UntrackedComponent unmounted");
    };
  });

  const globalCounter = useContext(CounterContext);
  const [count, setCount] = useState(globalCounter);

  return (
    <div>
      <p>Du klickade {count} gånger</p>
      <button onClick={() => setCount(count + 1)}>Klicka mig</button>
    </div>
  );
}

export default UntrackedComponent;
