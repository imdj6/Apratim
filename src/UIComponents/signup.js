import React, { useEffect, useState } from "react";
import Button from "./Button";
import "./signup.css";
import { AiOutlineUserAdd } from "react-icons/ai";
import Logo from '../assests/logo.png'
const Signup = (props) => {
  const [username, setUserName] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState(0);
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [categories, setCategories] = useState([]);
  const [notification, setNotification] = useState(false);

  const [error, setError] = useState({
    username: false,
    first_name: false,
    email: false,
    category: false,
    password: false,
    cpassword: false,
  });

  const signupHandler = (e) => {
    e.preventDefault();
    if (
      error.username ||
      error.first_name ||
      error.email ||
      error.category ||
      error.password ||
      error.cpassword
    ) {
      return;
    }
    if (
      username === "" ||
      first_name === "" ||
      email === "" ||
      category === 0 ||
      password === "" ||
      cpassword !== password
    ) {
      if (username === "")
        setError((prev) => ({
          ...prev,
          username: true,
        }));
      if (first_name === "")
        setError((prev) => ({
          ...prev,
          first_name: true,
        }));
      if (email === "")
        setError((prev) => ({
          ...prev,
          email: true,
        }));
      if (category === 0)
        setError((prev) => ({
          ...prev,
          category: true,
        }));
      if (password === "")
        setError((prev) => ({
          ...prev,
          password: true,
        }));
      if (cpassword !== password)
        setError((prev) => ({
          ...prev,
          cpassword: true,
        }));
      return;
    }
  };


  return (
<div className="modal-card signin-card">
      <span className="close-modal" onClick={props.changeSignupModalState}>
        &times;
      </span>
      <div className="brand-container">
        <img src={Logo} className='w-28' />
      </div>
      {notification && (
        <div className={"notify " + notification.type}>
          {notification.message}
        </div>
      )}
      <form className="signin-form" onSubmit={signupHandler}>
        <div className="form-group">
          <input
            type="text"
            value={username}
            className={"form-field " + (error.username ? "error-border" : "")}
            placeholder="Username"
            onChange={(e) => {
              setUserName(e.target.value);
              if (e.target.value.length <= 2 || e.target.value.length >= 20) {
                setError((err) => ({
                  ...err,
                  username: true,
                }));
              } else {
                setError((err) => ({
                  ...err,
                  username: false,
                }));
              }
            }}
          />
          {error.username && (
            <span className="error-message">
              Username must be between 2 and 20 characters
            </span>
          )}
        </div>
        <div className="form-group split-group">
          <div>
            <input
              type="text"
              value={first_name}
              className={
                "form-field " + (error.first_name ? "error-border" : "")
              }
              placeholder="First Name"
              onChange={(e) => {
                setFirstName(e.target.value);
                if (e.target.value.length <= 2 || e.target.value.length >= 20) {
                  setError((err) => ({
                    ...err,
                    first_name: true,
                  }));
                } else {
                  setError((err) => ({
                    ...err,
                    first_name: false,
                  }));    
                }
              }}
            />
            {error.first_name && (
              <span className="error-message">First Name required</span>
            )}
          </div>
          <input
            type="text"
            value={last_name}
            className="form-field"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            value={email}
            className={"form-field " + (error.email ? "error-border" : "")}
            placeholder="Email Address"
            onChange={(e) => {
              setEmail(e.target.value);
              const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
              if (!regex.test(e.target.value)) {
                setError((err) => ({
                  ...err,
                  email: true,
                }));
              } else {
                setError((err) => ({
                  ...err,
                  email: false,
                }));
              }
            }}
          />
          {error.email && (
            <span className="error-message">Invalid Email Address</span>
          )}
        </div>

        <div className="form-group split-group">
          <div>
            <input
              value={password}
              type="password"
              className={"form-field " + (error.password ? "error-border" : "")}
              placeholder="Password"
              autoComplete="on"
              onChange={(e) => {
                setPassword(e.target.value);
                const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$@$!%*#?&]{8,}$/;
                if (!re.test(e.target.value)) {
                  setError((err) => ({
                    ...err,
                    password: true,
                  }));
                } else {
                  setError((err) => ({
                    ...err,
                    password: false,
                  }));
                }
              }}
            />
            {error.password && (
              <span className="error-message">
                Minimum eight characters, at least one uppercase letter, one
                lowercase letter and one number
              </span>
            )}
          </div>
          <div>
            <input
              value={cpassword}
              type="password"
              className="form-field"
              placeholder="Confirm Password"
              autoComplete="on"
              onChange={(e) => {
                setCpassword(e.target.value);
                if (e.target.value !== password) {
                  setError((err) => ({
                    ...err,
                    cpassword: true,
                  }));
                } else {
                  setError((err) => ({
                    ...err,
                    cpassword: false,
                  }));
                }
              }}
            />
            {error.cpassword && (
              <span className="error-message">Password did not match</span>
            )}
          </div>
        </div>

        <Button
          active
          buttonText="SIGN UP"
          icon={AiOutlineUserAdd}
          onClick={props.openVerifyModal}
        />
      </form>
      <span className="signup-link">
        Already have an account?{" "}
        <span onClick={props.changeModal} className="signup-colored">
          SignIn Here
        </span>
      </span>
    </div>
  );
};

export default Signup;
