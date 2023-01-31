import { useContext } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
// context
import UserDataForm from "../../components/UserDataForm/UserDataForm.component";
import { userContext } from "../../context/user.context";
import {
  ErrorTitle,
  SharedMainTitle,
  SharedSmallTitle,
} from "../../layouts/shared/shared.style";
import { PhoneVerifyButton, SignUpPageContainer } from "./sign-up.style";

const SignUp = () => {
  const { phoneAuthHandler, phoneAuth } = useContext(userContext);
  const phoneRegexInd = /^[6-9]\d{9}$/;

  const formik = useFormik({
    initialValues: {
      phoneAuth: "",
    },
    validationSchema: Yup.object({
      phoneAuth: Yup.string()
        .matches(phoneRegexInd, "Number should be 10 characters long")
        .required("phone number is required"),
    }),
    onSubmit: () => {
      console.log(formik.values);
      phoneAuthHandler();
    },
  });

  return (
    <SignUpPageContainer>
      <SharedMainTitle>
        {phoneAuth
          ? "Complete your profile"
          : "Your search for the perfect match ends here!"}
      </SharedMainTitle>
      {!phoneAuth && <SharedSmallTitle>most trusted platform</SharedSmallTitle>}
      <br />
      {!phoneAuth && (
        <form onSubmit={formik.handleSubmit}>
          <label>Enter your phone number</label>
          <br />
          <input
            type={"number"}
            required
            value={formik.values.phoneAuth}
            onChange={formik.handleChange}
            name="phoneAuth"
            placeholder="9897XXXXX"
          />
          <PhoneVerifyButton type="submit">Submit</PhoneVerifyButton>
          <ErrorTitle>{formik.errors.phoneAuth}</ErrorTitle>
        </form>
      )}
      {phoneAuth && <UserDataForm />}
    </SignUpPageContainer>
  );
};
export default SignUp;
