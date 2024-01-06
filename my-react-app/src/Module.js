// ModulePage.js
import React from "react";
import { useParams } from "react-router-dom";

const Module = ({ match }) => {
  const {moduleId} = useParams();

  return (
    <div>
      <h2>Module {moduleId}</h2>
      {/* Add module-specific content here */}
    </div>
  );
};

export default Module;
