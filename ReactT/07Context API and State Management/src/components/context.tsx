import { createContext } from "react";

const ThemContext = createContext("light");

export default ThemContext;

// Creating and Using Context in React
// 1. Creating a Context
// To create a context, use the React.createContext() function. It returns an object with two main properties:

// Provider: Wraps your components and provides the context value.
// Consumer: Used in class components to access the context value.
