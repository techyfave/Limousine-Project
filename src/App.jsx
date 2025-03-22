import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/about/About";
import Footer from "./components/Footer/Footer";
import Privacy from "./components/privacy/Privacy";

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
