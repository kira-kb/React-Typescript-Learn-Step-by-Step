// You can use useRef to directly access and manipulate DOM elements. Unlike document.querySelector or getElementById, React's useRef provides a more React-friendly way to interact with the DOM.

import { useRef } from "react";

const UseRefEg2: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    if (inputRef.current) {
      const check = confirm("do you want to focus on the input");
      if (check) inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          type="text"
          placeholder="Click the button to focus"
        />{" "}
      </div>
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default UseRefEg2;
