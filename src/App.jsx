import React, { useState, useEffect } from "react";
import Roadmap from "./UI/Roadmap Section/Roadmap";
import Hero from "./UI/Home Section/Hero";
import Team from "./UI/Team Section/Team";
import Project from "./UI/About Section/Project";
import Market from "./UI/Market/Market";
import Events from "./UI/Events/Events";
import LoadingPage from "./UI/components/LoadingPage";
import "./index.css";

function App() {
  return (
    <div>
      <LoadingPage />
      <Hero />
      <section className="h-[300px] bg-gradient-to-b from-hero50 via-hero100 to-hero200"></section>
      <Project />
      <Market />
      <Events />
      <Roadmap />
      <Team />
    </div>
  );
}

export default App;
