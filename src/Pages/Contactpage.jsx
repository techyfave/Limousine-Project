import React, { useEffect } from "react";
import Contact from "../components/contact/Contact";
import Head from "../components/head/Head";

function Contactpage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <div>
      <Head text="Contact" styling="head" className="fs-4" />
      <Contact />
    </div>
  );
}

export default Contactpage;
