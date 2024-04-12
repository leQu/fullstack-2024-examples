import React, { useState, useEffect } from "react";

export default function TitleChanger() {
  const [count, setCount] = useState({ count: 0, totalCount: 0 });

  useEffect(() => {
    document.title = `Du klickade ${count.totalCount} gånger`;
  }, [count.totalCount]);

  return (
    <>
      <p>Du klickade {count.count} gånger</p>
      <button
        onClick={() =>
          setCount({ count: count.count + 1, totalCount: count.totalCount + 1 })
        }
      >
        Klicka mig
      </button>
      <button
        onClick={() =>
          setCount({ count: count.count - 1, totalCount: count.totalCount + 1 })
        }
      >
        Klicka mig inte
      </button>
    </>
  );
}
