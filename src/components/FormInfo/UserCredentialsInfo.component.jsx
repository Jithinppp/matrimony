const UserCredentialsInfo = () => {
  return (
    <div>
      <input placeholder="First name" type={"text"} />
      <input placeholder="Second name" type={"text"} />
      <input placeholder="Email id" type={"email"} />
      <input placeholder="Password" type={"password"} />
      <input placeholder="Date of birth" type={"date"} />
      <input placeholder="Address" type={"text"} />
      <select name="gender">
        <option value={"male"}>Male</option>
        <option value={"female"}>Female</option>
      </select>
    </div>
  );
};
export default UserCredentialsInfo;
