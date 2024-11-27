// interface GreetingProps {
//   name: string;
// }
type GreetingProps = {
  name: string;
};

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  // React.FC<GreetingProps>: Ensures the function component receives the correct type for its props
  return (
    <>
      <h2>Hello, {name}</h2>
    </>
  );
};

export default Greeting;
