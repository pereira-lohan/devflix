import { useState } from 'react';

const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);

  const setValue = (key, value) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  const handleChange = ({ target }) => {
    setValue(target.getAttribute('name'), target.value);
  };

  const clearForm = () => {
    setValues(initialValue);
  };

  return {
    values,
    handleChange,
    clearForm,
  };
};

export default useForm;
