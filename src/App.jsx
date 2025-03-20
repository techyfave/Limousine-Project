// import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Herosection from "./components/home/Herosection";
import Herosection2 from "./components/home/Herosection2";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Herosection />
        <Herosection2 />
      </div>
    </>
  );
}

export default App;
