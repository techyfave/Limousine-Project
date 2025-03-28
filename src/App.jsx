import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import Aboutpage from "./Pages/Aboutpage";
import Servicepage from "./Pages/Servicepage";
import Contactpage from "./Pages/Contactpage";
import Reservationpage from "./Pages/Reservationpage";
import Executivepage from "./Pages/Executivepage";
import Corporatepage from "./Pages/Corporatepage";
import Eventpage from "./Pages/Eventpage";
import Weddingpage from "./Pages/Weddingpage";
import Legalpage from "./Pages/Legalpage";
import Privacypage from "./Pages/Privacypage";
import Footer from "./components/footer/Footer";
import Howitworkpage from "./Pages/Howitworkpage";
import Faqspage from "./Pages/Faqspage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/services" element={<Servicepage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/reservation" element={<Reservationpage />} />
          <Route path="/executive" element={<Executivepage />} />
          <Route path="/corporate" element={<Corporatepage />} />
          <Route path="/event" element={<Eventpage />} />
          <Route path="/wedding" element={<Weddingpage />} />
          <Route path="/legal" element={<Legalpage />} />
          <Route path="/privacy" element={<Privacypage />} />
          <Route path="/howitworks" element={<Howitworkpage />} />
          <Route path="/frequently-asked-questions" element={<Faqspage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
