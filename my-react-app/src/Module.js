// ModulePage.js
import React from "react";
import { useParams } from "react-router-dom";
import "./Module.css"; // Import the updated CSS file
import YouTube from "react-youtube";
import Navbar from "./Navbar";

const ModulePage = ({ match }) => {
  const { moduleId } = useParams();

  // Example video IDs (replace with your actual video IDs)
  const videoIds = ["zjkBMFhNj_g", "5sLYAQS9sWQ", "lnA9DMvHtfI"];

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="module-container-two">
        <h2 className="h2-two">Module {moduleId}: Title</h2>
        <div className="summary">Summary / Goals of the module go here</div>
        <div className="module-links">
          <h3>YouTube Videos:</h3>
          <div className="video-container">
            {videoIds.map((videoId) => (
              <YouTube key={videoId} videoId={videoId} opts={opts} />
            ))}
          </div>
          <h3>Supplementary Text</h3>
          <p>Testing</p>
          <h3>Other Resources</h3>
        </div>
      </div>
    </div>
  );
};

export default ModulePage;
