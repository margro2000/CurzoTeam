import React, { useState, useEffect } from "react";
import "./App.css";
import ContentPage from "./ContentPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Module from "./Module";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [showContentPage, setShowContentPage] = useState(false);

  const [data, setData] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Input Value:", inputValue);
    console.log("Selected Option:", selectedOption);
    setShowContentPage(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/module/:moduleId" element={<Module />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
