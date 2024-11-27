// React Hook Form, a popular library that simplifies form handling and validation. It is especially useful for performance, as it minimizes re-renders and easily integrates with TypeScript.
//?  npm install react-hook-form

import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
}

const ReactHookValidation: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) =>
    console.log("form submited successfully!!", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name: </label>
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
        />

        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      </div>
      <div>
        <label>Email: </label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Email is invalid",
            },
          })}
        />

        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      </div>
      <button type="submit">Submit </button>
    </form>
  );
};

export default ReactHookValidation;

// useForm: A hook provided by React Hook Form to manage the form state.
// register: Used to register the input fields and specify validation rules.
// errors: Automatically populated if the field fails validation.
// Scenario: When to use React Hook Form?
// Forms with more fields, where performance optimization is needed.
// When you want a clean, simple syntax to handle validation.

//? -----------------------------------------------------------------------------

// useForm() is the hook provided by react-hook-form to manage the form state.
// register() is used to register form inputs, so they can be controlled by react-hook-form.
// handleSubmit() handles form submission and validates inputs before calling onSubmit().
// formState: { errors } contains any validation errors for the form fields.
// {required: "This field is required"} is a basic validation rule.
