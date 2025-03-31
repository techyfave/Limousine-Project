import React, { useEffect } from "react";
import Executive from "../components/executive/Executive";
import Head from "../components/head/Head";
import Executive2 from "../components/executive/Executive2";
import Nextstep from "../components/corporate/Nextstep";

function Executivepage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Head
        text="Executive"
        styling="head"
        textStyle="text"
        bgOverlay="bg-overlay"
      />
      <Executive />
      <Executive2 />
      <Nextstep
        text="Experience Effortless Luxury Travel"
        parText="Get ready to elevate your corporate journeys to the next level. Discover an unmatched standard in executive transportation with our premium limousine service."
      />
    </div>
  );
}

export default Executivepage;
