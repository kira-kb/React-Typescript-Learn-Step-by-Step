import { useState } from "react";

const SimpleBTNClick: React.FC = () => {
  const [clicked, setClick] = useState<number>(1);

  const handleClick = () => {
    setClick(clicked + 1);
    alert(`button clicked ${clicked} clicked`);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me to see alert</button>
    </div>
  );
};

export default SimpleBTNClick;
