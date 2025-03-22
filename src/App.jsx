import React from "react";
import Navbar from "./components/Navbar/Navbar";
// import Corporate from "./components/corporate/corporate";
// import Corporate2 from "./components/corporate/Corporate2";
import About from "./components/about/About";
import Event from "./components/eventss/Event";
import Footer from "./components/footer/Footer";
import Nextstep from "./components/corporate/Nextstep";
import Event2 from "./components/eventss/Event2";
import Wedding from "./components/wedding/Wedding";
import Wedding2 from "./components/wedding/Wedding2";
import Legal from "./components/legal/Legal";
import Legal2 from "./components/legal/Legal2";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Legal />
        <Legal2 />
        <Nextstep />
        <Footer />
      </div>
    </>
  );
}

export default App;
