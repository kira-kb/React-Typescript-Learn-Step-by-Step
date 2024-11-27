import { useContext } from "react";
import ThemContext from "./context";

const ThemedComponent: React.FC = () => {
  const them = useContext(ThemContext);

  return (
    <>
      <div
        style={{
          backgroundColor: them === "light" ? "#eee" : "#333",
          color: them === "light" ? "#333" : "#eee",
        }}
      >
        <p>the current it: {them}</p>
      </div>
    </>
  );
};

export default ThemedComponent;
