import { useState } from "react";

interface User {
  name: string;
  lname: string;
  age: number;
  email: string;
}

const UserForm: React.FC = () => {
  const [user, setUser] = useState<User>({
    name: "",
    lname: "",
    age: 0,
    email: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      `Submitted: Name - ${user.name}, Last Name - ${user.name}, Email - ${user.email}, Age - ${user.age}`
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((previousUserData) => ({
      ...previousUserData,
      [name]: value,
    }));
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div>
          name:
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={user.name}
          />
        </div>
        <div>
          last name:
          <input
            type="text"
            name="lname"
            onChange={handleChange}
            value={user.lname}
          />
        </div>
        <div>
          age:
          <input
            type="number"
            name="age"
            onChange={handleChange}
            value={user.age}
          />
        </div>
        <div>
          email:
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={user.email}
          />
        </div>
        <button type="submit">submit form</button>
      </form>
    </>
  );
};

export default UserForm;

//import { useState } from "react";
// interface IncommingForm { name: string;
// lname: string;
// age: number;
// email: string;
// } const UserForm: React.FC = () => { const [inputData, setInputData] = useState<IncommingForm>({ name: "", lname: "", age: 0, email: "", });
// const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => { event.preventDefault();
// console.log('User details:', inputData);
// alert( `Submitted: Name - ${inputData.name}, Last Name - ${inputData.lname}, Email - ${inputData.email}, Age - ${inputData.age}` );
// };
// const handleInputEvents = (e: React.ChangeEvent<HTMLInputElement>) => {
// const { name, value } = e.target;
// setInputData((previousData) => ({
//  ...previousData,
// name: value // this is error b/c name: is not the variable we declared before
//  [name]: value, // to access the variable name and pass name parameter to useState we should de [name]:
//  }));
// console.log(inputData);
//};
//return (
{
  /* <> <form onSubmit={handleSubmit} action=""> 
    <div> First name:{" "} <input onChange={handleInputEvents} value={inputData.name} type="text" name="name" /> </div> 
    <div> Last name:{" "} <input onChange={handleInputEvents} value={inputData.lname} type="text" name="lname" /> </div> 
    <div> age:{" "} <input onChange={handleInputEvents} value={inputData.age} type="number" name="age" /> </div> 
    <div> Email:{" "} <input onChange={handleInputEvents} value={inputData.email} type="email" name="email" /> </div> 
    <button type="submit">submit</button> </form> </> 
    );
 };
  export default UserForm; */
}
