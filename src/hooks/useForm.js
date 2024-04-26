import useLocalStorage from "./useLocalStorage";

export default function useForm(initialValues) {
  const [values, setValues] = useLocalStorage("form", initialValues);

  function handleChange(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  return [values, handleChange];
}
