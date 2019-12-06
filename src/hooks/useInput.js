import { useState } from 'react';

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const handleChange = e => {
    e.preventDefault();
    setValue(e.target.value);
  };
  return {
    value,
    inputProperties: {
      onChange: handleChange,
      value,
    },
  };
};

export default useInput;
