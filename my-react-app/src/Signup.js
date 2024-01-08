import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import Navbar from "./Navbar";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Move useNavigate outside of the signup function

  const handleEmailChange = (e) => {
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

  const handleSignup = (e) => {
    e.preventDefault();
    // Perform signup logic here, e.g., send a request to the server
    console.log("Email:", email);
    console.log("Password:", password);
    signup(); // Call signup function directly
  };

  const signup = () => {
    const auth = getAuth();
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log("you logged in")
        navigate("/"); // Use navigate directly
      })
      .catch((error) => {
        console.log('Error with logging in, ',  error.message)
      });
  }

  return (
    <div>
      <Navbar></Navbar>

      <div className="signup-container">
        <h1 className="h1-signup">Create an Account</h1>
        <form onSubmit={handleSignup}>
          <label className="label-signup">
            Email:
            <input 
              type="text"
              value={email} 
              id='email'
              onChange={handleEmailChange} 
            />
          </label>
          <label className="label-signup">
            Password:
            <input
              className="input-signup"
              type="password"
              id='password'
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <button className="button-signup" type="submit">
            Sign Up
          </button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;