import React, { useState } from "react";
import Button from "./Button";
import "./Login.css";
import Logo from '../assests/logo.png'
import { AiOutlineLogin } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [notification, setNotification] = useState(false);
    const [error, setError] = useState({
        email: false,
        password: false,
    });

    // const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            if (email === "")
                setError({
                    ...error,
                    email: true,
                });
            if (password === "")
                setError({
                    ...error,
                    password: true,
                });
            return;
        }

        
    };

    return (
        <div className="modal-card signin-card">
            <span className="close-modal" onClick={props.changeLoginModalState}>
                &times;
            </span>
            <div className="brand-container">
            <img src={Logo} className='w-24' alt="" srcset="" />
            </div>
            {notification && (
                <div className={"notify " + notification.type}>
                    {notification.message}
                </div>
            )}

            <form className="signin-form" onSubmit={submitHandler}>
                <div className="form-group">
                    <input
                        type="email"
                        value={email}
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Email Address"
                        className={"form-field " + (error.email ? "error-border" : "")}
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
                        <span className="error-message">Invalid email address</span>
                    )}
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        value={password}
                        className={"form-field " + (error.password ? "error-border" : "")}
                        id="password"
                        placeholder="Password"
                        autoComplete="on"
                        onChange={(e) => {
                            setPassword(e.target.value);
                            if (e.target.value === "")
                                setError((err) => ({
                                    ...err,
                                    password: true,
                                }));
                            else
                                setError((err) => ({
                                    ...err,
                                    password: false,
                                }));
                        }}
                    />
                    {error.password && (
                        <span className="error-message">Password cannot be empty</span>
                    )}
                </div>
                <Button active buttonText="LOGIN" icon={AiOutlineLogin} />
            </form>
            <span className="signup-link">
                Forgot Password?{" "}
                <span className="signup-colored" onClick={props.openResetModal}>
                    Change Password
                </span>
            </span>
            <span className="signup-link">
                Need an account?{" "}
                <span className="signup-colored" onClick={props.changeModal}>
                    Signup Here
                </span>
            </span>
        </div>
    );
};

export default Login;

