import React, { useEffect } from "react";
import Corporate from "../components/corporate/Corporate";
import Head from "../components/head/Head";
import Corporate2 from "../components/corporate/Corporate2";
import Nextstep from "../components/corporate/Nextstep";

function Corporatepage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <div>
      <Head
        text="Corporate"
        styling="head"
        textStyle="text"
        bgOverlay="bg-overlay"
      />
      <Corporate />
      <Corporate2 />
      <Nextstep
        text="Move Forward to Seamless Travel"
        parText=" Prepare to discover a new level in corporate transportation? Book your
        initial ride with us today."
      />
    </div>
  );
}

export default Corporatepage;
