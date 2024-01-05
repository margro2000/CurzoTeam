import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleSubmit = () => {
    console.log("Input Value:", inputValue);
    console.log("Selected Option:", selectedOption);
  };

  return (
    <div className="app-container">
      
      <h1>Design Your Own Learning, Instantly</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="What do you want to learn?"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="submit-button" onClick={handleSubmit}>
          &#8594; {/* Unicode arrow character for right arrow */}
        </button>
      </div>
      <div>
        <select onChange={handleOptionChange}>
          <option value="">Select an option</option>
          <option value="option1">1 month</option>
          <option value="option2">2 months</option>
          <option value="option3">3 months</option>
        </select>
      </div>
    </div>
  );
}

export default App;
