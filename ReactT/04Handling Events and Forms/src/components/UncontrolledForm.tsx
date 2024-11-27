import { useRef } from "react";

const UncontrolledForm: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      `this is uncontrolled form name-${nameRef.current?.value}, email-${emailRef.current?.value}`
    );
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div>
        <input type="text" ref={nameRef} name="name" id="" />
      </div>
      <div>
        <input type="email" ref={emailRef} name="email" id="" />
      </div>
      <button type="submit">submit</button>
    </form>
  );
};

export default UncontrolledForm;
