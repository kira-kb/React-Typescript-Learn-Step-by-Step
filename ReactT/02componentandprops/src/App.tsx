import Greeting from "./components/greeting";

const App: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the App!</h1>
      <Greeting name={"kira"} />
    </div>
  );
};

export default App;
