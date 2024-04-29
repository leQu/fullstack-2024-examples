import React, { useState, useEffect } from "react";

import useApi from "../hooks/useApi";

export default function TitleChanger() {
  const [count, setCount] = useState({ count: 0, totalCount: 0 });
  const [data, isLoading, onError] = useApi(
    "https://dummyjson.com/products/100"
  );

  useEffect(() => {
    document.title = `Du klickade ${count.totalCount} gånger`;
  }, [count.totalCount]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <p className="bg-red-900 rounded-full p-4">
        Du klickade {count.count} gånger
      </p>
      <button
        onClick={() =>
          setCount({ count: count.count + 1, totalCount: count.totalCount + 1 })
        }
      >
        Klicka mig
      </button>
      <button
        className="text-color-red-900 p-4"
        style={{ color: "red", padding: "12px", margin: "10px" }}
        onClick={() =>
          setCount({ count: count.count - 1, totalCount: count.totalCount + 1 })
        }
      >
        Klicka mig inte
      </button>
    </>
  );
}
