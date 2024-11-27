import "./App.css";
import Counter from "./components/counter";
import Greeting from "./components/greeting";
import Timer from "./components/timer";
import LogData from "./components/useEffect";

function App() {
  return (
    <>
      <Greeting name={"kira"} />
      <Counter />
      <Timer />
      <br />
      <br />
      <LogData />
    </>
  );
}

export default App;
