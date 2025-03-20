import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Herosection from "./components/home/Herosection";
import Herosection2 from "./components/home/Herosection2";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Services from "./components/servicess/Services";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
