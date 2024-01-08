// LoginPage.js

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "./Login.css"; // Import your login page styles
import Navbar from "./Navbar";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Use useNavigate hook to navigate

  const handleUsernameChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDjnjrr--JqOt8_5ot_xfk8G0xWKOJHYMk",
    authDomain: "curzo-3779e.firebaseapp.com",
    projectId: "curzo-3779e",
    storageBucket: "curzo-3779e.appspot.com",
    messagingSenderId: "467674040445",
    appId: "1:467674040445:web:e5657676d3205893d04914",
    measurementId: "G-3CEPFBGC7G"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const login = (e) => {
    e.preventDefault();
    const auth = getAuth();
    const userEmail = document.getElementById('email').value;
    const userPassword = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("You logged in");
        alert('Welcome back to Curzo!');
        navigate("/"); // Navigate to the home page
      })
      .catch((error) => {
        console.log('Error with logging in, ', error.message);
      });
  };

  return (
    <div>
      <Navbar></Navbar>

      <div className="login-container">
        <h1 className="h1-login">Login</h1>
        <form onSubmit={login}>
          <div className="label-login">
            <label>
              Email:
              <input
                type="text"
                id="email"
                placeholder="email"
                value={email}
                onChange={handleUsernameChange}
              />
            </label>
          </div>
          <div className="label-login">
            <label>Password:</label>
            <input
              className="input-login"
              type="password"
              id="password"
              placeholder="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button className="button-login" type="submit">Submit</button>
        </form>
        <p className="p-login">
          Don't have an account?{" "}
          <Link to="/signup">Create Account</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;