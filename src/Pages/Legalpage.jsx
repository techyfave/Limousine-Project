import React, { useEffect } from "react";
import Head from "../components/head/Head";
import Legal from "../components/legal/Legal";
import Legal2 from "../components/legal/Legal2";
import Nextstep from "../components/corporate/Nextstep";

function Legalpage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <div>
      <Head
        text="Legal "
        styling="head"
        textStyle="text"
        bgOverlay="bg-overlay"
      />
      <Legal />
      <Legal2 />
      <Nextstep
        text="Enhance Your Legal Transportation Experience"
        parText="Prepare to discover a new level of luxury in legal travel. Book your initial journey with us today to secure reliable and discreet transportation for your legal needs."
      />
    </div>
  );
}

export default Legalpage;
