import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar"; // Importing the Navbar component
import "./Login.css";

const Login = () => {
  return (
    <>
      <Navbar /> {/* Including the Navbar component */}
      <main className="login-page">
        <section className="login-container">
          <header>
            <h2>Login</h2>
          </header>
          <form className="login-form">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="input-field"
            />

            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="input-field"
            />

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>

          <p>
            Don’t have an account?{" "}
            <Link to="/signup" className="signup-link">
              Signup
            </Link>
          </p>

          <button className="google-login-btn">Login with Google</button>
        </section>
      </main>
    </>
  );
};

export default Login;
