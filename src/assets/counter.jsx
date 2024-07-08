import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  const remove = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Counter:{count}</h1>
      <button style={{ margin: "12px" }} onClick={handleCount}>
        Add
      </button>
      <button onClick={remove}>Remove</button>
    </div>
  );
}
