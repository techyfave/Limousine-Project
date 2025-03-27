import React, { useEffect } from "react";
import About from "../components/about/About";
import Head from "../components/head/Head";

function Aboutpage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <div>
      <Head text="About" styling="head" />
      <About />
    </div>
  );
}

export default Aboutpage;
