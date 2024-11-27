import "./App.css";
import FormikValidation from "./components/formikAndYup";
import ReactHookValidationSecondEg from "./components/formValidationWithAsyncValidation";
import ManualVallidation from "./components/manualFormValidation";
import ReactHookValidation from "./components/react-hook-form";

function App() {
  return (
    <>
      <h3>⭐ manual validation</h3>
      <ManualVallidation />
      <h3>⭐ React hook form validation library</h3>
      <ReactHookValidation /> <br />
      <ReactHookValidationSecondEg />
      <h3>⭐ Formik and Yup form validation library</h3>
      <FormikValidation />
    </>
  );
}

export default App;
