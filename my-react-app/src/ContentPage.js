import React, { useState, useEffect } from "react";
import "./ContentPage.css"; // Import the CSS file
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const ContentPage = ({ inputValue, selectedOption }) => {
  const getModuleCount = () => {
    // Determine the number of modules based on the selected option
    switch (selectedOption) {
      case "1 week":
        return 1;
      case "2 weeks":
        return 2;
      case "3 weeks":
        return 3;
      case "4 weeks":
        return 4;
      case "5 weeks":
        return 5;
      case "6 weeks":
        return 6;
      default:
        return 0;
    }
  };

  const renderModules = () => {
    const moduleCount = getModuleCount();

    // Generate an array of modules based on the count
    const modules = Array.from({ length: moduleCount }, (_, index) => (
      <Link to={`/module/${index + 1}`} key={index} className="module">
        <h3>Module {index + 1}</h3>
        <p>Description of Module {index + 1}</p>
      </Link>
    ));

    return modules;
  };

  
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/members").then(
      (response) =>
        response.json().then((json) => {
          setData(json);
          console.log(json);
        })
    );    
  });


  return (
    // <div>
    //   <Navbar></Navbar>
      <div className="content-page">
        <h2>Your Learning Plan</h2>
        <p>
          You want to learn: <strong>{inputValue}</strong>
        </p>
        <p>
          Your selected learning duration: <strong>{selectedOption}</strong>
        </p>
        <div className="module-container">{renderModules()}</div>
      </div>
    // </div>
  );
};

export default ContentPage;
