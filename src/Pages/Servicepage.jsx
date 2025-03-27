import React, { useEffect } from "react";
import Services from "../components/servicess/Services";
import Head from "../components/head/Head";
import "../components/head/head.css";

function Servicepage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <div>
      <Head text="Services" styling="head" className="fs-4" />
      <Services />
    </div>
  );
}

export default Servicepage;
