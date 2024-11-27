import { useState } from "react";

interface Data {
  name: string;
  email: string;
}

const ManualVallidation: React.FC = () => {
  const [formData, setFormData] = useState<Data>({ name: "", email: "" });
  const [formError, setFormError] = useState<Data>({ name: "", email: "" });

  const handleInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((previousData) => ({ ...previousData, [name]: value }));
  };

  const validator = () => {
    const errorData: Data = { name: "", email: "" };
    if (!formData.name) errorData.name = "Name is required!";
    if (!formData.email) errorData.email = "Email is required!";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      errorData.email = "Email is invalid";
    setFormError(errorData);

    return Object.values(formError).every((err) => err === "");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validator()) console.log("error happend while try to submit");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChanges}
        />
        {formError.name ? <p style={{ color: "red" }}>{formError.name}</p> : ""}
        {/* {formError.name && <p style={{ color: 'red' }}>{formError.name}</p>} */}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChanges}
        />
        {formError.email && <p style={{ color: "red" }}>{formError.email}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ManualVallidation;

// State Management: We use useState to manage the form data and errors.
// Validation: The validate() function checks if the name and email are valid. It updates the errors state if there are any issues.
// Error Display: If there are validation errors, they are displayed under the input fields.
// Scenario: When to use manual validation?
// Small forms with a limited number of fields.
// When you need full control over the validation process.
