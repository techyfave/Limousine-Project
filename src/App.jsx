import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Herosection from "./components/home/Herosection";
import Privacy from "./components/privacy/Privacy";
import About from "./components/about/About";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Privacy />
        <Footer />
      </div>
    </>
  );
}

export default App;
