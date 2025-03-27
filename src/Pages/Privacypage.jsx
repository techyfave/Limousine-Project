import React, { useEffect } from "react";
import Head from "../components/head/Head";
import Privacy from "../components/privacy/Privacy";

function Privacypage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <div>
      <Head text="Privacy Policy" styling="head" />
      <Privacy />
    </div>
  );
}

export default Privacypage;
