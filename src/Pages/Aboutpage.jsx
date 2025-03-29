import React, { useEffect } from "react";
import About from "../components/about/About";
import Head from "../components/head/Head";
import About2 from "../components/about/About2";
import About3 from "../components/about/About3";

function Aboutpage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <div>
      <Head
        text="About Us"
        styling="head"
        textStyle="text"
        bgOverlay="bg-overlay"
      />
      <About />
      <About2 />
      <About3 />
    </div>
  );
}

export default Aboutpage;
