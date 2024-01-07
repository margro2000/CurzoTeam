// App.js

import React, { useState, useEffect } from "react";
import "./App.css";
import ContentPage from "./ContentPage";
import { BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [showContentPage, setShowContentPage] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = async () => {
    console.log("Input Value:", inputValue);
    console.log("Selected Option:", selectedOption);
    const res = await fetch(`http://localhost:5000/chat?input=${inputValue}`)
      .then(response => response.text())
      .then(data => setInputValue(data))
      .catch(error => console.log(error));
      console.log(inputValue, res);
    setShowContentPage(true);
  };

 

  return (
    <div>
      <Navbar></Navbar>
      <div className="app-container">
        <h1>Design Your Own Learning, Instantly</h1>
        <p className="tagline">
          Explore personalized learning paths tailored just for you!
        </p>
        <div className="input-container">
          <input
            type="text"
            placeholder="What do you want to learn?"
            value={inputValue}
            onChange={handleInputChange}
          />
          {/* <div>
          {data && data.members && data.members.map((member, i) => (
          <p key={i}>{member}</p>
          ))}
          </div> */}
          <select onChange={handleOptionChange}>
            <option value="">Select a duration</option>
            <option value="1 week">1 week</option>
            <option value="2 weeks">2 weeks</option>
            <option value="3 weeks">3 weeks</option>
            <option value="4 weeks">4 weeks</option>
            <option value="5 weeks">5 weeks</option>
            <option value="6 weeks">6 weeks</option>
          </select>
          <button className="submit-button" onClick={handleSubmit}>
            Get Started &#8594;
          </button>
        </div>
        {showContentPage && (
          <ContentPage
            inputValue={inputValue}
            selectedOption={selectedOption}
          />
        )}
      </div>
    </div>
  );
}

export default App;
