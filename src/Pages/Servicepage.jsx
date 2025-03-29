import React, { useEffect } from "react";
import Services2 from "../components/servicess/Services2";
import Head from "../components/head/Head";
import "../components/head/head.css";
import Services1 from "../components/servicess/Services1";

function Servicepage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <div>
      <Head
        text="Services"
        styling="head"
        textStyle="text"
        bgOverlay="bg-overlay"
      />
      <Services1 />
      <Services2 />
    </div>
  );
}

export default Servicepage;
