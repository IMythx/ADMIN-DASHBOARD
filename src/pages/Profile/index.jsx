import classes from "./profile.module.css";
import PageHeader from "../../components/global/PageHeader";
import { useRef, useContext } from "react";
import { ThemeContext } from "../../Theme";
import useForm from "../../hooks/formHook";
const Profile = () => {
  const { darkTheme } = useContext(ThemeContext);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const EmailRef = useRef();
  const contactRef = useRef();
  const firstAddressRef = useRef();
  const secondAddressRef = useRef();
  const [state, dispatch] = useForm();
  return (
    <section className={`${classes.profile} ${darkTheme && classes.dark}`}>
      <PageHeader
        title={"CREATE USER"}
        subTitle={"Create a New User Profile"}
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (state.formIsValid) {
            console.log(state.inputs);
          }
        }}
      >
        <fieldset
          className={
            state.inputs.firstName.isError && state.inputs.firstName.isTouched
              ? classes.isError
              : ""
          }
          onClick={() => firstNameRef.current.focus()}
        >
          <input
            type="text"
            ref={firstNameRef}
            onChange={() =>
              dispatch({
                type: "FIRST_NAME_INPUT",
                value: firstNameRef.current.value,
              })
            }
            onBlur={() =>
              dispatch({ type: "TOUCHED", fieldName: "FIRST_NAME" })
            }
          />
          <label
            className={!state.inputs.firstName.isError ? classes.filled : ""}
            htmlFor=""
          >
            First Name
          </label>
          {state.inputs.firstName.isError &&
            state.inputs.firstName.isTouched && (
              <p>Please Enter a Valid Name</p>
            )}
        </fieldset>
        <fieldset
          className={
            state.inputs.lastName.isError && state.inputs.lastName.isTouched
              ? classes.isError
              : ""
          }
          onClick={() => lastNameRef.current.focus()}
        >
          <input
            type="text"
            ref={lastNameRef}
            onChange={() =>
              dispatch({
                type: "LAST_NAME_INPUT",
                value: lastNameRef.current.value,
              })
            }
            onBlur={() => dispatch({ type: "TOUCHED", fieldName: "LAST_NAME" })}
          />
          <label
            className={!state.inputs.lastName.isError ? classes.filled : ""}
            htmlFor=""
          >
            Last Name
          </label>
          {state.inputs.lastName.isError && state.inputs.lastName.isTouched && (
            <p>Please Enter a Valid Name</p>
          )}
        </fieldset>
        <fieldset
          className={
            state.inputs.email.isError && state.inputs.email.isTouched
              ? classes.isError
              : ""
          }
          onClick={() => EmailRef.current.focus()}
        >
          <input
            type="email"
            ref={EmailRef}
            onChange={() =>
              dispatch({
                type: "EMAIL_INPUT",
                value: EmailRef.current.value,
              })
            }
            onBlur={() => dispatch({ type: "TOUCHED", fieldName: "EMAIL" })}
          />
          <label
            className={!state.inputs.email.isError ? classes.filled : ""}
            htmlFor=""
          >
            Email
          </label>
          {state.inputs.email.isError && state.inputs.email.isTouched && (
            <p>Please Enter a Valid Email</p>
          )}
        </fieldset>
        <fieldset
          className={
            state.inputs.contact.isError && state.inputs.contact.isTouched
              ? classes.isError
              : ""
          }
          onClick={() => contactRef.current.focus()}
        >
          <input
            type="number"
            ref={contactRef}
            onChange={() =>
              dispatch({
                type: "CONTACT_INPUT",
                value: contactRef.current.value,
              })
            }
            onBlur={() => dispatch({ type: "TOUCHED", fieldName: "CONTACT" })}
          />
          <label
            className={!state.inputs.contact.isError ? classes.filled : ""}
            htmlFor=""
          >
            Contact Number
          </label>
          {state.inputs.contact.isError && state.inputs.contact.isTouched && (
            <p>Invalid: Should Be 5 numbers at least</p>
          )}
        </fieldset>
        <fieldset
          className={
            state.inputs.firstAddress.isError &&
            state.inputs.firstAddress.isTouched
              ? classes.isError
              : ""
          }
          onClick={() => firstAddressRef.current.focus()}
        >
          <input
            type="text"
            ref={firstAddressRef}
            onChange={() =>
              dispatch({
                type: "FIRST_ADDRESS_INPUT",
                value: firstAddressRef.current.value,
              })
            }
            onBlur={() =>
              dispatch({ type: "TOUCHED", fieldName: "FIRST_ADDRESS" })
            }
          />
          <label
            className={!state.inputs.firstAddress.isError ? classes.filled : ""}
            htmlFor=""
          >
            Address 1
          </label>
          {state.inputs.firstAddress.isError &&
            state.inputs.firstAddress.isTouched && (
              <p>Please Enter a Address Name</p>
            )}
        </fieldset>
        <fieldset
          className={
            state.inputs.secondAddress.isError &&
            state.inputs.secondAddress.isTouched
              ? classes.isError
              : ""
          }
          onClick={() => secondAddressRef.current.focus()}
        >
          <input
            type="text"
            ref={secondAddressRef}
            onChange={() =>
              dispatch({
                type: "SECOND_ADDRESS_INPUT",
                value: secondAddressRef.current.value,
              })
            }
            onBlur={() =>
              dispatch({ type: "TOUCHED", fieldName: "SECOND_ADDRESS" })
            }
          />
          <label
            className={
              !state.inputs.secondAddress.isError ? classes.filled : ""
            }
            htmlFor=""
          >
            Address 2
          </label>
          {state.inputs.secondAddress.isError &&
            state.inputs.secondAddress.isTouched && (
              <p>Please Enter a Valid Address</p>
            )}
        </fieldset>
        <button>CREATE NEW USER</button>
      </form>
    </section>
  );
};

export default Profile;
