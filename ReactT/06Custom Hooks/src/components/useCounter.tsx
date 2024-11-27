import { useState } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState<numbe>(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return { counter, increment, decrement };
};

export default useCounter;
