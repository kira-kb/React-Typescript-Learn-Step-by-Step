import "./App.css";
import DualCounter from "./components/dualCounter";
import InputEvent from "./components/inputEvent";
import UserForm from "./components/multipleFormEvent";
import OtherRef from "./components/otherRef";
import SimpleBTNClick from "./components/simpleButtonClick";
import UncontrolledForm from "./components/UncontrolledForm";
import UseRefEg2 from "./components/uncontrolledForm2";

function App() {
  return (
    <>
      <SimpleBTNClick />
      <InputEvent />

      <h3>handling controlled forms:</h3>
      <UserForm />

      <h3>handling uncontrolled forms:</h3>
      <UncontrolledForm />

      <h3>more example: </h3>
      <UseRefEg2 />

      <h3>even more example: </h3>
      <DualCounter />

      <h3>even more: </h3>
      <OtherRef />
    </>
  );
}

export default App;

// onChange: This event is triggered when the value of the input field changes.
// useState: We use the useState hook to store and update the name value as the user types.
// event.target.value: This captures the current value of the input field, and we use setName to update the state.
