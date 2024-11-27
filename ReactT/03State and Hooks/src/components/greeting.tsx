type GreetingsProb = {
  name: string;
};

const Greeting: React.FC<GreetingsProb> = ({ name }) => {
  return <h2>Hello, {name}</h2>;
};

export default Greeting;
