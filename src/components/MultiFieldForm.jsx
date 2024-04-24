import React, { useState } from "react";

const MultiFieldForm = () => {
  const [fieldData, setFieldData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFieldData({ ...fieldData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit", fieldData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 my-8 text-black"
    >
      <input
        name="name"
        onChange={handleChange}
        type="text"
        className="p-2"
        placeholder="Namn"
      />
      <input name="email" onChange={handleChange} type="email" />
      <textarea name="message" onChange={handleChange} type="text" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MultiFieldForm;
