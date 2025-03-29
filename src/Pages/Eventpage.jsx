import React, { useEffect } from "react";
import Head from "../components/head/Head";
import Event from "../components/eventss/Event";
import Event2 from "../components/eventss/Event2";

function Eventpage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <div>
      <Head text="Event Transportation Services" styling="head" />
      <Event />
      <Event2 />
    </div>
  );
}

export default Eventpage;
