import useForm from "../hooks/useForm";

const MultiFieldForm = () => {
  const [values, handleChange] = useForm({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit", values);
  };

  return (
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
  );
};

export default MultiFieldForm;
