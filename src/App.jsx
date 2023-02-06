import React from "react";
import Roadmap from "./UI/Roadmap Section/Roadmap";
import Hero from "./UI/Home Section/Hero";
import Team from "./UI/Team Section/Team";
import "./index.css";

function App() {
  return (
    <div>
      {/* <section className="relative block min-h-[2000px] bg-slate-900"></section> */}
      <Hero />
      <Roadmap />
      {/* <section className="relative block min-h-[2000px] bg-slate-900"></section> */}
      <Team />
    </div>
  );
}

export default App;
