import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setinc] = useState(1);
  function handleClick() {
    setCount(count + incrementBy);
  }
  function decreaseClick() {
    setCount(count - incrementBy);
  }
  function increaseInc() {
    setinc(incrementBy + 1);
  }
  return (
    <div>
      <h1>Count value is: {count} </h1>
      <button onClick={handleClick}> Press </button>
      <button onClick={decreaseClick}> Decrease </button>

      <h1>We are incrementing the value by : {incrementBy}</h1>
      <button onClick={increaseInc}> Increase increment </button>
    </div>
  );
}
