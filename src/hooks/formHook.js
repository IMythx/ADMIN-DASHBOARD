import { useReducer } from "react";

const initialState = {
  inputs: {
    firstName: { isError: true, isTouched: false },
    lastName: { isError: true, isTouched: false },
    email: { isError: true, isTouched: false },
    contact: { isError: true, isTouched: false },
    firstAddress: { isError: true, isTouched: false },
    secondAddress: { isError: true, isTouched: false },
  },
  formIsValid: false,
};

const formReducer = (state, action) => {
  if (action.type === "TOUCHED") {
    if (action.fieldName === "FIRST_NAME") {
      return {
        ...state,
        inputs: {
          ...state.inputs,
          firstName: { ...state.inputs.firstName, isTouched: true },
        },
      };
    }
    if (action.fieldName === "LAST_NAME") {
      return {
        ...state,
        inputs: {
          ...state.inputs,
          lastName: { ...state.inputs.lastName, isTouched: true },
        },
      };
    }
    if (action.fieldName === "EMAIL") {
      return {
        ...state,
        inputs: {
          ...state.inputs,
          email: { ...state.inputs.email, isTouched: true },
        },
      };
    }
    if (action.fieldName === "CONTACT") {
      return {
        ...state,
        inputs: {
          ...state.inputs,
          contact: { ...state.inputs.contact, isTouched: true },
        },
      };
    }
    if (action.fieldName === "FIRST_ADDRESS") {
      return {
        ...state,
        inputs: {
          ...state.inputs,
          firstAddress: { ...state.inputs.firstAddress, isTouched: true },
        },
      };
    }
    if (action.fieldName === "SECOND_ADDRESS") {
      return {
        ...state,
        inputs: {
          ...state.inputs,
          secondAddress: { ...state.inputs.secondAddress, isTouched: true },
        },
      };
    }
  }
  if (action.type === "FIRST_NAME_INPUT") {
    const isError = action.value.length <= 0;
    const formIsValid =
      !isError &&
      !state.inputs.lastName.isError &&
      !state.inputs.email.isError &&
      !state.inputs.contact.isError &&
      !state.inputs.firstAddress.isError &&
      !state.inputs.secondAddress.isError;
    return { inputs: { ...state.inputs, firstName: { isError } }, formIsValid };
  }

  if (action.type === "LAST_NAME_INPUT") {
    const isError = action.value.length <= 0;
    const formIsValid =
      !state.inputs.firstName.isError &&
      !isError &&
      !state.inputs.email.isError &&
      !state.inputs.contact.isError &&
      !state.inputs.firstAddress.isError &&
      !state.inputs.secondAddress.isError;
    return { inputs: { ...state.inputs, lastName: { isError } }, formIsValid };
  }

  if (action.type === "EMAIL_INPUT") {
    const isError = !action.value.includes("@");
    const formIsValid =
      !state.inputs.firstName.isError &&
      !state.inputs.lastName.isError &&
      !isError &&
      !state.inputs.contact.isError &&
      !state.inputs.firstAddress.isError &&
      !state.inputs.secondAddress.isError;
    return { inputs: { ...state.inputs, email: { isError } }, formIsValid };
  }

  if (action.type === "CONTACT_INPUT") {
    const isError = action.value.length < 5;
    const formIsValid =
      !state.inputs.firstName.isError &&
      !state.inputs.lastName.isError &&
      !state.inputs.email.isError &&
      !isError &&
      !state.inputs.firstAddress.isError &&
      !state.inputs.secondAddress.isError;
    return { inputs: { ...state.inputs, contact: { isError } }, formIsValid };
  }

  if (action.type === "FIRST_ADDRESS_INPUT") {
    const isError = action.value.length <= 0;
    const formIsValid =
      !state.inputs.firstName.isError &&
      !state.inputs.lastName.isError &&
      !state.inputs.email.isError &&
      !state.inputs.contact.isError &&
      !isError &&
      !state.inputs.secondAddress.isError;
    return {
      inputs: { ...state.inputs, firstAddress: { isError } },
      formIsValid,
    };
  }

  if (action.type === "SECOND_ADDRESS_INPUT") {
    const isError = action.value.length < 0;
    const formIsValid =
      !state.inputs.firstName.isError &&
      !state.inputs.lastName.isError &&
      !state.inputs.email.isError &&
      !state.inputs.contact.isError &&
      !state.inputs.firstAddress.isError &&
      !isError;
    return {
      inputs: { ...state.inputs, secondAddress: { isError } },
      formIsValid,
    };
  }
};
const useForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  return [state, dispatch];
};
export default useForm;
