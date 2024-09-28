import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Login.css";

const Login = () => {
  return (
    <>
      <Navbar />
      <main className="login-page">
        <section className="login-container">
          <header>
            <h2>Login</h2>
          </header>
          <form className="login-form">
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="input-field"
            />
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
