import "./App.css";
import useform from "./components/customFomHook";
import useFetch from "./components/customHook";
import Loader from "./components/loadingAnimation";
import useCounter from "./components/useCounter";
import useLocalStorage from "./components/useLocalStorage";

interface FetchData {
  name: string;
  id: number;
}

function App() {
  const { data, isLoading, errors } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const { counter, increment, decrement } = useCounter();

  const name = useform("");
  const email = useform("");

  const [savedEmail, setSavedEmail] = useLocalStorage<string>("email", "");
  const [savedName, setSavedName] = useLocalStorage<string>("name", "");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // alert(
    //   `this is handle by custom hook  name: ${name.value},  email: ${email.value}`
    // );
    setSavedEmail(email.value);
    setSavedName(name.value);
  };

  if (isLoading) return <Loader />;
  if (errors) return <p>{errors}</p>;

  return (
    <>
      <h3>⭐ custome hooks for listing</h3>
      <div>
        <h4>User List</h4>
        <ul>
          {data.map((user: FetchData) => (
            <li key={user.id}>
              {user.id}: ---- {user.name}
            </li>
          ))}
        </ul>
      </div>

      <h3>⭐ custome hooks for form validation</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" {...name} />
          </div>
          <div>
            <input type="text" {...email} />
          </div>
          <button type="submit">submit</button>
        </form>
      </div>

      <h3>⭐ custome hooks for counting useState</h3>
      <div>
        <div>{counter}</div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>

      <h3>⭐ custome hooks for localStorage</h3>
      <div>
        <p style={{ backgroundColor: savedEmail ? "green" : "red" }}>
          Email: {savedEmail}
        </p>
        <p style={{ backgroundColor: savedName ? "green" : "red" }}>
          Name: {savedName}
        </p>
      </div>
    </>
  );
}

export default App;

// Here are some common scenarios where you might use custom hooks:

// Fetching Data: Abstracting repetitive data fetching logic.
// Form Handling: Managing form state, validation, and submission.
// Handling Authentication: Abstracting logic for user login and authorization.
// Event Listeners: Encapsulating logic for adding/removing event listeners (e.g., window resize, scrolling).
// Local Storage: Managing state that syncs with localStorage or sessionStorage.
