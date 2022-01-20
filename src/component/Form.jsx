import React, { useState } from "react";
import meta from "../images/meta.png";

const Form = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues.name)
    alert(`Username : ${formValues.username} and Password : ${formValues.password}`)
  };
  return (
    <>
     <form onSubmit={handleSubmit}>
      <div className="form">
        <img src={meta} className="meta"></img>
        <h1 className="formheading">Welcome to Demo</h1>
        <input
          type="text"
          placeholder="  Username"
          onChange={handleChange}
          value={formValues.username}
          name="username"
          className="forminput"
        />
        <input
          type="password"
          placeholder="  Password"
          onChange={handleChange}
          name="password"
          value={formValues.password}
          className="forminput"
        />
        <button type="submit" className="btnsubmit">
          Submit
        </button>
        <button className="btnsignup">SignUp</button>
        <a className="forget" href="#">Forget Password</a>
      </div>
      </form>
    </>
  );
};

export default Form;

{
  /* <div className="form-group py-2">
<label htmlFor="exampleInputPassword1">User Name :</label>
<input
  value={username}
/>
</div> */
}
