import React from "react";
import Navbar from "./components/Navbar/Navbar";
// import Herosection from "./components/home/Herosection";
// import Herosection2 from "./components/home/Herosection2";
import About from "./components/about/About";
// import Services from "./components/servicess/Services";
// import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Reservation from "./components/reservation/Reservation";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Reservation />
        <Footer />
      </div>
    </>
  );
}

export default App;
