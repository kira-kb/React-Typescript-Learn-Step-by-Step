import { useRef, useState } from "react";

const OtherRef: React.FC = () => {
  const countRef = useRef<number>(0);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    countRef.current += 1;
  };

  return (
    <>
      <div>state Counter: {count}</div>
      <div>ref Counter: {countRef.current}</div>
      <button onClick={increment}>click me</button>
    </>
  );
};

export default OtherRef;
