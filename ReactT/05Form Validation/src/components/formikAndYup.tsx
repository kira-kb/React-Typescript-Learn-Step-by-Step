// If you’re building more complex forms with advanced validation rules, Formik combined with Yup is a powerful solution.
//? npm install formik yup

import { useFormik } from "formik";
import * as Yup from "yup";

interface FormData {
  name: string;
  email: string;
}

const FormikValidation: React.FC = () => {
  const formik = useFormik<FormData>({
    initialValues: {
      name: "",
      email: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .min(3, "Name must be at least 3 characters"),

      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),

    onSubmit: (value) => console.log("Form submited successfully: ", value),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />

        {formik.touched.name && formik.errors.name && (
          <p style={{ color: "red" }}>{formik.errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="">Email: </label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />

        {formik.touched.email && formik.errors.email && (
          <p style={{ color: "red" }}>{formik.errors.email}</p>
        )}
      </div>

      <button type="submit">submit</button>
    </form>
  );
};

export default FormikValidation;
