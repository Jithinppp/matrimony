import { useContext } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm.component";
import { userContext } from "../../context/user.context";

const SignUp = () => {
  const { phoneAuthHandler, phoneAuth } = useContext(userContext);

  const submitHandler = (e) => {
    e.preventDefault();
    phoneAuthHandler();
  };

  return (
    <div>
      <h1>sign up matrimony</h1>
      <br />
      {!phoneAuth && (
        <form onSubmit={submitHandler}>
          <label>Enter your phone number</label>
          <input type={"number"} required />
          <button type="submit">Submit</button>
        </form>
      )}
      {phoneAuth && <SignUpForm />}
    </div>
  );
};
export default SignUp;
