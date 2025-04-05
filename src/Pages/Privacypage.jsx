import React, { useEffect } from "react";
import Head from "../components/head/Head";
import Privacy from "../components/privacy/Privacy";

function Privacypage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <div>
      <Head
        text="Privacy Policy"
        styling="head"
        textStyle="text"
        bgOverlay="bg-overlay"
      />
      <Privacy />
    </div>
  );
}

export default Privacypage;
