import React, { useEffect } from "react";
import Herosection from "../components/Hero/Herosection";
import Herosection2 from "../components/Hero/Herosection2";
import Herosection3 from "../components/Hero/Herosection3";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <div className="home">
      <Herosection />
      <Herosection2 />
      <Herosection3 />
    </div>
  );
}

export default Home;
