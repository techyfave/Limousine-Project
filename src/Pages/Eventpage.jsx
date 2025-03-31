import React, { useEffect } from "react";
import Head from "../components/head/Head";
import Event from "../components/eventss/Event";
import Event2 from "../components/eventss/Event2";
import Nextstep from "../components/corporate/Nextstep";

function Eventpage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <div>
      <Head
        text="Events"
        styling="head"
        textStyle="text"
        bgOverlay="bg-overlay"
      />
      <Event />
      <Event2 />
      <Nextstep
        text="Elevate Your Event Transportation Experience"
        parText="Get ready to experience a new standard in event travel. Reserve your first journey with us today."
      />
    </div>
  );
}

export default Eventpage;
