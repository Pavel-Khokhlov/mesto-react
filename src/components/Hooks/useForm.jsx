import { useState, useCallback } from "react";
import { useSelector } from "react-redux";

import { REG_EMAIL, REG_PASSWORD, REG_LINK } from "../../utils/config";

export function useFormWithValidation() {
  const { currentUser } = useSelector((state) => state.users);
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const validateMessage = (target) => {
    if (target.name === "name") {
      if (target.value.length === 0) {
        return `Required`;
      }
      if (target.value.length < 2) {
        return "The name must be more 2 symbols";
      }
      return "";
    }
    if (target.name === "lastname") {
      if (target.value.length === 0) {
        return "Please enter the name";
      }
      if (target.value.length < 2) {
        return "The lastname must be more 2 symbols";
      }
      return "";
    }
    if (target.name === "about") {
      if (target.value.length === 0) {
        return `Required`;
      }
      if (target.value.length < 8) {
        return "The description must be more 8 symbols";
      }
      return "";
    }
    if (target.name === "email") {
      if (target.value.length === 0) {
        return "Please enter the E-mail";
      }
      if (!REG_EMAIL.test(target.value)) {
        return "Please enter the correct email";
      }
      return "";
    }
    if (target.name === "password") {
      if (target.value.length === 0) {
        return "Please enter the password";
      }
      if (target.value.length < 8) {
        return "The password must be more than 8 symbols";
      }
      if (!REG_PASSWORD.test(target.value)) {
        return "The password must include numbers, lowcase and uppercase letters";
      }
      return "";
    }
    if(target.name === "link") {
      if (target.value.length === 0) {
        return "Please enter the link";
      }
      if (!REG_LINK.test(target.value)) {
        return "Please enter the correct link";
      }
      return "";
    }
  };

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validateMessage(target) });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  const resetFormCurrentUser = useCallback(
    (
      newValues = currentUser,
      newErrors = {},
      newIsValid = false
    ) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid, currentUser]
  );

  return {
    values,
    errors,
    isValid,
    handleChange,
    setValues,
    resetForm,
    resetFormCurrentUser,
  };
}
