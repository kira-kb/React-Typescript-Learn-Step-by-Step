import { useEffect, useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log(`Counter value has been changed: ${count}`);
  }, [count]);

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count - 1)}>Decrease -</button>
      <button onClick={() => setCount(count + 1)}>Increase -</button>
    </>
  );
};

export default Counter;
