 import React from "react";
import { useState } from "react";

const Form = (Validate) => {
  const [value, setValue] = useState({
    username: "",
    email: "",
    password: "",
    password1: "", 
  });
  const [erorr, setError] = useState({});
  const handle = (e) => {
    const { name, value } = e.target;
    setValue((preValues) => {
      return {
        ...preValues,
        [name]: value,
      };
    });
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    setError(Validate(value));

  }
  return { handle, value ,handleSubmit,erorr};
};

export default Form;
