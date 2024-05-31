import { useState } from "react";
import useForm from "../hooks/useForm";

const MultiFieldForm = () => {
  const [userName, setUserName] = useState("Anonym");
  const [values, handleChange] = useForm({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserName(values.name);
    console.log("Submit", values);
  };

  return (
    <>
      <h1 className="mb-4 mt-8 text-yellow-100 border-yellow-100 border-4 p-4">
        Hej {userName}!
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 my-8 text-black"
      >
        <input
          value={values.name}
          name="name"
          onChange={handleChange}
          type="text"
          className="p-2"
          placeholder="Namn"
        />
        <input
          name="email"
          onChange={handleChange}
          type="email"
          value={values.email}
        />
        <textarea
          name="message"
          onChange={handleChange}
          type="text"
          value={values.message}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default MultiFieldForm;
