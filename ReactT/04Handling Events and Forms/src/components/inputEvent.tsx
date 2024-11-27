import { useState } from "react";

const InputEvent: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [type, setType] = useState<string>("name");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
  };

  return (
    <>
      <p>
        Your {type} is: {name}
      </p>
      <input
        type="text"
        onChange={handleInput}
        placeholder="Enter your name here"
      />
      <select onChange={handleSelect}>
        <option value="name">name</option>
        <option value="title">title</option>
        <option value="note">note</option>
      </select>
    </>
  );
};

export default InputEvent;
