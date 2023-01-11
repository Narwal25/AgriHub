import "../CSS/Login.css";

import React, { useState } from "react";

const Login = () => {
  const [passShow, setPassShow] = useState(false);

  const [inpval, setInpval] = useState({
    username: "",
    password: "",
    type:""
  });

  const setVal = (e) => {
    // console.log(e.target.value)

    const { name, value } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const loginUser = async (e) => {
    e.preventDefault();

    const { username, password } = inpval;

    if (username === "") {
      alert("please enter your username");
    } else if (password === "") {
      alert("please enter password");
    } else if (password.length < 6) {
      alert("password must be 6 char");
    } else {
      console.log("Login succesfull ");
      console.log(inpval);
    }
  };

  const getInitialState = () => {
    const value = "admin";
    return value;
  };

  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Log In</h1>
            <p>Please LogIn</p>
            <img src="Linux_Logo.webp" alt="" />
          </div>

          <form>
            <div className="form_input">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                value={inpval.username}
                placeholder="Enter your username"
                onChange={setVal}
              />
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input
                  type={!passShow ? "password" : "text"}
                  name="password"
                  id="password"
                  value={inpval.password}
                  placeholder="Enter your Password"
                  onChange={setVal}
                />
                <div
                  className="showpass"
                  onClick={() => setPassShow(!passShow)}
                >
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>
            <button className="btn2" onClick={loginUser}>
              Login
            </button>
            <p>Don,t have an Account ?</p>
          </form>
        </div>
      </section>
      {/* // //////////////////////////////// */}
      <div>
        <select name={inpval.type} value={value} onChange={handleChange}>
          <option name="admin" value="Admin">
            Admin
          </option>
          <option name="a" value="A">
            A
          </option>
          <option name="b" value="B">
            B
          </option>
        </select>
        <p>{`You selected ${value}`}</p>
      </div>
    </>
  );
};

export default Login;
