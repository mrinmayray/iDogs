import React, { useState, useEffect } from "react";
import "./LogInFormStyles.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LogInForm = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already logged in
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Log-in
    const response = await fetch("https://idogs.onrender.com/api/auth/login", {
      method: `POST`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and update logged-in status
      localStorage.setItem("token", json.authtoken);
      setIsLoggedIn(true);
      navigate("/");
      toast.success("Logged in Successfully");
    } else {
      toast.error("Invalid Credentials");
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    // Sign-Up
    const response = await fetch("https://idogs.onrender.com/api/auth/createuser", {
      method: `POST`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and update logged-in status
      localStorage.setItem("token", json.authtoken);
      setIsLoggedIn(true);
      toast.success("Account Created Successfully, Please Log-In");
    } else {
      toast.error("Signup Failed");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogout = () => {
    // Clear auth token and update logged-in status
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    toast.success("Logged out Successfully");
  };

  return (
    <div className="login-body">
      <div className="login-main">
        <input
          type="checkbox"
          id="chk"
          className="login-input"
          aria-hidden="true"
        />
        {!isLoggedIn ? ( // Show Sign-Up form if not logged in
          <div className="signup">
            <form onSubmit={handleSignup}>
              <label htmlFor="chk" className="login-label" aria-hidden="true">
                Sign up
              </label>
              <input
                type="text"
                className="login-input"
                name="name"
                placeholder="Name"
                value={credentials.name}
                onChange={onChange}
                required
              />
              <input
                type="email"
                className="login-input"
                name="email"
                placeholder="Email"
                value={credentials.email}
                onChange={onChange}
                required
              />
              <input
                type="password"
                className="login-input"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={onChange}
                minLength={5}
                required
              />
              <button className="signup-button">Sign up</button>
            </form>
          </div>
        ) : (
          // Show Log-Out button if logged in
          <div className="logout">
            <div className="logout-h">
              <h2>You are already Logged-In</h2>
            </div>
            <button className="logout-button" onClick={handleLogout}>
              Log Out
            </button>
          </div>
        )}
        {!isLoggedIn ? ( // Show Login form if not logged in
          <div className="login">
            <form onSubmit={handleSubmit}>
              <label htmlFor="chk" className="login-label" aria-hidden="true">
                Login
              </label>
              <input
                type="email"
                className="login-input"
                name="email"
                placeholder="Email"
                value={credentials.email}
                onChange={onChange}
                required
              />
              <input
                type="password"
                className="login-input"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={onChange}
                required
              />
              <button className="login-button">Login</button>
            </form>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default LogInForm;
