import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
}

const ReactHookValidationSecondEg: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const checkEmailAvailability = async (email: string) => {
    const availableEmails = ["kira@me.me", "k@k.me", "kira@gmail.com"];

    return availableEmails.includes(email)
      ? "email already exists on the system"
      : true;
  };

  const onSubmit = (data: FormData) => {
    console.log("do something with this value", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>Live email chaking example</div>
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
            validate: checkEmailAvailability,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Email is invalid",
            },
          })}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      </div>
      <button type="submit">submit</button>
    </form>
  );
};

export default ReactHookValidationSecondEg;

// validate allows you to use custom validation logic. In this case, it checks if the email is already in use.
// checkEmailAvailability is an asynchronous function that simulates an API request to check if the email exists.
