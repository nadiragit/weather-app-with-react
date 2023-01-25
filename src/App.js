import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Boston" />
        <footer>
          This project is coded by Nadira Benhamida and is{" "}
          <a
            href="https://github.com/nadiragit/weather-app-with-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
