// Another common use case for useRef is to store the previous value of a prop or state between renders. Since useRef persists its value without causing re-renders, it is perfect for this scenario.

import { useEffect, useRef, useState } from "react";

const DualCounter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const previousCount = useRef<number>(count);

  useEffect(() => {
    previousCount.current = count; // Update the ref to store the previous count
  }, [count]);

  return (
    <>
      <div>
        <div>current count: {count}</div>
        <div>previous count: {previousCount?.current}</div>

        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
    </>
  );
};

export default DualCounter;

// When Should You Use useRef?
// Accessing DOM elements directly: When you need to directly access or manipulate a DOM element, like focusing an input, getting a scroll position, etc.

// Persisting values across renders without causing re-renders: Useful for storing timers, previous values, or counts that shouldn’t trigger re-renders.

// Storing mutable values: When you want to store values (e.g., counters, form state) that need to be mutable but shouldn’t trigger a UI update.

// Working with third-party APIs: Use useRef to store references to objects like WebSocket connections, intervals, or other external data that need cleanup.
