import React, { useEffect } from "react";
import Head from "../components/head/Head";
import Howitworks from "../components/howItWorks/Howitworks";

function Howitworkpage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <div>
      <Head text="How it Works" styling="head" />
      <Howitworks />
    </div>
  );
}

export default Howitworkpage;
