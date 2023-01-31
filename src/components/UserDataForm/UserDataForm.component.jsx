import * as Yup from "yup";
import { useFormik } from "formik";

const UserDataForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      gender: "male",
      dateOfBirth: "",
    },
    //  validation
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "Name should not be exceed 20 characters")
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),
      lastName: Yup.string().required("last name is required"),
      email: Yup.string().email("email is required"),
      password: Yup.string()
        .min(8, "Password should be at least 8 characters long")
        .required("password is required"),
      gender: Yup.string().required("gender is required"),
      dateOfBirth: Yup.string().required("date of birth is required"),
    }),
    //  submit handler
    onSubmit: () => {
      console.log(formik.values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h1>User Details</h1>
      <div>
        <p>{formik.errors.firstName}</p>
        <input
          placeholder="First name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          name="firstName"
        />
        <input
          placeholder="Last name"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          name="lastName"
        />
        <input
          placeholder="Email address"
          type={"email"}
          value={formik.values.email}
          onChange={formik.handleChange}
          name="email"
        />
        <input
          placeholder="Password"
          type={"password"}
          value={formik.values.password}
          onChange={formik.handleChange}
          name="password"
        />
        <br />
        <div role={"group"}>
          <label htmlFor="gender">Gender</label>
          <select
            value={formik.values.gender}
            onChange={formik.handleChange}
            name="gender"
          >
            <option defaultValue={true} value="male">
              Male
            </option>
            <option value="female">Female</option>
          </select>
        </div>
        <label htmlFor="date-of-birth">date of birth</label>
        <input
          type={"date"}
          max="2002-01-02"
          value={formik.values.dateOfBirth}
          onChange={formik.handleChange}
          name="dateOfBirth"
        />
      </div>
      <h1>Religion information's</h1>
      <div></div>
      <h1>About Family </h1>
      <div></div>
      <h1>Educations</h1>
      <div></div>
      <h1>Write about yourself a few words</h1>
      <div></div>
      <h1>Upload your profile picture</h1>
      <div></div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default UserDataForm;
