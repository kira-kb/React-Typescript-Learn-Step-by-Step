import { useState } from "react";
import "./App.css";
import ThemContext from "./components/context";
import ThemedComponent from "./components/themedComponent";

function App() {
  const [them, setThem] = useState<string>("light");
  return (
    <>
      <h3>⭐ Theme context</h3>
      <ThemContext.Provider value={them}>
        <button onClick={() => setThem(them === "light" ? "dark" : "light")}>
          Toggle Theme
        </button>
        <ThemedComponent />
      </ThemContext.Provider>
    </>
  );
}

export default App;

// Why Use Context API?
// Avoid Prop Drilling: Instead of passing props from parent to child down many layers, you can directly access the data where it’s needed.
// Global State: Context allows you to have a shared state that is available to multiple components at different nesting levels.
// Cleaner Code: It helps in reducing repetitive code when passing down props, making your components easier to manage and maintain.

// Provider: Wraps your components and provides the context value.
// Consumer: Used in class components to access the context value.

// Using a Provider
// The Provider component is used to wrap components that need access to the context. It accepts a
