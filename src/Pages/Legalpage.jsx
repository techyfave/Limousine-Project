import React, { useEffect } from "react";
import Head from "../components/head/Head";
import Legal from "../components/legal/Legal";
import Legal2 from "../components/legal/Legal2";

function Legalpage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <div>
      <Head text="Legal Transportation Service" styling="head" />
      <Legal />
      <Legal2 />
    </div>
  );
}

export default Legalpage;
